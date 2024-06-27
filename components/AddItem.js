// components/AddItem.js
import React from "react";
import { useState } from 'react';
import db from '../utils/firestore';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

let useNavigate;
if (typeof document !== 'undefined') {
  // Seul le navigateur dispose de document
  useNavigate = require('react-router-dom').useNavigate;
} else {
  // Environnement de rendu côté serveur ou autre
  // Utiliser un stub pour useNavigate pour éviter les erreurs
  useNavigate = () => null;
}

const AddItem = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(''); // État pour le message de confirmation
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let imageUrl = '';

      if (image) {
        // Logique pour télécharger l'image et obtenir l'URL
        imageUrl = await uploadImage(image);
      }

      const itemData = {
        title,
        content,
        imageUrl,
        createdAt: Timestamp.fromDate(new Date()),
      };

      console.log("Item Data:", itemData); // Ajout du console.log ici

      await addDoc(collection(db, "items"), itemData);

      console.log("Document successfully written!");
      setMessage('Article créé avec succès !'); // Mettre à jour le message de confirmation
      navigate('/'); // Rediriger vers la page de liste après un court délai
    } catch (error) {
      setMessage('Erreur lors de la création de l\'article.');
      console.error("Error writing document: ", error);
    }
  };

  // Fonction pour télécharger l'image et obtenir l'URL
  const uploadImage = async (image) => {
    try {
      // Obtenir la référence au stockage Firebase
      const storage = getStorage();

      // Créer une référence au chemin où l'image sera stockée dans le stockage Firebase
      const storageRef = ref(storage, `images/${image.name}`);

      // Télécharger l'image dans le stockage Firebase
      const snapshot = await uploadBytes(storageRef, image);

      // Obtenir l'URL de téléchargement de l'image
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log("Download URL:", downloadURL); // Ajout du console.log ici

      return downloadURL; // Retourner l'URL de l'image téléchargée
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error; // Lancer une erreur pour la gérer dans la fonction appelante si nécessaire
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
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image</label>
          <input type="file" onChange={handleImageChange} style={styles.input} />
        </div>
        <button type="submit" style={styles.submitButton}>Créer</button>
      </form>
      {message && <p style={styles.message}>{message}</p>} {/* Afficher le message de confirmation */}
      <div style={styles.preview}>
        <h3>Prévisualisation :</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} /> {/* Rendre le contenu HTML */}
      </div>
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
    height: '300px', // Ajuster la hauteur selon vos besoins
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
