"use client"; // Ensure you're using the client-side rendering mode

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import db from "../../utils/firestore";
import { collection, query, orderBy, limit, startAfter, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'; // Import auth modules
import DeleteItem from "../../components/DeleteItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Dashboard from "../../components/Dashboard";

// Sample JSON data for user credentials
const usersData = [
  {
    "email": "user1@example.com",
    "password": "password1"
  },
  {
    "email": "user2@example.com",
    "password": "password2"
  }
];

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const itemsPerPage = 5;
  const [user, setUser] = useState(null); // State to manage user authentication status

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user if authenticated
      } else {
        setUser(null); // Clear user if not authenticated
      }
    });

    return () => unsubscribe(); // Clean up on unmount
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
    // Redirect or open edit form
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleLogin = async (email, password) => {
    try {
      // Simulate authentication against JSON data
      const userFromData = usersData.find(user => user.email === email && user.password === password);

      if (userFromData) {
        setUser({ email: userFromData.email }); // Set user if credentials match
        navigate('/dashboard'); // Navigate to dashboard or another route
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
      setUser(null); // Clear user on logout
      navigate('/'); // Navigate to home page or another route
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
