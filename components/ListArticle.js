// components/ListArticle.js


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../utils/firestore';
import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import DeleteItem from './DeleteItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ListArticle = () => {
  const [items, setItems] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 4; // Afficher seulement 4 articles par page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await fetchItems();
      calculateTotalItems();
    };
    fetchData();
  }, [currentPage]); // Ne pas inclure `fetchItems` comme dépendance

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

  const handleEdit = (id) => {
    console.log(`Editing item with id: ${id}`);
    navigate(`/edit/${id}`); // Redirect to the edit page
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.content}>
      <h2 style={styles.header}>Liste des Articles</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Nom</th>
            <th style={styles.tableHeader}>Description</th>
            <th style={styles.tableHeader}>Image</th>
            <th style={styles.tableHeader}>Date de Publication</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{item.title}</td>
              <td style={styles.tableCell} dangerouslySetInnerHTML={{ __html: item.content }} />
              <td style={styles.tableCell}>
                {item.imageUrl && (
                  <img src={item.imageUrl} alt={item.title} style={styles.image} />
                )}
              </td>
              <td style={styles.tableCell}>
                {item.createdAt && (
                  <p style={styles.date}>{item.createdAt.toDate().toLocaleDateString('fr-FR')}</p>
                )}
              </td>
              <td style={styles.tableCell}>
                <button onClick={() => handleEdit(item.id)} style={styles.editButton}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <DeleteItem id={item.id} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  tableHeader: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
    verticalAlign: 'middle',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  editButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px', // Espacement en dessous du tableau
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
