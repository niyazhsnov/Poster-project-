import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.gif';
import Footer from "./Footer";
import "./Layout.css";
function Layout(props) {
  return (
    <div>
        <Navbar expand="lg" variant="dark" bg="black">
          <Container>
            <Navbar.Brand className="logo"><img src={logo} alt="Logo" /></Navbar.Brand>
            
          </Container>
        </Navbar>
        <Container className="mt-2">{props.children}</Container>

        
        <Footer/>
    </div>
  );
}

export default Layout;