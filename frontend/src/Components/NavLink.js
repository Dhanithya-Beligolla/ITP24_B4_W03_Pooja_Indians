import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import '../Styles/btnStyles.css'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
import { useNavigate } from 'react-router-dom';
function NavLink() {

  const navigate = useNavigate()
  return (
    <Navbar style={{ backgroundColor: '#00d8ff' }} expand="lg">
      <Container fluid style={{ marginLeft: '3%', marginRight: '3%' }}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="70px"
            height="70px"
            // style={{ border: '2px solid white', borderRadius: '90px' }}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> 
          {/* Border logo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '10%' }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', justifyContent: 'space-between', }}
            navbarScroll
          >
            <Nav.Link className='btnLink' href="/" >Home</Nav.Link>
            {/* <Nav.Link className='btnLink' href="/Booking" >Booking</Nav.Link> */}
            <Nav.Link className='btnLink' href="/ContactUs" >ContactUs</Nav.Link>
            <Nav.Link className='btnLink' href="/Profile" >Profile</Nav.Link>
            {localStorage.getItem("userRole") === "admin" && <Nav.Link className='btnLink' href="/AdminDashboard" >Admin Dashboard</Nav.Link>}
          </Nav>
          <Form className="d-flex">
            {
              localStorage.getItem("token") ?
                <Button variant="outline-success"
                  onClick={(e) => {
                    localStorage.clear()
                    navigate("/Register")
                  }}
                >Logout</Button>
                : <Button href="/Login" variant="outline-success">Login</Button>
            }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavLink;