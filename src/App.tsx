import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import handleFormAction from "./utils/handleFormAction";
import FourZeroFourPage from "./pages/404";

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, errorElement: <FourZeroFourPage />, children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'faq', element: <FAQ /> },
    { path: 'contact', element: <Contact />, action: handleFormAction }
  ]}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;