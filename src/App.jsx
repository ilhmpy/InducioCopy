import { useRoutes } from "react-router-dom";
import { Home } from "./pages";
import React from "react";
import { Navigation } from "./components";

const App = () => {
  const routing = useRoutes([
    { path: "/", element: <>
      <Navigation>
        <Home />
      </Navigation>
    </> }
  ]);

  return routing;
}

export default App;