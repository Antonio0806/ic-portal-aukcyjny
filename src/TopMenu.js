import * as React from 'react';
import Typography from '@mui/material/Typography';

const TopMenu = () => {

    return (
        <div style={{
            backgroundColor: '#7CEAED',
            padding: '16px',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
        }}>
            <Typography variant="h6">Wernisaż "Pokój Pokoju" - Katalog obrazów</Typography>
        </div>
    );
};

export default TopMenu;