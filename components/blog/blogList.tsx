import { List, ListItemButton } from '@mui/material';

export type OnClickHandler = (entry: string) => void;
interface BlogListProps {
  blogList: string[]
  onClick: OnClickHandler
  listItemClassName: string
  selected: string
}


function getToListItem(onClick: OnClickHandler, className: string, selected: string) {
  return function toListItem(entry: string, i: number) {

    let name = entry.split('/').pop() || ''
    name = name.split('.').shift() || ''
    name = name.replaceAll("-", " ")
    name = name.replaceAll(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );

    const classes = [className];

    if (entry == selected) {
      classes.push("selected")
    }

    return <ListItemButton key={i} className={classes.join(' ')} onClick={(event) => {
      event.preventDefault();
      onClick(entry);
    }}>
      <a href={entry}>{name}</a>
    </ListItemButton>
  }
}

export function BlogList({ blogList, onClick, listItemClassName, selected }: BlogListProps) {
  return <List>
    {blogList.map(getToListItem(onClick, listItemClassName, selected))}
  </List>
}