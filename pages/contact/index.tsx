import { NextPage } from 'next';
import { Fragment } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import PageHeader from '../../components/shared/pageHeader/PageHeader';
import { PageHeaderType } from '../../components/shared/pageHeader/pageHeaderType';
import { blockCn, elementCn } from '../../lib/helpers/bem';

const contentCn = blockCn('content');
const cardCn = elementCn(contentCn, 'card');

const Contact: NextPage = () => {
    return (
        <Fragment>
            <PageHeader
                type={PageHeaderType.title}
                title="Contact"
                modifierClassName="contact"
            />
            <Container>
                <Row>
                    <Col xs={12} className="my-4">
                        <Card className={cardCn}>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col xs={12} md={7}>
                                            <h2 className="display-5 my-auto">
                                                Let{"'"}s get started on making
                                                your small business website
                                                dreams a reality
                                            </h2>
                                        </Col>
                                        <Col
                                            xs={12}
                                            md={5}
                                            className="mt-4 mt-md-0"
                                        >
                                            <h5>Send me a message</h5>
                                            <Form>
                                                <Form.Group className="mt-3">
                                                    <Form.Label>
                                                        Name*
                                                    </Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mt-3">
                                                    <Form.Label>
                                                        Email*
                                                    </Form.Label>
                                                    <Form.Control type="email" />
                                                </Form.Group>
                                                <Form.Group className="mt-3">
                                                    <Form.Label>
                                                        Message*
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={5}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="text-center">
                                                    <Button
                                                        variant="theme-secondary"
                                                        className="mt-3"
                                                    >
                                                        Submit
                                                    </Button>
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Contact;
