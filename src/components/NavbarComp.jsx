import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <>
      <Navbar bg="danger">
        <Nav className="d-flex">
          <Nav.Item>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              <span>icon</span> Home
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link
              to="/contacto"
              className="text-white ms-3 text-decoration-none"
            >
              <span>icon</span> Contacto
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              Happy Cake <span>icon</span>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarComp;
