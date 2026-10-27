import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  // قراءة عدد الكونتاكتات المحفوظة من localStorage
  const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  
  // قراءة عدد المهام (إذا كنتي حافظهم فـ localStorage، وإلا كنعطيوهم 0 كافتراضي)
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  return (
    <div className={styles.dashboardContainer}>
      {/* Banner ترحيبي */}
      <div className={styles.welcomeBanner}>
        <h1>Welcome To My Portfolio</h1>
        <p> لوحة التحكم الرئيسية</p>
      </div>

      {/* بطاقات الإحصائيات والإختصارات (Cards Grid) */}
      <div className={styles.grid}>
        
        {/* Card 1: To-Do List */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>📋 To-Do List</h3>
            <span className={styles.badge}>{tasks.length} Tasks</span>
          </div>
          <p>إدارة وترتيب المهام اليومية لرفع الإنتاجية وتنظيم الوقت.</p>
          <Link to="/Task" className={styles.cardLink}>Open Tasks →</Link>
        </div>

        {/* Card 2: Contacts List */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>📇 Contacts List</h3>
            <span className={styles.badge}>{contacts.length} Contacts</span>
          </div>
          <p>حفظ وإدارة جهات الاتصال مع خاصية البحث الفوري والـ LocalStorage.</p>
          <Link to="/ContactsList" className={styles.cardLink}>Open Contacts →</Link>
        </div>

        {/* Card 3: Weather App */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>🌤️ Weather App</h3>
            <span className={styles.badge}>Live</span>
          </div>
          <p>تتبع حالة الطقس ودرجات الحرارة بمختلف المدن والعواصم.</p>
          <Link to="/Weather" className={styles.cardLink}>Check Weather →</Link>
        </div>

      </div>
    </div>
  );
}