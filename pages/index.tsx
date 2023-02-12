import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Timeline from '../resume/timeline'
import { getJobs, Job } from '../resume/utils/getJobs'
import styles from '../styles/Home.module.css'

const Resume: NextPage = () => {

  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    getJobs().then((j: Job[]) => {
      setJobs(j)
    })
  }, [])
  
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}></h1>
          <Timeline jobs={jobs} />
      </main>
    </div>
  )
}

export default Resume
