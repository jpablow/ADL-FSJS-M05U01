import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <>
      <Nav className="bg-danger d-flex p-3 align-items-center">
        <Nav.Item className="">
          <Link to="/" className="text-white fs-6 ms-4 text-decoration-none">
            <span>icon</span> Home
          </Link>
        </Nav.Item>

        <Nav.Item className="">
          <Link
            to="/contacto"
            className="text-white fs-6 ms-4 text-decoration-none"
          >
            <span>icon</span> Contacto
          </Link>
        </Nav.Item>

        <Nav.Item className="ms-auto">
          <Link to="/" className="text-white fs-5 me-5 text-decoration-none">
            Happy Cake <span>icon</span>
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavbarComp;
