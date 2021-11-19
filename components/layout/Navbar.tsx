import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { routeArray } from '../../lib/routes/routes';
import { List } from 'react-bootstrap-icons';

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <BootstrapNavbar bg="primary" expand="lg" className="py-4">
            <Container>
                <Link href="/" passHref>
                    <BootstrapNavbar.Brand className="text-white">
                        <img src="/logo_with_name_square.png" />
                    </BootstrapNavbar.Brand>
                </Link>
                <BootstrapNavbar.Toggle
                    aria-controls="page-navbar"
                    className="layout-page__navbar-toggle"
                >
                    <List color="white" />
                </BootstrapNavbar.Toggle>
                <BootstrapNavbar.Collapse
                    id="page-navbar"
                    className="layout-page__navbar"
                >
                    <Nav className="me-auto">
                        {routeArray.map(route => (
                            <Link key={route.path} href={route.path} passHref>
                                <Nav.Link
                                    className="text-white"
                                    active={pathname === route.path}
                                >
                                    {route.name}
                                </Nav.Link>
                            </Link>
                        ))}
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
