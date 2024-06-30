// components/ViewItem

import React, { useEffect, useState } from 'react';
import db from '../utils/firestore';
import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';

const ListArticle = () => {
  const [items, setItems] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 4; // Afficher seulement 4 articles par page

  useEffect(() => {
    const fetchData = async () => {
      await fetchItems();
      calculateTotalItems();
    };
    fetchData();
  }, [currentPage]);

  const fetchItems = async () => {
    try {
      let itemsQuery = query(
        collection(db, "items"),
        orderBy("title"),
        limit(itemsPerPage)
      );

      if (currentPage > 1) {
        itemsQuery = query(
          collection(db, "items"),
          orderBy("title"),
          startAfter(lastVisible),
          limit(itemsPerPage)
        );
      }

      const querySnapshot = await getDocs(itemsQuery);
      const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastVisible(lastVisibleDoc);
      setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsEmpty(querySnapshot.empty);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  const calculateTotalItems = async () => {
    try {
      const totalItemsQuery = query(collection(db, "items"));
      const totalItemsSnapshot = await getDocs(totalItemsQuery);
      const totalItemsCount = totalItemsSnapshot.size;
      setTotalItems(totalItemsCount);
    } catch (error) {
      console.error("Error calculating total items: ", error);
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div style={styles.content}>
      <h2 style={styles.header}>Liste des Articles</h2>
      <div style={styles.articleList}>
        {items.map((item) => (
          <div key={item.id} style={styles.articleCard}>
            {item.imageUrl && (
              <div style={styles.imageContainer}>
                <img src={item.imageUrl} alt={item.title} style={styles.image} />
              </div>
            )}
            <div style={styles.articleContent}>
              <h3 style={styles.articleTitle}>{item.title}</h3>
              <div
                style={styles.articleText}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              {item.createdAt && (
                <p style={styles.date}>
                  Publié le : {item.createdAt.toDate().toLocaleDateString('fr-FR')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {!isEmpty && (
        <div style={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1} style={styles.paginationButton}>
            &lt; Précédent
          </button>
          <span style={styles.paginationText}>Page {currentPage} sur {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} style={styles.paginationButton}>
            Suivant &gt;
          </button>
        </div>
      )}
    </div>
  );
};

// Styles
const styles = {
  content: {
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  articleList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  articleCard: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  image: {
    width: '200px', // Taille réduite de l'image
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  articleContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  articleTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  articleText: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  date: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '10px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  paginationButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginRight: '10px',
    outline: 'none',
    boxShadow: 'none',
  },
  paginationText: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 10px',
  },
};

export default ListArticle;
