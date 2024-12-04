import { BrowserRouter } from 'react-router-dom'; // Manages the routing
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Redux Provider
import { store } from './store.tsx'; // Redux store
import App from './App.tsx'; // Imports content from App.tsx
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap the app with the Redux Provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);