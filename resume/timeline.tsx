import { Timeline as MuiTimeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Job } from './utils/getJobs';
import styles from '../styles/Timeline.module.css';
import { WorkIcon } from './workIcon';
import { Grid, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material';


interface TimelineProps {
  jobs: Job[]
}

function toDateRange(j: Job) {
  return <Typography>{j.startDate} - {j.endDate}</Typography>
}

function toAccomplishment(j: Job) {
  return <>
    <div className={styles.itemHeader}>
      <Typography variant='h3' className={styles.name + ' ' + 'headline-large'}>
        {j.name}
      </Typography>
      <Typography variant='h5' className='headline-medium'>
        {j.role}
      </Typography>
    </div>
    <List className='body-large'>
      {j.accomplishments.filter(l => l).map((l, i) => {
        return <>
          <ListItem className={styles.listItem} key={i}>
            {l}
          </ListItem>
        </>
      })}
    </List>
  </>
}

function toTimelineElement(j: Job, key: number, m: boolean): JSX.Element {
  const position = m == true && key % 2 == 0 ? "left" : "right"
  const displayOpposite = m == false ? "none" : "block"

  return (
    <TimelineItem position={position} key={key} className='on-background-text'>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', display: displayOpposite }}

          variant="body2"
          className='on-background-text'
        >
          {toDateRange(j)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className='outline' />
          <TimelineDot className='tertiary on-tertiary-text'>
            <WorkIcon width='2em' height='2em' />
          </TimelineDot>
          <TimelineConnector className='outline' />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: 'auto 0' }}
          variant="body2"
        >
          <div className={styles.content}>
            {toAccomplishment(j)}
          </div>
        </TimelineContent>
    </TimelineItem>
  )
}

function byStartDate(a: Job, b: Job) {
  let aStart = new Date("1/" + a.startDate);
  let bStart = new Date("1/" + b.startDate)

  return bStart.getTime() - aStart.getTime()
}

const Timeline = ({ jobs }: TimelineProps) => {

  if (jobs.length == 0) {
    return null
  }

  const theme: any = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const data = jobs.sort(byStartDate).map((j, k) => toTimelineElement(j, k, matches))


  let position: 'left' | 'alternate' = matches ? 'alternate' : 'left'

  return (
    <MuiTimeline
      position={position}
      className={[styles.timeline, "on-background-text"].join(' ')}
    >
      {data}
    </MuiTimeline>
  )
}

export default Timeline;
