import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';


const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

// You can now render elements into the root
root.render(<App />);