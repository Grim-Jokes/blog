import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Job } from './utils/getJobs';
import styles from '../styles/Timeline.module.css';
import { WorkIcon } from './workIcon';


interface TimelineProps {
  jobs: Job[]
}

function toTimelineElement(j: Job, key: number): JSX.Element {
  return (
    <VerticalTimelineElement
      date={j.startDate + " - " + j.endDate}
      key={key}
      iconClassName={["tertiary", "on-tertiary-text"].join(' ')}
      dateClassName="on-backaground-text"
      intersectionObserverProps={{
      }}
      icon={<WorkIcon />}
    >
      <div className='on-surface-variant-text'>
        <h2 className={[styles.header, "on-surface-variant-text", "title-large"].join(' ')}>{j.name}</h2>
        <ul className='body-large'>
          {j.accomplishments.filter(l => l).map((l, i) => <li className={styles.listItem} key={i}>{l}</li>)}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Timeline = ({ jobs }: TimelineProps) => {

  if (jobs.length == 0) {
    return null
  }

  const data = jobs.map(toTimelineElement)

  return (
    <div className={styles.timelineWrapper}>
      <VerticalTimeline
        className={[styles.timeline, "on-background-text"].join(' ')}
      >
        {data}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;
