import React from 'react';
import MMenu from '@mui/material/Menu';
import MMenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

type Props = {
  children: React.ReactElement;
  options: Record<'label' | 'href', string>[];
};
export function Menu(props: Props) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();

  const toggleShow = () => setOpen(state => !state);

  const Element = React.cloneElement(props.children, {
    ref: ref,
    onClick: toggleShow,
  });
  return (
    <>
      {Element}
      <MMenu open={open} anchorEl={ref.current} onClose={toggleShow}>
        {props.options.map(({ label, href }) => (
          <MMenuItem href={href} component={Link}>
            {label}
          </MMenuItem>
        ))}
      </MMenu>
    </>
  );
}
