import { StrictMode } from 'react';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';

// workaround for fixing the production bug with the dnd package
if (typeof window === 'undefined') {
  // @ts-expect-erro
  React.useLayoutEffect = React.useEffect;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
