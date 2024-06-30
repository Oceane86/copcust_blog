 // components/AddItem.js

 import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import db from '../utils/firestore'; // Assurez-vous que ce chemin est correct
 import { collection, addDoc, Timestamp } from 'firebase/firestore';
 import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
 import dynamic from 'next/dynamic'; // Import dynamique pour charger Quill de manière asynchrone
 import 'react-quill/dist/quill.snow.css'; // Styles de Quill
 
 const ReactQuill = dynamic(() => import('react-quill'), {
   ssr: false // Désactive le rendu côté serveur pour ReactQuill
 });
 
 const AddItem = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [cta, setCta] = useState('');
   const [image, setImage] = useState(null);
   const [message, setMessage] = useState('');
   const navigate = useNavigate();
 
   const modules = {
     toolbar: [
       [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
       [{size: []}],
       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
       [{'list': 'ordered'}, {'list': 'bullet'}, 
        {'indent': '-1'}, {'indent': '+1'}],
       ['link', 'image', 'video'],
       ['clean']
     ],
   }
 
   const formats = [
     'header', 'font', 'size',
     'bold', 'italic', 'underline', 'strike', 'blockquote',
     'list', 'bullet', 'indent',
     'link', 'image', 'video'
   ]
 
   const handleFileChange = (event) => {
     const file = event.target.files[0];
     setImage(file);
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     try {
       let imageUrl = '';
 
       if (image) {
         imageUrl = await uploadImage(image);
       }
 
       const itemData = {
         title,
         content,
         cta,
         imageUrl,
         createdAt: Timestamp.fromDate(new Date()),
       };
 
       const docRef = await addDoc(collection(db, 'items'), itemData);
       console.log('Document written with ID: ', docRef.id);
       setMessage('Article ajouté avec succès !');
       navigate('/');
     } catch (error) {
       console.error('Error writing document: ', error);
       setMessage('Erreur lors de l\'ajout de l\'article.');
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
       console.error('Error uploading image: ', error);
       throw error;
     }
   };
 
   return (
     <div style={styles.content}>
       <h2 style={styles.header}>Ajouter un Article</h2>
       <form onSubmit={handleSubmit} style={styles.form}>
         <div style={styles.formGroup}>
           <label style={styles.label}>Titre</label>
           <input
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             style={styles.input}
           />
         </div>
         <div style={styles.formGroup}>
           <label style={styles.label}>Contenu</label>
           {typeof window !== 'undefined' && (
             <ReactQuill
               value={content}
               onChange={setContent}
               modules={modules}
               formats={formats}
               style={{ height: '300px' }}
             />
           )}
         </div>
         <div style={styles.formGroup}>
           <label style={styles.label}>Déposer une Image</label>
           <input
             type="file"
             onChange={handleFileChange}
             style={styles.input}
             accept="image/*" 
           />
         </div>
         <button type="submit" style={styles.button}>
           Ajouter
         </button>
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
     fontSize: '16px',
     fontWeight: 'bold',
   },
   input: {
     padding: '10px',
     fontSize: '16px',
     borderRadius: '4px',
     border: '1px solid #ddd',
   },
   button: {
     padding: '10px 20px',
     fontSize: '16px',
     color: '#fff',
     backgroundColor: '#28a745',
     border: 'none',
     borderRadius: '4px',
     cursor: 'pointer',
   },
   message: {
     marginTop: '10px',
     padding: '10px',
     backgroundColor: '#f8d7da',
     color: '#721c24',
     border: '1px solid #f5c6cb',
     borderRadius: '4px',
   },
 };
 
 export default AddItem;
 