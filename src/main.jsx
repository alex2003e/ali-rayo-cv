import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// El HTML llega pre-renderizado desde el build: React solo lo hidrata.
const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
