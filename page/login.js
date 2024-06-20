// pages/login.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../utils/firebaseConfig'; 

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
      <Route path="/" element={<ListItems />} />
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
