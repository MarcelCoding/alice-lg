
import { createRoot }
  from 'react-dom/client';

import reportWebVitals
  from './reportWebVitals';

import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';

import Main
  from './app/Main';

import Api
  from './api'

// Alice theme and extension API
window.Alice = Api;

const root = createRoot(document.getElementById('app'));

root.render(<Main />);

reportWebVitals();
