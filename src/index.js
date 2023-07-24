import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import Searchbar from 'components/Searchbar/Searchbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <Searchbar/>
  </React.StrictMode>
);
