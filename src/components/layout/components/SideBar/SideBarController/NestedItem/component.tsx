import { useState } from 'react';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { INestedItemProps, ISingleItemProps } from '../../types';
import { SingleItem } from '../SingleItem';

export function NestedItem({ label, routes }: INestedItemProps): JSX.Element {
  const [openListItem, setOpenListItem] = useState<boolean>(false);

  const handleClick = () => {
    setOpenListItem((prevState) => !prevState);
  };

  return (
    <List key={label} component='div' disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={label} />
        {openListItem ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openListItem} timeout='auto' unmountOnExit>
        <List disablePadding>
          {routes?.map((props: ISingleItemProps) => (
            <SingleItem key={props.label} isNested {...props} />
          ))}
        </List>
      </Collapse>
    </List>
  );
}
