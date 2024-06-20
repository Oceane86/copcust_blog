// components/DeleteItem.js
import React, { useState } from 'react';
import db from '../utils/firestore';
import { doc, deleteDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteItem = ({ id, onDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "items", id));
      console.log("Document deleted with ID: ", id);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      {confirmDelete ? (
        <div style={styles.confirmContainer}>
          <p>Êtes-vous sûr de vouloir supprimer cet article?</p>
          <button onClick={handleDelete} style={styles.confirmButton}>Oui</button>
          <button onClick={() => setConfirmDelete(false)} style={styles.cancelButton}>Annuler</button>
        </div>
      ) : (
        <button onClick={() => setConfirmDelete(true)} style={styles.deleteButton}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
    </>
  );
};

// Styles
const styles = {
  confirmContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f8d7da',
    padding: '10px',
    borderRadius: '4px',
    color: '#721c24',
  },
  confirmButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    margin: '5px',
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    margin: '5px',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#dc3545',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default DeleteItem;
