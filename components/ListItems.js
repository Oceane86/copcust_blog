//components/ListItems.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../utils/firestore';
import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import DeleteItem from './DeleteItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; 
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, [currentPage]);

  const fetchItems = async () => {
    try {
      let itemsQuery;
      if (currentPage === 1) {
        itemsQuery = query(
          collection(db, "items"),
          orderBy("title"),
          limit(itemsPerPage)
        );
      } else {
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
  
  const handleNextPage = () => {
    if (!isEmpty) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleEdit = (id) => {
    console.log(`Editing item with id: ${id}`);
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.header}>Liste des Articles</h2>
        <div style={styles.grid}>
          {items.map((item) => (
            <div key={item.id} style={styles.card}>
              {item.imageUrl && (
                <div style={styles.imageContainer}>
                  <Image src={item.imageUrl} alt={item.title} width={200} height={150} layout="responsive" />
                </div>
              )}
              <h3 style={styles.title}>{item.title}</h3>
              <div
                style={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              {item.createdAt && (
                <p style={styles.date}>Créé le : {item.createdAt.toDate().toLocaleDateString('fr-FR')}</p>
              )}
              <div style={styles.buttonGroup}>
                <button onClick={() => handleEdit(item.id)} style={styles.editButton}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <DeleteItem id={item.id} onDelete={handleDelete} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.paginationContainer}>
        <button onClick={handlePreviousPage} style={styles.paginationButton} disabled={currentPage === 1}>Précédent</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} style={styles.paginationButton} disabled={isEmpty}>Suivant</button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', 
  },
  content: {
    flex: '1 0 auto', 
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  articleContent: {
    fontSize: '14px',
    marginBottom: '10px',
    paddingLeft: '10px',
  },
  imageContainer: {
    marginBottom: '50px',
    maxWidth: '30%',
    overflow: 'hidden', 
  },
  date: {
    fontSize: '12px',
    color: '#888',
    marginBottom: '10px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
  editButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  paginationButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginLeft: '10px',
    marginRight: '10px',
  },
};

export default ListItems;
