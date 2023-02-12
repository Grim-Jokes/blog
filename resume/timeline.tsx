import { Timeline as MuiTimeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Job } from './utils/getJobs';
import styles from '../styles/Timeline.module.css';
import { WorkIcon } from './workIcon';
import { List, ListItem, Typography } from '@mui/material';


interface TimelineProps {
  jobs: Job[]
}

function toDateRange(j: Job) {
  return <>{j.startDate} - {j.endDate}</>
}

function toAccomplishment(j: Job) {
  return <>
    <Typography variant='h5' className={styles.header}>
      {j.name}
    </Typography>
    <Typography variant='h6'>
      {j.role}
    </Typography>
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

function toTimelineElement(j: Job, key: number): JSX.Element {
  return (
    <TimelineItem key={key}>
      <TimelineOppositeContent           sx={{ m: 'auto 0' }}
          variant="body2">
        {toDateRange(j)}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={{ backgroundColor: "var(--md-sys-color-tertiary)" }} className='tertiary on-tertiary-text'>
          <WorkIcon width='48px' height='48px' />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className='on-surface-variant-text'>
        {toAccomplishment(j)}
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

  const data = jobs.sort(byStartDate).map(toTimelineElement)

  return (
    <MuiTimeline
      className={[styles.timeline, "on-background-text"].join(' ')}
    >
      {data}
    </MuiTimeline>
  )
}

export default Timeline;
