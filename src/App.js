import './App.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router';
import Body from './components/Body';
import Browse from './components/Browse';

export function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}
