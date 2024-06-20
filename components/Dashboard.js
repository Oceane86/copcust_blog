// components


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ListItems from './ListItems';
import AddItem from './AddItem';
import ListArticle from './ListArticle';
import UpdateItem from './UpdateItem';
import { FaList, FaPlus, FaHome } from 'react-icons/fa'; 

const Dashboard = () => {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.sidebar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>
                <FaHome style={styles.icon} /> Accueil
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/list" style={styles.navLink}>
                <FaList style={styles.icon} /> Articles
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/add" style={styles.navLink}>
                <FaPlus style={styles.icon} /> Ajouter un article
              </Link>
            </li>
            {/* Ajoutez d'autres liens de navigation ici */}
          </ul>
        </nav>
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<ListItems />} />
            <Route path="/list" element={<ListArticle />} /> 
            <Route path="/add" element={<AddItem />} />
            <Route path="/edit/:id" element={<UpdateItem />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
  navItem: {
    width: '100%',
    marginBottom: '10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  navLinkHover: {
    backgroundColor: '#495057',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f8f9fa',
  },
  icon: {
    marginRight: '10px',
  },
};

export default Dashboard;
