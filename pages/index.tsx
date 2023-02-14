import { Grid } from '@mui/material'
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
    <Grid container spacing={1}>
      <main className={styles.main}>
        <Timeline jobs={jobs} />
      </main>
    </Grid>
  )
}

export default Resume
