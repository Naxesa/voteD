import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Results from "./pages/Results";
import Elections from "./pages/Elections";
import Candidate from "./pages/Candidate";
import Logout from "./pages/Logout";
import Congrats from "./pages/Congrats";
import ElectionDetails from "./pages/ElectionDetails";


const router = createBrowserRouter([
  {
    path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    },
    {
      path: "results",
      element: <Results />
    },
    {
      path: "elections",
      element: <Elections />
    },
    {
      path: "elections/:id/candidates",
      element: <Candidate />
    },
    {
      path: "elections/:id",
      element: <ElectionDetails/>
    },
    {
      path: "congrats",
      element: <Congrats />
    },
    {
      path: "logout",
      element: <Logout />
    },
  ]
  }
])






function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
