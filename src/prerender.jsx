import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Se ejecuta solo en el build para generar el HTML inicial.
export function render() {
  return renderToString(<App />);
}
