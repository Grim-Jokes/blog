import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={[styles.container, "on-background-text"].join(' ')}>
      <Head>
        <title>Daniel Szekely</title>
        <meta name="description" content="Daniel Szekely" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={"display-large"}>
          Daniel Szekely
        </h1>
        <div>
          <span className={"display-small"}>
            The path splits two ways
          </span>
        </div>
        <div className={[styles.grid].join(' ')}>
          <Link href="/resume">
            <a className={[styles.card, "surface-variant on-surface-variant-text"].join(' ')}>
              <h2 className='title-medium'>&larr; Resume</h2>
              <p className='body-small'>Work History</p>
            </a>
          </Link>

          <Link href="/blog">
            <a className={[styles.card, "surface-variant on-surface-variant-text"].join(' ')}>
              <h2 className="title-medium">Blog &rarr;</h2>
              <p className='body-medium'>Sporradic thoughts and feelings about programming things</p>
            </a>
          </Link>

        </div>
      </main>
    </div>
  )
}

export default Home
