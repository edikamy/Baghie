import Link from 'next/link'
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
        <title>رزومه کامبیز باقیه</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index