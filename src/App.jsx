// // import Form from './components/Form'
// // import Status from './components/Status'
// import {BrowserRouter, Route, Routes,Link,NavLink,useNavigate} from 'react-router'
// import Task from './components/features/toDoList/task'
// import Sidebar from './components/Sidebar'
// import {Header,ContactsList,WeatherApp} from  './components'


// function App() {

//   return (
//     <>
    
//     <BrowserRouter>
    
//      <ul>
//       <li><Link to="/">Header</Link></li>
//       <li><Link to="/Task">To Do List</Link></li>
//       <li><NavLink to="/ContactsList">Contacts List</NavLink></li>
//       <li><NavLink to="/Weather">Weather</NavLink></li>
    
//     </ul>         

                   
//     <Routes>
//       <Route path="/" element={<Header/>}/>
//       <Route path="/Task" element={<Task/>}/>
//       <Route path="/ContactsList" element={<ContactsList/>}/>
//       <Route path="/Weather" element={<WeatherApp/>}/>
 
//       <Sidebar/>

//     </Routes>

   
   
//     </BrowserRouter>
      

      
//     </>

//   )
// }

// export default App


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Task from './components/features/toDoList/task';
import {  ContactsList, WeatherApp,Dashboard } from './components';

// import './App.css'; // تأكد بلي زايد الـ CSS لتحت باش يبان الجنب مقاد

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        
        {/* الـ Sidebar محطوط هنا الفوق في الحاويات العامة، ماشي داخل Routes */}
        <Sidebar />
        
        {/* المحتوى الرئيسي لي كيتغير حسب الروابط */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Task" element={<Task />} />
            <Route path="/ContactsList" element={<ContactsList />} />
            <Route path="/Weather" element={<WeatherApp />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;