// import "./App.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { sampleProduct } from "./data";

function App() {
  return (
    <div className="d-flex flex-column vh-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Amazon</Navbar.Brand>
            <Nav>
              <a href="cart" className="nav-link">
                Cart
              </a>
              <a href="signin" className="nav-link">
                SignIn
              </a>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {sampleProduct.map((product) => {
              return (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All Rights Reserved</div>
      </footer>
    </div>
  );
}

export default App;
