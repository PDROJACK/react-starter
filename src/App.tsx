import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import Homepage from "./screens/Homepage";
import { ProtectedRoute } from "./navigation/ProtectedRoute";
import UserLoginSignUp from "./components/UserLoginSignUp";
import Verification from "./screens/Verification";
import Homepage2 from "./screens/Homepage2";
import AuthPage from "./screens/AuthPage";

const rootAdminRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute children={<Homepage2 />} />,
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
    element: <Verification />
  },
  {
    path: "/oauth",
    element: <ProtectedRoute children={<AuthPage/>} />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={rootAdminRouter} />
    </Provider>
  );
}

export default App;
