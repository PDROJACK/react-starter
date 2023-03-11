import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { ProtectedRoute } from "./navigation/ProtectedRoute";
import UserLoginSignUp from "./components/UserLoginSignUp";
import Verification from "./screens/Verification";
import HomePage from "./screens/Homepage";
import AuthPage from "./screens/AuthPage";

const rootAdminRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute children={<HomePage />} />,
  },
  {
    path: "/login",
    element: <UserLoginSignUp type={"login"} />,
  },
  {
    path: "/signup",
    element: <UserLoginSignUp type={"signup"} />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/oauth",
    element: <ProtectedRoute children={<AuthPage />} />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={rootAdminRouter} />
    </Provider>
  );
}

export default App;
