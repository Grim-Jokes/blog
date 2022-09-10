import { MouseEvent, MouseEventHandler } from "react"

interface BlogListProps {
  blogList: string[]
  onClick: (entry: string) => void
}

function getToListItem(onClick: (entry: string) => void) {
  return function toListItem(entry: string, i: number) {
    return <li key={i} onClick={(event) => {
      event.preventDefault();
      onClick(entry);
    }}>
      <a href={entry}>{entry}</a>
    </li>
  }
}

export function BlogList({ blogList, onClick }: BlogListProps) {
  return <ul>
    {blogList.map(getToListItem(onClick))}
  </ul>
}