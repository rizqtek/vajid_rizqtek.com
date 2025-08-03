import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { getInitializationStatus } from './utils/initializeApp';

// Initialize application before rendering
getInitializationStatus().then((result) => {
  if (result.success) {
    console.log('✅ Application ready:', result.message);
  } else {
    console.error('❌ Application initialization failed:', result.message);
  }
}).catch((error) => {
  console.error('❌ Critical initialization error:', error);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
