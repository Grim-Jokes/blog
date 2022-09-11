import hljs from 'highlight.js'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { BlogList } from '../components/blog/blogList'
import { getBlogList } from '../components/blog/utils/getBlogList'
import styles from '../styles/blog/Block.module.css'


const Blog: NextPage = () => {
  const [blogs, setBlogList] = useState<string[]>([])
  const [post, setSelectedPost] = useState<string>('')
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    getBlogList().then(setBlogList)
  }, [])

  useEffect(() => {
    if (post) {
      fetch(post).then((r) => r.text()).then((t) => {
        setContent(t)
      })
    }
  }, [post])

  useEffect(() => {
    const elems = document.querySelectorAll("pre,code")
    elems.forEach((p) => hljs.highlightElement(p as HTMLElement))
  }, [content])


  return (
    <div className={[styles.container, 'body-large'].join(' ')}>
      <main className={styles.main}>
        <div className={[styles.list, 'on-background-text'].join(' ')}>
          <BlogList blogList={blogs}
            listItemClassName={[styles.listItem].join(' ')}
            selected={post}
            onClick={(entry) => {
              setSelectedPost(entry)
            }} />
        </div>
        <div className={[styles.content, 'surface', 'on-surface-text'].join(' ')}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </main>
    </div>
  )
}

export default Blog