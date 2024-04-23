import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

interface MouseOverPopoverProps{
    open: boolean,
    handlePopoverOpen: (event: React.MouseEvent<HTMLElement>) => void,
    handlePopoverClose: () => void,
    anchorEl: HTMLElement | null,
    content: string
}

export default function MouseOverPopover({ open, handlePopoverClose, handlePopoverOpen, anchorEl, content }: MouseOverPopoverProps) {

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{ content }</Typography>
      </Popover>
    </div>
  );
}