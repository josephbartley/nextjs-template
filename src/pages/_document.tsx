import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet='utf-8' />
                <meta
                    name='description'
                    content='Content description for SEO'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
