const { readdirSync, writeFileSync, lstatSync } = require("fs");
const { resolve } = require("path");

const blogPath = resolve(__dirname, "..", "blog")
const blogListPath = resolve(__dirname, "..", "public/blog", "blogs.json")

// jobs = jobs.filter(x => x != "README.md" && x.endsWith(".md"))

let posts = []

var getFiles = function (p) {
  readdirSync(p).forEach(function (file) {
    const subPath = resolve(p, file)
    if (lstatSync(subPath).isDirectory()) {
      getFiles(subPath);
    } else {
      posts.push(resolve(p, file));
    }
  });
}

getFiles(blogPath)
posts = posts.map((f) => f.replace(process.cwd() + '/', ""))
writeFileSync(blogListPath, JSON.stringify(posts, null, 2));