import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <title>Demo Genius</title>
                <link
                    rel="icon"
                    href="/icon-200x200.png"
                    type="image/png"
                ></link>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
