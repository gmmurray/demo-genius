import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <title>Demo Genius</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <meta name="theme-color" content="#ebaa02" />
                <link
                    rel="shortcut icon"
                    href="/icon-200x200.png"
                    type="image/png"
                />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
