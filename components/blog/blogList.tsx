import { MouseEvent, MouseEventHandler } from "react"

export type OnClickHandler = (entry: string) => void;
interface BlogListProps {
  blogList: string[]
  onClick: OnClickHandler
  listItemClassName: string
}


function getToListItem(onClick: OnClickHandler, className: string) {
  return function toListItem(entry: string, i: number) {

    let name = entry.split('/').pop() || ''
    name = name.split('.').shift() || ''
    name = name.replace("-", " ")
    name = name.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );

    return <li key={i} className={className} onClick={(event) => {
      event.preventDefault();
      onClick(entry);
    }}>
      <a href={entry}>{name}</a>
    </li>
  }
}

export function BlogList({ blogList, onClick, listItemClassName }: BlogListProps) {
  return <ul>
    {blogList.map(getToListItem(onClick, listItemClassName))}
  </ul>
}