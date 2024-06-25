// components/Login.js

import { useState } from "react";
import users from '../utils/users.json';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      onLogin(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
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
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Login;
