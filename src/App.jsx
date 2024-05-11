import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Contact, Home, Landing, Services } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
