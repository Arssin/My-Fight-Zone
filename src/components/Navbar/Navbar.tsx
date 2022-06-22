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
        <>
            {['lg'].map((expand: string) => (
                <Navbar
                    key={expand}
                    bg="dark"
                    variant="dark"
                    expand={expand}
                    className="navbar"
                >
                    <Container fluid>
                        <Navbar.Brand href="/home">My Fight Zone</Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="nav">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="blog">Blog</Nav.Link>
                                    <Nav.Link href="blog">Shop</Nav.Link>
                                    <NavDropdown
                                        title="Sport"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">
                                            Brazilian Jiu-Jitsu
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action4">
                                            MMA
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Wrestling
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Judo
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
                                    <Button variant="outline-success">
                                        Search
                                    </Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
