import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Contacto() {
  return (
    <>
      <h1 className="mt-5 text-center fw-light">
        Cuéntanos, ¿en qué te podemos ayudar?
      </h1>

      <Form>
        <Container className="px-5 mb-3 text-center">
          <Form.Group className="my-3" controlId="correo">
            <Form.Label className="fw-light">Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="my-3" controlId="formBasicPassword">
            <Form.Label className="fw-light">Descripción:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Container>
      </Form>
    </>
  );
}

export default Contacto;
