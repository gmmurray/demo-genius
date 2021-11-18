import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { blockCn, elementCn } from '../../lib/helpers/bem';

import { Fragment } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import PageHeader from '../../components/shared/pageHeader/PageHeader';
import { PageHeaderType } from '../../components/shared/pageHeader/pageHeaderType';
import clsx from 'clsx';

const contentCn = blockCn('content');
const cardCn = elementCn(contentCn, 'card');
const imageCn = elementCn(cardCn, 'responsive-rounded-start-image');
type ServiceCard = {
    title: string;
    subtitle: string;
    image: string;
    points: string[];
};
const serviceCards: ServiceCard[] = [
    {
        title: 'Development',
        subtitle:
            'The first step is to build a website that support your needs as a small business',
        image: '/images/development.jpg',
        points: [
            'Single page web fronts',
            'Portfolio-style websites for creatives',
            'Multi-page websites like this one',
            'More complicated web applications that assist business processes',
            'Websites created using third party sites such as Wordpress, Squarespace, etc.',
        ],
    },
    {
        title: 'Support',
        subtitle:
            'After development is complete, I can assist with keeping the website up to date',
        image: '/images/support.jpg',
        points: [
            'Adding new content',
            'Updating existing content as necessary',
            'Resolving any issues that may come up. Unlikely, but still good to be prepared',
        ],
    },
];

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
                    {serviceCards.map(
                        ({ title, subtitle, image, points }, index) => (
                            <Col key={`card-${index}`} xs={12}>
                                <Card
                                    className={clsx(
                                        cardCn,
                                        index === 1 ? 'my-4' : 'mt-4',
                                    )}
                                >
                                    <Row>
                                        <Col xs={12} lg={5}>
                                            <Image
                                                height="800"
                                                width="1200"
                                                layout="responsive"
                                                src={image}
                                                alt={`${title} image`}
                                                className={clsx(
                                                    'img-fluid',
                                                    imageCn,
                                                )}
                                            />
                                        </Col>
                                        <Col xs={12} lg={7}>
                                            <Card.Body>
                                                <Card.Text>
                                                    <h2 className="display-5">
                                                        {title}
                                                    </h2>
                                                    <h5>{subtitle}</h5>
                                                    <ListGroup variant="flush">
                                                        {points.map(
                                                            (point, index) => (
                                                                <ListGroup.Item
                                                                    key={index}
                                                                >
                                                                    {point}
                                                                </ListGroup.Item>
                                                            ),
                                                        )}
                                                    </ListGroup>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ),
                    )}
                    {/* <Col>
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
                    </Col> */}
                </Row>
            </Container>
        </Fragment>
    );
};

export default Services;
