import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Frame from './components/Frame/Frame';
import Info from './components/Info/Info';
// import Information from './components/Information/Information';



function App() {
  const router = createBrowserRouter([
    {path: '/', element:<Frame></Frame>},
    // {path: '/info', element:<Information></Information>}
    {path: '/info', element:<Info></Info>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
