import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faEllipsisH, faAngleLeft, faChevronRight, faEnvelopeOpenText, faGreaterThan, faLessThan, faAngleRight, faSlash, faArrowLeft, faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter, HashRouter } from 'react-router-dom';
library.add(fab, faEllipsisH, faChevronRight, faEnvelopeOpenText , faGreaterThan, faLessThan, faAngleLeft, faSlash, faAngleRight, faArrowLeft, faArrowRight)

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
