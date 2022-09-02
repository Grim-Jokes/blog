import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Szekely</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Daniel Szekely
        </h1>
        <div>
          <span className={styles.description}>
            The path splits two ways
          </span>
        </div>
        <div className={styles.grid}>
          <Link href="/resume">
            <a className={styles.card}>
              <h2>Resume &rarr;</h2>
              <p>Work History</p>
            </a>
          </Link>

          <Link href="/blog">
            <a className={styles.card}>
              <h2>Blog &rarr;</h2>
              <p>Sporradic thoughts and feelings about programming things</p>
            </a>
          </Link>

        </div>
      </main>
    </div>
  )
}

export default Home
