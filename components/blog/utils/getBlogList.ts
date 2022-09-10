export async function getBlogList() {
  const blogs = await (await fetch("blog/blogs.json")).text()

  const blogList = JSON.parse(blogs)
  return blogList
}