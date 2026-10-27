// import {useState} from 'react'
// import styles from './ContactList.module.css';

// function ContactsList() {
//     const [contacts, setContacts] = useState([])

//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
    
//     const addContact = (e) => {

//         e.preventDefault(); 
//         if(!name.trim()||!phone.trim()) return ;
//         const newContact={
//             id:Date.now(),
//             name:name,
//             phone:phone
//         }
        
//         setContacts([...contacts, newContact])

//         setName('');
//         setPhone('');
//     }

//     const handelDelete=(item)=>{
//        setContacts( contacts.filter(i => i.id !== item))
//     }
    
//     console.log(contacts)
//   return (
//     <div className={styles.container}>
//         <h1>Contacts List</h1>
//         <form onSubmit={addContact} className={styles.formContainer}>
//             <input  type="text" placeholder="Name"  required
//                 onChange={(e)=>{setName(e.target.value)}} value={name}
//             />
//             <br />
//             <input type="tel" placeholder="Phone"
//                 onChange={(e)=>{setPhone(e.target.value)}} value={phone}
//             />
//             <br />
//             <button type="submit">Add New Contact</button>
//         </form>

//         <ul className={styles.display}>
//             { contacts.map((contact, index)=>(
//               <li key={contact.id} className={styles.contactItem }>
//                    <div className={styles.contactInfo}> 

//                        <span>  id:   #{contact.id}</span>
//                        <span>  Name:   {contact.name}</span>
//                        <span>  Phone:   {contact.phone}</span>
//                    </div>
//                    <button onClick={()=>handelDelete(contact.id)} className={styles.deleteBtn}>Delete</button>
//               </li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default ContactsList
import { useState, useEffect } from 'react';
import styles from './ContactList.module.css';

function ContactsList() {
    // 1. كانقراو البيانات القديمة من localStorage أول ما تفتح الصفحة
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : [];
    });

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [search, setSearch] = useState('');
    
    // 2. كانحفظو البيانات فـ localStorage كلما تدار شي تغيير فـ contacts (إضافة أو حذف)
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (e) => {
        e.preventDefault(); 
        if (!name.trim() || !phone.trim()) return;
        
        const newContact = {
            id: Date.now(),
            name: name,
            phone: phone
        };
        
        setContacts([...contacts, newContact]);
        setName('');
        setPhone('');
    };

    const handleDelete = (id) => {
       setContacts(contacts.filter(contact => contact.id !== id));
    };

    // فلترة الكونتاكتات بالبحث
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.phone.includes(search)
    );

    
  
    
  return (
    <div className={styles.container}>

        <h1>Contacts List</h1>

        {/* خانة البحث */}
        <div style={{ marginBottom: '15px' }}>
            <input 
                type="text" 
                placeholder="Search by name or phone..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', padding: '8px' }}
            />
        </div>

        <form onSubmit={addContact} className={styles.formContainer}>
            <input type="text" placeholder="Name" required
                onChange={(e) => setName(e.target.value)} value={name}
            />
            <br />
            <input type="tel" placeholder="Phone" required
                onChange={(e) => setPhone(e.target.value)} value={phone}
            />
            <br />
            <button type="submit">Add New Contact</button>
        </form>

        <ul className={styles.display}>
            {filteredContacts.map((contact) => (
              <li key={contact.id} className={styles.contactItem}>
                 <div className={styles.contactInfo}> 
                     <span> id: #{contact.id}</span>
                     <span> Name: {contact.name}</span>
                     <span> Phone: {contact.phone}</span>
                 </div>
                 <button onClick={() => handleDelete(contact.id)} className={styles.deleteBtn}>Delete</button>
              </li>
            ))}
        </ul>
    </div>
  );
}

export default ContactsList;