import Link from 'next/link'
import styles from './TheHeader.module.sass'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

type TLinksData = {
    [key: string]: string;
};

const linksData: TLinksData[] = [
    {
        pathname: '/',
        value: 'Реализация через UseState',
        title: 'Перейти на UseState',
    },
    {
        pathname: 'Different',
        value: 'Реализация через UseRouter',
        title: 'Перейти на UseRouter',
    },
];

export const TheHeader = () => {
    const { pathname } = useRouter();
    const [activePage, setActivePage] = useState<string>(linksData[0].pathname)

    useEffect(() => {
        pathname != activePage && setActivePage(pathname)
    }, [pathname])

    return (
        <header className={styles.header}>
            {linksData.map((link) => {
                const { value, title, pathname } = link
                return (
                    <Link
                        href={pathname}
                        title={title}
                        key={title}
                        className={`${activePage === pathname ? styles.headerActive : ''}`}
                    >
                        {value}
                    </Link>
                )
            })}

        </header>
    )
}