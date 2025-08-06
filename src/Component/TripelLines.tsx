import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

const options = [
    'Contact Us',
    'Category',
    'Sample Projects'
    ];

    const ITEM_HEIGHT = 148;

    export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
        >
            <ViewHeadlineIcon />
        </IconButton>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
            paper: {
                style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                },
            },
            list: {
                'aria-labelledby': 'long-button',
            },
            }}
        >
            {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
            </MenuItem>
            ))}
        </Menu>
        </div>
    );
}