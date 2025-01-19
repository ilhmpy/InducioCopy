import { useRoutes } from "react-router-dom";
import { Anmeldung, Home, Karriere, Kontakt } from "./pages";
import React from "react";
import { Navigation } from "./components";

const App = () => {
  const routing = useRoutes([
    { 
      path: "/", 
      element: 
        <>
          <Navigation>
            <Home />
          </Navigation>
        </> 
      },

      { 
        path: "/contactus", 
        element: 
          <>
            <Navigation>
              <Kontakt />
            </Navigation>
          </> 
      },

      { 
        path: "/karriere", 
        element: 
          <>
            <Navigation>
              <Karriere />
            </Navigation>
          </> 
      },

      { 
        path: "/web/login", 
        element: 
          <>
            <Navigation>
              <Anmeldung />
            </Navigation>
          </> 
      },
  ]);

  return routing;
}

export default App;