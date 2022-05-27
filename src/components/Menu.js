import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../images/logo.png';
const Menu = () => (
    <Navbar className='navbar-section' bg='object-bg' fixed="top">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Soundwave logo"
                />{''} Soundwave
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#discover">Discover</Nav.Link>
                <Nav.Link href="#join">Join</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default Menu;