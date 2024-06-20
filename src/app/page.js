// src/app/page.js

"use client";

import { useEffect, useState } from "react";
import db from "../../utils/firestore";
import { collection, query, orderBy, limit, startAfter, getDocs } from "firebase/firestore";
import DeleteItem from "../../components/DeleteItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Dashboard from "../../components/Dashboard";




const ListItems = () => {
  const [items, setItems] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const itemsQuery = query(
        collection(db, "items"),
        orderBy("title"),
        limit(itemsPerPage)
      );
      const querySnapshot = await getDocs(itemsQuery);
      const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastVisible(lastVisibleDoc);
      setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsEmpty(querySnapshot.empty);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
  };

  const fetchMoreItems = async () => {
    if (lastVisible) {
      try {
        const itemsQuery = query(
          collection(db, "items"),
          orderBy("title"),
          startAfter(lastVisible),
          limit(itemsPerPage)
        );
        const querySnapshot = await getDocs(itemsQuery);
        const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastVisible(lastVisibleDoc);
        setItems((prevItems) => [
          ...prevItems,
          ...querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        ]);
        setIsEmpty(querySnapshot.empty);
      } catch (error) {
        console.error("Error fetching more items: ", error);
      }
    }
  };

  const handleEdit = (id) => {
    console.log(`Editing item with id: ${id}`);
    // Redirigez vers une page de modification, ou ouvrez un formulaire de modification en modale
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Dashboard - List of Items</h2>
      <Dashboard />
     
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
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
  content: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '4px',
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
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#dc3545',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ListItems;
