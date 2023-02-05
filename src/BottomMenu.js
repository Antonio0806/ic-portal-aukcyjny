import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';

const BottonMenu = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        textAlign: 'center'
    }}>
        <div style={{ display: 'flex' }}>
            <IconButton href="https://github.com/Antonio0806">
                <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/events/627350902390840?eav=AfZoUWPx35Mk1BwGKCYCfl3CTS32w8kTTjhKt41yeHvnFOe8GW55ZgrHCa8C1-MeATY&paipv=0">
                <FacebookIcon />
            </IconButton>
        </div>
        <div>&copy; 2023 234WDW Feniks</div>
    </div>
);

export default BottonMenu;