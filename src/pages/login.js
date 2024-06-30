// pages/login.js


import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/compat/app'; // Utiliser 'firebase/compat/app' pour les versions compatibles avec v9
import 'firebase/compat/auth'; // Utiliser 'firebase/compat/auth' pour les versions compatibles avec v9
import { firebaseConfig } from '../../utils/firebaseConfig'; 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); 
}

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/'); // Redirection après la connexion réussie
    } catch (error) {
      console.error('Erreur de connexion :', error.message);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Connexion</button>
    </form>
  );
}
