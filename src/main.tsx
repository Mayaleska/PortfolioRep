import { BrowserRouter } from 'react-router-dom'; // Manages the routing
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Redux Provider
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate for redux-persist
import { store, persistor } from './store.tsx'; // Redux store and persistor
import App from './App.tsx'; // Imports content from App.tsx
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap the app with the Redux Provider */}
      <PersistGate loading={null} persistor={persistor}> {/* Wrap with PersistGate */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);