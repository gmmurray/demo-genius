import clsx from 'clsx';
import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Button, Container, Card, Row, Col, Form } from 'react-bootstrap';
import { blockCn, elementCn, modifierCn } from '../lib/helpers/bem';

const contentCn = blockCn('content');
const headerContainerCn = elementCn(contentCn, 'header-container');
const imageCn = modifierCn(headerContainerCn, 'home');
const cardCn = elementCn(contentCn, 'card');
const imageCardCn = modifierCn(cardCn, 'home-image-card');

const Home: NextPage = () => {
    return (
        <Fragment>
            <div className={clsx(headerContainerCn, imageCn)}>
                <Container className="mt-5">
                    <h1 className="text-white display-3">
                        This demo website uses modern web-technologies to
                        display information and gain interest
                    </h1>
                    <h3 className="text-white">
                        Interested in something similar for your small-business?
                    </h3>
                    <Button variant="theme-primary">Get started now</Button>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Card className={clsx(cardCn, 'mt-4')}>
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="display-5">
                                        Small businesses have enough to worry
                                        about
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    <h5>
                                        Having a solid website is important but
                                        creating one takes time. Let me help. I
                                        can:
                                    </h5>
                                    <ul>
                                        <li>
                                            Build a website, like this one,
                                            customized with your specific
                                            content and branding
                                        </li>
                                        <li>
                                            Make something from the ground up to
                                            meet your business needs
                                        </li>
                                        <li>
                                            Maintain the website once it is
                                            live, implementing changes and
                                            content updates
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Card className={clsx(cardCn, imageCardCn, 'mt-4')}>
                            <Card.Img
                                variant="top"
                                src="images/lightning.jpg"
                            />
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="display-5">Fast</h2>
                                </Card.Title>
                                <Card.Text>
                                    <h5>
                                        My websites are built using modern
                                        web-technologies. This means fast load
                                        times and quick reactivity on each page.
                                    </h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className={clsx(cardCn, imageCardCn, 'mt-4')}>
                            <Card.Img variant="top" src="images/mobile.jpg" />
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="display-5">
                                        Mobile friendly
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    <h5>
                                        I build everything with responsive
                                        design in mind, ensuring a comfortable
                                        experience on mobile devices.
                                    </h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card className={clsx(cardCn, 'my-4')}>
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="display-5">
                                        Get started now
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Name*</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Email*</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Message*</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button
                                                variant="theme-secondary"
                                                className="mt-3"
                                            >
                                                Submit
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Home;
