
export interface Job {
  name: string
  role: string
  startDate: string
  endDate: string
  accomplishments: string[]
  period: string
}

function mapField(job: Job, field: "name" | "role", value: string) {
  if (!job[field]) {
    job[field] = value;
  }
}

function toDateString(date: Date | "Current") {
  if (date == "Current") {
    return date
  }
  return date.toLocaleDateString(navigator.language, { month: "2-digit", year: "numeric" })
}

function toPeriodString(date: Date) {
  return date.toLocaleDateString(navigator.language, { month: "short", year: "numeric" })
}


function mapDateField(job: Job, field: "startDate" | "endDate", value: string) {

  if (field == "startDate") {
    job.period = toPeriodString(new Date("1 " + value))
  }

  if (value != "Current") {
    const temp = new Date("1 " + value) 
    value = toDateString(temp)
  }
  job[field] = value
}

const steps: { [index: number]: Function } = {
  1: (job: Job, value: string) => mapField(job, "name", value),
  2: (job: Job, value: string) => mapField(job, "role", value),
  3: (job: Job, value: string) => mapDateField(job, "startDate", value),
  4: (job: Job, value: string) => mapDateField(job, "endDate", value),
}

function mapToJSON(text: string): Job {
  const lines = text.split("\n")

  let separatorCount = 0;

  let data: Job = { period: '', name: '', role: '', startDate: '', endDate: '', accomplishments: [] }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith("#")) {
      separatorCount++
      continue
    }

    if (separatorCount < 2) {
      const step = steps[i];

      if (step) {
        step(data, line)
      }
    } else {
      data.accomplishments.push(line)
    }


  }
  return data
}

export async function getJobs() {
  const jobs = await fetch(`jobs/jobs.json`)
  if (jobs.status != 200) {
    console.warn(await jobs.text())
    return [];
  }
  const jobsList = JSON.parse(await jobs.text())

  let p = jobsList.map((file: string) => {
    return fetch(`jobs/${file}`)
      .then(r => r.text())
      .then(mapToJSON)
  });

  return Promise.all(p)
}

