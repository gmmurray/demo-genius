import { useCallback } from 'react';
import { Col, Container, Navbar, Row, Button } from 'react-bootstrap';
import Link from 'next/link';
import { scrollToTop } from '../../lib/helpers/scrollTop';
import { routeArray } from '../../lib/routes/routes';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { elementCn, modifierCn } from '../../lib/helpers/bem';
import { personalWebsiteUrl } from '../../lib/constants/staticContent';

const footerCn = elementCn('layout-page', 'footer');
const footerButtonCn = elementCn(footerCn, 'button');
const activeFooterButtonCn = modifierCn(footerButtonCn, 'active');

const Footer = () => {
    const { pathname } = useRouter();
    const handleTopClick = useCallback(() => scrollToTop(), []);

    return (
        <footer className={clsx('bg-dark', 'text-white', 'pt-4', footerCn)}>
            <Container>
                <Row className="">
                    <Col xs={12} className="text-center">
                        <Button onClick={handleTopClick} variant="dark">
                            BACK TO TOP
                        </Button>
                    </Col>
                </Row>
                <Row className="pt-3">
                    <Col xs={6} className="text-center">
                        <h6>Menu</h6>
                        <hr className="text-secondary w-50 m-auto" />
                        <Container className="mt-2">
                            <Row>
                                {routeArray.map(route => (
                                    <Col
                                        key={route.path}
                                        xs={12}
                                        md={12 / routeArray.length}
                                        className="mb-2"
                                    >
                                        <Link href={route.path} passHref>
                                            <Button
                                                variant="theme-dark"
                                                className={clsx(
                                                    footerButtonCn,
                                                    pathname === route.path &&
                                                        activeFooterButtonCn,
                                                )}
                                            >
                                                {route.name}
                                            </Button>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={6} className="text-center">
                        <h6>Contact us</h6>
                        <hr className="text-secondary w-50 m-auto" />
                        <Container className="mt-2">
                            <Row>
                                <Col xs={12} md={6}>
                                    <a
                                        href="mailto:contact@email.com"
                                        className="text-white"
                                    >
                                        contact@email.com
                                    </a>
                                </Col>
                                <Col xs={12} md={6}>
                                    <a
                                        href="tel:123-456-7890"
                                        className="text-white"
                                    >
                                        123-456-7890
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col xs={12} className="text-center">
                        &copy; Copyright{' '}
                        <a
                            className="text-secondary"
                            href={personalWebsiteUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Greg Murray
                        </a>{' '}
                        {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
