import React, { ReactElement } from 'react';
import Head from "next/head";
import { TheFooter } from './TheFooter/TheFooter';
import { TheHeader } from './TheHeader/TheHeader';


export type TMeta = {
    [key: string]: string
}

interface PropsLayout {
    children: ReactElement,
    meta: TMeta
}

const MyHead: React.FC<{ meta: TMeta }> = ({ meta }) => {
    const { title, description, keywords } = meta
    return (
        <Head>
            <title>{title}</title>
            <meta name="theme-color" content="#000000" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description}
            />
        </Head>
    )
}

const Layout: React.FC<PropsLayout> = ({ children, meta }) => {

    return (
        <>
            <MyHead meta={meta} />
            <TheHeader />
            <main>
                {children}
            </main>
            <TheFooter />
        </>
    );
};

export default Layout;