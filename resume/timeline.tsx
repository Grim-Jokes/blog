import { Chrono } from 'react-chrono'
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel'
import { Job } from './utils/getJobs'

interface TimelineProps {
  jobs: Job[]
}

const Timeline = ({ jobs }: TimelineProps) => {

  if (jobs.length == 0) {
    return null
  }

  const data: TimelineItemModel[] = jobs
    .map((j, i): TimelineItemModel => {
      return {
        id: i.toString(),
        title: j.period,
        cardTitle: j.name,
        cardSubtitle: `${j.startDate} - ${j.endDate}`,
        cardDetailedText: j.accomplishments
      }
    });

  console.log(data);

  return (
    <div style={{ width: "50%", height: "1000px" }}>
      <Chrono 
        title='Experience'
        enableOutline={true} 
        items={data} 
        mode= {'VERTICAL_ALTERNATING'}
        allowDynamicUpdate
        borderLessCards={true}
        useReadMore={false}
      />
    </div>
  )
}

export default Timeline;
