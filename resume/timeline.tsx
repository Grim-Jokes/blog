import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Job } from './utils/getJobs'
import styles from '../styles/Timeline.module.css'

interface TimelineProps {
  jobs: Job[]
}

function toTimelineElement(j: Job, key: number): JSX.Element {
  return (
    <VerticalTimelineElement
      date={j.period}
      key={key}
      className={[styles.timelineCard].join(' ')}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<svg className="workIcon" />}
    >
      <div className={styles.timelineCardContent}>
        <h3 className={styles.cardSubTitle}>{j.name}</h3>
        <h4 className={styles.cardTitle}>{j.startDate + " - " + j.endDate}</h4>
        <ul>
          {j.accomplishments.filter(l => l).map((l, i) => <li key={i}>{l}</li>)}
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

  console.log(data);

  return (
    <div className={styles.timelineWrapper}>
      <VerticalTimeline
        className={styles.timeline}
      >
        {data}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;
