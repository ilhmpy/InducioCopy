import { useRoutes } from "react-router-dom";
import { Home } from "./pages";
import React from "react";
import { Navigation } from "./components";

/*
  Доделать слайдер
  Сделать опускание меню как в оригинале при спуске вниз по странице
*/

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
      }
  ]);

  return routing;
}

export default App;