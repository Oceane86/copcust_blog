 // components/AddItem.js


import React, { useState, useEffect } from "react";
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import dynamic from 'next/dynamic'; // Importer dynamic pour charger ReactQuill dynamiquement
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }); // Charger ReactQuill dynamiquement avec ssr: false

const AddItem = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Vérifier si l'élément existe avant d'ajouter une classe
      const someElement = document.getElementById('someElementId');
      if (someElement) {
        someElement.classList.add('active');
      }
    }
  }, []); // [] signifie que useEffect s'exécute une seule fois après le premier rendu

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let imageUrl = '';

      if (image) {
        imageUrl = await uploadImage(image);
      }

      const itemData = {
        title,
        content,
        imageUrl,
        createdAt: Timestamp.fromDate(new Date()),
      };

      // Assume `db` est initialisé correctement dans votre application
      await addDoc(collection(db, "items"), itemData);
      setMessage('Article créé avec succès !');
    } catch (error) {
      setMessage('Erreur lors de la création de l\'article.');
      console.error("Error writing document: ", error);
    }
  };

  const uploadImage = async (image) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error;
    }
  };

  return (
    <div style={styles.content}>
      <h2 style={styles.header}>Créer un Article</h2>
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
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['bold', 'italic', 'underline'],
                ['link', 'image'],
                ['clean'],
              ],
            }}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image</label>
          <input type="file" onChange={handleImageChange} style={styles.input} />
        </div>
        <button type="submit" style={styles.submitButton}>Créer</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
      <div style={styles.preview}>
        <h3>Prévisualisation :</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
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
    backgroundColor: '#007bff',
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
  preview: {
    marginTop: '30px',
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    backgroundColor: '#f8f9fa',
  },
};

export default AddItem;
