import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram'
const BottonMenu = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px',
        position: 'fixed',
        bottom: '0',
        width: '98%',
        textAlign: 'center',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        backgroundColor: '#7CEAED'
    }}>

        <div style={{ display: 'flex' }}>
            <IconButton href="https://github.com/Antonio0806">
                <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/events/627350902390840?eav=AfZoUWPx35Mk1BwGKCYCfl3CTS32w8kTTjhKt41yeHvnFOe8GW55ZgrHCa8C1-MeATY&paipv=0">
                <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/234wdwfeniks/">
                <InstagramIcon />
            </IconButton>
        </div>
        <div>&copy; 2023 234WDW Feniks</div>
    </div>
);

export default BottonMenu;