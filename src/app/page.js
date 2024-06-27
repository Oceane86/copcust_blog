"use client"; 
import React from "react";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { getAuth, signOut } from 'firebase/auth'; 
import db from "../../utils/firestore";
import { collection, query, orderBy, limit, startAfter, getDocs } from "firebase/firestore";

import Dashboard from "../../components/Dashboard";

const usersData = [
  {
    "email": "user1@example.com",
    "password": "password1"
  },
  {
    "email": "user2@example.com",
    "password": "password2"
  },
  {
    "email": "admin@example.com",
    "password": "admin"
  }
];

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const itemsPerPage = 5;
  const [user, setUser] = useState(null); 

  useEffect(() => {
    fetchItems();
    checkAuthState();
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

  const checkAuthState = () => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe(); 
  };



  const handleLogin = async (email, password) => {
    try {
      const userFromData = usersData.find(user => user.email === email && user.password === password);

      if (userFromData) {
        setUser({ email: userFromData.email }); 
        router.push('/dashboard');
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setUser(null); 
      router.push('/'); 
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Dashboard - List of Items</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleLogout}>Logout</button>
          <Dashboard />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
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
};

export default ListItems;
