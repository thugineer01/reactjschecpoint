import { Fragment } from 'react';
import { Navbar, Form, Button, Card, Container } from 'react-bootstrap';

function App() {

  // Render Navbar, Heading, Form, and Cards 
  return (
    <Fragment>
      
      <div className="App">
      
        {/* Render Bootstrap Navbar */}
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand> 
          </Container>
        </Navbar>

        <h1>Welcome</h1>

        {/* Render Bootstrap Form */}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {/* Render 3 Bootstrap Cards */}
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