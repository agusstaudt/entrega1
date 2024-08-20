// import React from "react"; 
// import ReactDOM from 'react-dom/client';


// const el = document.getElementById('root');

// const root = ReactDOM.createRoot(el);

// function App() {
//     return <h1>Electrodomésticos Premier</h1> 
// }

// root.render(<App/>);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)