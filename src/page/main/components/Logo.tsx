import React from 'react';
import {Tooltip} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles(({

    logoWrapper: {
        margin: 10,
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        maxHeight: 50,
    },
    tooltip: {
        fontWeight: 'bold',
        backgroundColor: '#000000'
    },
    tooltipArrow: {
        color: '#000000'
    }
}));

export interface LogoProps {
    name: string;
    src: string;
}

export const Logo = ({name, src}: LogoProps) => {
    const classes = useStyle();
    return (<Tooltip arrow title={name} classes={{arrow: classes.tooltipArrow, tooltip: classes.tooltip}}>
        <div key={name} className={classes.logoWrapper}>
            <img src={src} className={classes.logo} alt={name}/>
        </div>
    </Tooltip>);
};
