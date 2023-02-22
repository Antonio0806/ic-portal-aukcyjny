import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ReactComponent as PokojLogo } from './logo.svg';
const TopMenu = () => {

    return (
        <div style={{
            backgroundColor: '#7CEAED',
            padding: '8px',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'

        }}>
            <Grid container spacing={0}>
                <Grid item xs={11}>
                    <Typography variant="h5" style={{ verticalAlign:"middle", margin: "auto"}}>Wernisaż "Pokój Pokoju" - Katalog obrazów</Typography>

                </Grid>
                <Grid item xs={1}>

                </Grid>
            </Grid>
        </div>
    );
};

export default TopMenu;