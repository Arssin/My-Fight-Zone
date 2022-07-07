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
        <Navbar key="lg" variant="dark" expand="lg" className="navbar">
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
                            <Nav.Link href="blog">Blog</Nav.Link>
                            <Nav.Link href="blog">Articles Archive</Nav.Link>
                            <NavDropdown
                                title="Rankings"
                                id="offcanvasNavbarDropdown-expand-lg"
                            >
                                <p className="sportTitle">MMA</p>
                                <NavDropdown.Item
                                    target="_blank"
                                    href="https://www.ufc.com/rankings"
                                >
                                    UFC
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    target="_blank"
                                    href="https://www.kswmma.com/rankings"
                                >
                                    KSW
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    target="_blank"
                                    href="https://www.bellator.com/ranking"
                                >
                                    BELLATOR
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <p className="sportTitle">BJJ</p>
                                <NavDropdown.Item
                                    target="_blank"
                                    href="https://ibjjf.com/2022-athletes-ranking"
                                >
                                    IBJJF
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    target="_blank"
                                    href="https://ajptour.com/en/federation/1/ranking/season/5"
                                >
                                    AJP
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <p className="sportTitle">Boxing</p>
                                <NavDropdown.Item
                                    target="_blank"
                                    href="https://box.live/boxing-rankings/"
                                >
                                    Boxing
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <p className="sportTitle">Other</p>
                                <NavDropdown.Item
                                    target="_blank"
                                    href="https://www.ijf.org/wrl"
                                >
                                    Judo World Ranking
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    target="_blank"
                                    href="https://wrestlingtv.in/ranking/"
                                >
                                    Wrestling
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
