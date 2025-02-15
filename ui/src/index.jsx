import { createRoot }
  from 'react-dom/client';

import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/700.css";
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
