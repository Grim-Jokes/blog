import { Timeline as MuiTimeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Job } from './utils/getJobs';
import styles from '../styles/Timeline.module.css';
import { WorkIcon } from './workIcon';
import { List, ListItem, Typography } from '@mui/material';


interface TimelineProps {
  jobs: Job[]
}

function toDateRange(j: Job) {
  return <Typography>{j.startDate} - {j.endDate}</Typography>
}

function toAccomplishment(j: Job) {
  return <>
    <div className={styles.itemHeader}>
      <Typography variant='h3' className='headline-large'>
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

function toTimelineElement(j: Job, key: number): JSX.Element {
  const position = key % 2 == 0 ? "left" : "right"

  return (
    <TimelineItem position={position} key={key} className='on-surface-variant-text'>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
      >
        {toDateRange(j)}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={{ backgroundColor: "var(--md-sys-color-tertiary)" }} className='on-tertiary-text'>
          <WorkIcon width='2em' height='2em' />
        </TimelineDot>
        <TimelineConnector style={{ backgroundColor: "var(--md-sys-color-tertiary)" }} />
      </TimelineSeparator>
      <TimelineContent>
        <div className={['surface-variant on-surface-variant-text timeline_element_content', styles.content].join(' ')}>
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

  const data = jobs.sort(byStartDate).map(toTimelineElement)

  return (
    <MuiTimeline
      position='alternate'
      className={[styles.timeline, "on-background-text"].join(' ')}
    >
      {data}
    </MuiTimeline>
  )
}

export default Timeline;
