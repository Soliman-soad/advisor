import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './route';


function App() {
  return (
    <div className="mx-auto max-w-7xl overflow-hidden relative">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
