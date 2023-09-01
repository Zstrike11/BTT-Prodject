import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Google Classroom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app" />
        <p className="description">
          Get started by clicking <link "age-of-war.html" />
        </p>
      </main>

      <Footer />
    </div>
  )
}
