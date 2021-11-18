import { Container } from 'react-bootstrap';

const DemoDisclaimer = () => {
    return (
        <Container fluid className="bg-warning vw-100">
            <Container>
                <em>Disclaimer:</em> This website is a <strong>demo</strong> of
                what a simple website that I build can look like. Some of the
                content may include placeholder data.
            </Container>
        </Container>
    );
};

export default DemoDisclaimer;
