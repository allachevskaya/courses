import Layout from "@/components/UI/Layout";
import Link from "next/link";
import styles from '@/styles/notFound.module.sass'

const metaNotFound = {
    title: '404',
    description: 'err 404',
    keywords: ''
}

export default function NotFound() {
    return (
        <Layout meta={metaNotFound}>
            <section className={styles.notFound}>
                <h1 style={{fontSize: '4em'}}>404</h1>
                <Link href={'/'} title={"На главную"}>На главную</Link>
            </section>
        </Layout>
    )
}