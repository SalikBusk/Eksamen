import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './Components/Route/Layout';
import Index from './Pages/Index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
      </Route>
    </Routes>
  );
}

export default App;
