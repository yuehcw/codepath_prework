import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <div className='bg-gray-900'>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/view/:id" element={<ViewCreator />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

