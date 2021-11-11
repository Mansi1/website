import React from 'react';
import {Tooltip} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const useStyle = makeStyles(({

    logoWrapper: {
        margin: 10,
        display: 'flex',
        alignItems: 'center',
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
            <LazyLoadImage
                alt={name}
                src={src}
                effect={'blur'}
                height={50}
                width={50} />
        </div>
    </Tooltip>);
};
