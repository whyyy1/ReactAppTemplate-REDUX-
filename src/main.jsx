import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { mainData } from './Authorize/MainData.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Provider store={mainData}>
        <App />
      </Provider>
    </Router>


  </React.StrictMode>,
)
