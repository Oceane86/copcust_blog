// components/UpdateItem.js


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const UpdateItem = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        if (!id) return;

        const docRef = doc(db, 'items', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const { title, content } = docSnap.data();
          setTitle(title);
          setContent(content);
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!id) {
        console.error('No id provided');
        return;
      }

      const itemData = {
        title,
        content,
      };

      const docRef = doc(db, 'items', id);
      await updateDoc(docRef, itemData);
      setMessage('Document successfully updated!');
      console.log('Document successfully updated with ID: ', id);

    } catch (error) {
      setMessage('Error updating document.');
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div style={styles.content}>
      <h2 style={styles.header}>Modifier l'Article</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            placeholder="Entrez le titre de l'article"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Contenu</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            style={styles.textarea}
            placeholder="Entrez le contenu de l'article"
          />
        </div>
        <button type="submit" style={styles.submitButton}>Mettre à jour</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  content: {
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  },
  textarea: {
    height: '300px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    alignSelf: 'flex-start',
  },
  message: {
    marginTop: '20px',
    color: '#28a745',
    fontWeight: 'bold',
  },
};

export default UpdateItem;
