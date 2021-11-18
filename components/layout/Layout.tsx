import { FC } from 'react';
import DemoDisclaimer from './DemoDisclaimer';
import Footer from './Footer';
import Navbar from './Navbar';
import Page from './Page';

type LayoutProps = {};

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Page>
            <Navbar />
            <DemoDisclaimer />
            {children}
            <Footer />
        </Page>
    );
};

export default Layout;
