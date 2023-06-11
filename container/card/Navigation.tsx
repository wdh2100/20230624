import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import ArchiveIcon from '@mui/icons-material/Archive';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import {useScrollYPosition} from "../../hooks/useScrollPosition";
import {Slide} from "@mui/material";

const Navigation = () => {
    const [value, setValue] = React.useState(0);
    const yPosition = useScrollYPosition();

    return (
        <Slide direction="up" in={yPosition > 10}>
            <Paper sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 100,
            }} elevation={3}>

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Main" icon={<VerticalAlignTopIcon/>} onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                    }}/>
                    <BottomNavigationAction label="Photo" icon={<ArchiveIcon/>} onClick={() => {
                        const top = Number(document?.getElementById('photo')?.offsetTop) - 50 ?? 0;
                        console.log(top);
                        window.scrollTo({top, left: 0, behavior: 'smooth'})
                    }}/>
                    <BottomNavigationAction label="Map" icon={<LocationOnIcon/>} onClick={() => {
                        const top = Number(document.body.scrollHeight);
                        window.scrollTo({top, left: 0, behavior: 'smooth'})
                    }}/>
                </BottomNavigation>
            </Paper>
        </Slide>
    );
};

export default Navigation;
