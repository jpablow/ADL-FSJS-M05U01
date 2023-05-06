import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
      </BrowserRouter>
    </>
  );
}

export default App;
