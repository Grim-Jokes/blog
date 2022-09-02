const { readdirSync, writeFileSync } = require("fs");
const { resolve } = require("path");


const jobsPath = resolve(__dirname, "..", "public/jobs")
const jobsListPath = resolve(__dirname, "..", "public/jobs", "jobs.json")
let jobs = readdirSync(jobsPath)

jobs = jobs.filter(x => x != "README.md" && x.endsWith(".md"))

writeFileSync(jobsListPath, JSON.stringify(jobs, null, 2));