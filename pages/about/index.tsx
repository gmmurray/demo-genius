import clsx from 'clsx';
import { Fragment, useCallback, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Iframe from 'react-iframe';
import PageHeader from '../../components/shared/pageHeader/PageHeader';
import { PageHeaderType } from '../../components/shared/pageHeader/pageHeaderType';
import { personalWebsiteUrl } from '../../lib/constants/staticContent';
import { blockCn, elementCn } from '../../lib/helpers/bem';

const contentCn = blockCn('content');
const cardCn = elementCn(contentCn, 'card');
const iframeCn = elementCn(contentCn, 'about-iframe');
const spinnerCn = elementCn(contentCn, 'large-spinner');

const About = () => {
    const [iframeIsLoading, setIframeIsLoading] = useState(true);
    const onIframeLoaded = useCallback(() => setIframeIsLoading(false), []);
    return (
        <Fragment>
            <PageHeader
                type={PageHeaderType.title}
                title="About"
                modifierClassName="about"
            />
            <Container>
                <Row>
                    <Col xs={12}>
                        <Card className={clsx(cardCn, 'mt-4')}>
                            <Card.Body>
                                <Card.Text>
                                    <h2 className="display-5">
                                        I am a professional software engineer
                                        with experience working on sophisticated
                                        web platforms.
                                    </h2>
                                    <h5>
                                        Check out my{' '}
                                        <a
                                            href={personalWebsiteUrl}
                                            className="text-secondary"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            personal website
                                        </a>{' '}
                                        below to learn more.
                                    </h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-center my-4">
                        {iframeIsLoading && (
                            <Spinner
                                variant="primary"
                                animation="border"
                                className={spinnerCn}
                            />
                        )}
                        <Iframe
                            url={personalWebsiteUrl}
                            className={clsx(iframeCn, 'rounded')}
                            onLoad={onIframeLoaded}
                        />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default About;
