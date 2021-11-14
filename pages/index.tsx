import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ButtonGroup, Button, Alert } from 'react-bootstrap';

const Home: NextPage = () => {
    return (
        <div style={{ margin: '1rem', minHeight: '100vh' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            debitis! Neque dolore excepturi itaque omnis nobis optio quos
            nesciunt labore, ipsum aperiam, ex placeat commodi vitae quidem
            recusandae, et dolorem.
            <p style={{ margin: '1rem' }}>
                <Button variant="theme-primary">click here</Button>
            </p>
            <p style={{ margin: '1rem' }}>
                <Button variant="theme-secondary">click here</Button>
            </p>
            <p style={{ margin: '1rem' }}>
                <Button variant="theme-success">click here</Button>
            </p>
            <p style={{ margin: '1rem' }}>
                <Button variant="theme-error">click here</Button>
            </p>
            <p style={{ margin: '1rem' }}>
                <Button variant="theme-warning">click here</Button>
            </p>
            <Alert>primary alert</Alert>
            <Alert variant="secondary">secondary alert</Alert>
            <Alert variant="success">success alert</Alert>
            <Alert variant="danger">danger alert</Alert>
            <Alert variant="warning">warning alert</Alert>
            <Alert variant="dark">
                dark alert <Button variant="dark">hi</Button>
            </Alert>
        </div>
    );
};

export default Home;
