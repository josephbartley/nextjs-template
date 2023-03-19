import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>NextJS Template</title>
                <meta name="description" content="Meta content description for SEO for the NextJS Template" />
            </Head>
            <div className={styles['home']}>
                <h1>NextJS Template</h1>
                <p>NextJS Template is a template for NextJS projects.</p>
            </div>
        </>
    )
}
