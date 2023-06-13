import * as React from 'react';
import {useEffect, useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import {useScrollPosition} from "../../hooks/useScrollPosition";
import {Slide} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';

const Navigation = () => {
    const [value, setValue] = useState(0);
    const [firstRender, setFirstRender] = useState(true);
    const {y = 0} = useScrollPosition();

    useEffect(() => {
        const timer = setTimeout(() => {
            setFirstRender(false);
        }, 2000);

        return () => {
            setFirstRender(true);
            clearTimeout(timer);
        };
    }, [y])

    return (
        <Slide direction="up" in={firstRender && y > 10}>
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
                    <BottomNavigationAction icon={<VerticalAlignTopIcon/>} onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                    }}/>
                    <BottomNavigationAction label="Photo" icon={<ImageIcon/>} onClick={() => {
                        const top = Number(document?.getElementById('photo')?.offsetTop) ?? 0;
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
