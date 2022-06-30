import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    Button,
    FormControl,
    Offcanvas,
} from 'react-bootstrap'
import './Navbar.scss'

export function NavigationBar() {
    return (
        <Navbar
            key="lg"
            bg="dark"
            variant="dark"
            expand="lg"
            className="navbar"
        >
            <Container fluid>
                <Navbar.Brand href="/home">My Fight Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="nav">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="blog">Blogs</Nav.Link>
                            <Nav.Link href="blog">Shop</Nav.Link>
                            <NavDropdown
                                title="Rankings"
                                id="offcanvasNavbarDropdown-expand-lg"
                            >
                                <p className="sportTitle">MMA</p>
                                <NavDropdown.Item href="#action3">
                                    UFC
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    KSW
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Sherdog
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <p className="sportTitle">BJJ</p>
                                <NavDropdown.Item href="#action5">
                                    IBJJF
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    AJP
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <p className="sportTitle">Boxing</p>
                                <NavDropdown.Item href="#action5">
                                    Boxing
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <p className="sportTitle">Other</p>
                                <NavDropdown.Item href="#action5">
                                    Judo
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Wrestling
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Muay Thai
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
