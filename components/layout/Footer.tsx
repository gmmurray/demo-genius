import { Col, Container, Navbar, Row, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark layout-page-footer text-white pt-4">
            <Container>
                <Row className="">
                    <Col xs={12} className="text-center">
                        <Button variant="dark">BACK TO TOP</Button>
                    </Col>
                </Row>
                <Row className="pt-3">
                    <Col xs={6} className="text-center">
                        <h6>Menu</h6>
                        <hr className="text-secondary w-50 m-auto" />
                    </Col>
                    <Col xs={6} className="text-center">
                        <h6>Contact us</h6>
                        <hr className="text-secondary w-50 m-auto" />
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col xs={12} className="text-center">
                        &copy; Copyright Greg Murray {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
