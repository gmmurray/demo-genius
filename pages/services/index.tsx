import clsx from 'clsx';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import PageHeader from '../../components/shared/pageHeader/PageHeader';
import { PageHeaderType } from '../../components/shared/pageHeader/pageHeaderType';
import { blockCn, elementCn } from '../../lib/helpers/bem';

const contentCn = blockCn('content');
const cardCn = elementCn(contentCn, 'card');
const imageCn = elementCn(cardCn, 'responsive-rounded-start-image');

const Services: NextPage = () => {
    return (
        <Fragment>
            <PageHeader
                type={PageHeaderType.title}
                title="Services"
                modifierClassName="services"
            />
            <Container>
                <Row>
                    <Col>
                        <Card className={clsx(cardCn, 'mt-4')}>
                            <Row>
                                <Col xs={12} md={4}>
                                    <img
                                        src="images/lightning.jpg"
                                        className={clsx('img-fluid', imageCn)}
                                        alt="..."
                                    />
                                </Col>
                                <Col xs={12} md={8}>
                                    <Card.Body>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sunt,
                                            repellendus, cumque nobis harum
                                            velit fugit labore sint omnis
                                            quaerat voluptate tempora! Earum
                                            accusantium at atque aliquam
                                            voluptatibus pariatur temporibus
                                            adipisci.
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Services;
