import { Fragment } from 'react';
import { Navbar, Card, Container } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          </Container>
        </Navbar>

        <h1>Welcome</h1>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default App;