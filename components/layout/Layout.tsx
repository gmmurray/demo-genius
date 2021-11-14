import { FC, Fragment } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Page from './Page';

type LayoutProps = {};

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Page>
            <Navbar />
            {children}
            <Footer />
        </Page>
    );
};

export default Layout;
