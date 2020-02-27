import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css';
import App from './component/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';

ReactDOM.render(
  <Router>
    <div>
      <App />
    </div>
  </Router>,
  document.getElementById("root")
);