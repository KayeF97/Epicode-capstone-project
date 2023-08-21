import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Homepage from './Pages/ExerciseSearch';
import Layout from './Pages/Layout';
import Start from './Pages/Startpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Start />} />
        <Route path="Homepage" element={<Homepage />} />
      </Route>
     </Routes>
    
    </BrowserRouter>


  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
