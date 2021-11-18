import clsx from 'clsx';
import { FC, Fragment, useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';
import { blockCn, elementCn, modifierCn } from '../../../lib/helpers/bem';
import { PageHeaderType } from './pageHeaderType';

const contentCn = blockCn('content');
const headerContainerCn = elementCn(contentCn, 'header-container');
const getClassNames = (
    type: PageHeaderType,
    modifierClassName: string,
): string[] => {
    const element = type === PageHeaderType.jumbotron ? 'jumbotron' : 'title';
    const eCn = elementCn(headerContainerCn, element);
    return [eCn, modifierCn(eCn, modifierClassName)];
};

type PageHeaderProps = {
    type: PageHeaderType;
    title?: string;
    subtitle?: string;
    onClick?: () => any;
    buttonText?: string;
    modifierClassName: string;
};

const PageHeader: FC<PageHeaderProps> = ({
    type,
    onClick,
    buttonText,
    title,
    subtitle,
    modifierClassName,
}) => {
    const className = clsx(
        headerContainerCn,
        ...getClassNames(type, modifierClassName),
    );

    const renderContent = useCallback(() => {
        if (type === PageHeaderType.jumbotron) {
            return (
                <Fragment>
                    {!!title && (
                        <h1 className="text-white display-3">{title}</h1>
                    )}
                    {!!subtitle && <h3 className="text-white">{subtitle}</h3>}
                    {!!onClick && !!buttonText && (
                        <Button variant="theme-secondary" onClick={onClick}>
                            {buttonText}
                        </Button>
                    )}
                </Fragment>
            );
        } else {
            return (
                <h1 className="text-white display-3 text-center">{title}</h1>
            );
        }
    }, [buttonText, onClick, subtitle, title, type]);

    return (
        <div className={className}>
            <Container className="mt-3 mt-md-5">{renderContent()}</Container>
        </div>
    );
};

export default PageHeader;
