import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>ANBDEV</h2>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/Task" className={({ isActive }) => isActive ? styles.active : ''}>
            To Do List
          </NavLink>
        </li>
        <li>
          <NavLink to="/ContactsList" className={({ isActive }) => isActive ? styles.active : ''}>
            Contacts List
          </NavLink>
        </li>
        <li>
          <NavLink to="/Weather" className={({ isActive }) => isActive ? styles.active : ''}>
            Weather
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}