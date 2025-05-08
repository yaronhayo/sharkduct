
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root");

if (root) {
  try {
    createRoot(root).render(<App />);
  } catch (error) {
    console.error("Failed to render app:", error);
    root.innerHTML = '<div style="color: red; padding: 20px;">An error occurred while loading the application. Please check the console for details.</div>';
  }
} else {
  console.error("Root element not found");
}
