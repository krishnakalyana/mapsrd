import { ThemeProvider } from "@/customComponents/theme-provider"

import './App.css';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "navigation/routes";
import PrivateRoute from "navigation/PrivateRoute";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="storage-key">
      <Routes>
        <Route element={<PrivateRoute />} path="/">
          {/* private routes */}
          {privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
        </Route>
        {/* public routes */}
        {publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
      </Routes>

    </ThemeProvider>
  );
}

export default App;
