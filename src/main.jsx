import React from 'react';
import ReactDOM from 'react-dom/client';

// ROOT APP COMPONENT
import App from './App';

// SITE SETTINGS CONTEXT
import SettingsProvider from '@/contexts/settingsContext';

// ALL THIRD PARTY LIBRARIES CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'nprogress/nprogress.css';
import 'react-quill/dist/quill.snow.css';
import 'simplebar-react/dist/simplebar.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>);

// // https://github.com/atlassian/react-beautiful-dnd/issues/2407
// root.render(
//   <SettingsProvider>
//     <App />
//   </SettingsProvider>
// );