import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Logo from '../img/logo.svg'
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="">
      <Container >
        <Navbar.Brand href="/"><img className='logo' alt='logo' src={Logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 nav-new"
            style={{ maxHeight: 'auto' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/how-to-get-reap">Get Started</Nav.Link>
            <Nav.Link href="/#membership">Membership</Nav.Link>

            {/* <NavDropdown title="Get started" className='drop_down' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#/">
                Item 0
                </NavDropdown.Item>
              <NavDropdown.Item href="#/">
                Item 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/">
                Item 2
              </NavDropdown.Item>
            </NavDropdown> */}

            {/* <NavDropdown title="Membership" className='drop_down' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#/">
                Item 0
                </NavDropdown.Item>
              <NavDropdown.Item href="#/">
                Item 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/">
                Item 2
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link href="/#faq">FAQ</Nav.Link>
          </Nav>
          <div className="d-flex nav_btn">
           
            <a href='#/' className='dnld_btn' >Download</a>
            <a href='#/' className='wallet_btn'>Connect Wallet</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
