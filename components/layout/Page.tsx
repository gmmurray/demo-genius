import { FC, Fragment } from 'react';

type PageProps = {};

const Page: FC<PageProps> = ({ children }) => {
    return <div className="layout-page">{children}</div>;
};

export default Page;
