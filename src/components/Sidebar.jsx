import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'To Do List', path: '/Task' },
    { name: 'Contacts List', path: '/ContactsList' },
    { name: 'Weather', path: '/weather' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>My Dashboard</h2>
      </div>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.navLink} ${
              location.pathname === link.path ? styles.active : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}