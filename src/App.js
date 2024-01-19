import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import {RouterProvider} from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
      <Route index element={<HomePage />} />
      <Route path=':type' element={<HomePage />} />
      <Route path=':type/:id' element={<PetDetailsPage />}/>
      <Route path='/search' element={<SearchPage />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />
    
    
  );
}

export default App;
