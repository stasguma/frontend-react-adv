import { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routes from "./routes";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

type Props = {};

const router = createBrowserRouter(routes);

const App = (props: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
};

export default App;
