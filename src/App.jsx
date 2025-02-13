import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import SelectionPage from './pages/SelectionPage';
import DetailsPage from './pages/DetailsPage';
import TicketPage from './pages/TicketPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SelectionPage />} />
        <Route index element={<SelectionPage />} />
        <Route path="/form" element={<DetailsPage />} />
        <Route path="/ticket" element={<TicketPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
