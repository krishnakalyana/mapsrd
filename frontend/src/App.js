import { ThemeProvider } from "@/customComponents/theme-provider"

import './App.css';
import Login from "@/pages/login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="storage-key">
      
      <Login />

    </ThemeProvider>
  );
}

export default App;
