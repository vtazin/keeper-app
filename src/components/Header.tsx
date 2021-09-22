import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import {Toolbar, Typography} from '@mui/material';

function Header() {
    return (
        <Toolbar sx={{bgcolor:'#f5ba13'}}>
            <HighlightIcon/>
            <Typography variant="h5" component="div" sx={{fontFamily: '"McLaren", cursive', fontWeight:'200'}}>
                Keeper
            </Typography>
        </Toolbar>
    );
}

export default Header;
