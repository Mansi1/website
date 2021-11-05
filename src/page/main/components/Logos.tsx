import React, {useState} from 'react';
import {makeStyles} from "@mui/styles";
import {techIcons} from "./imgTechIcons";
import {Logo} from "./Logo";
import {listenToCustomEvent, useEffectOnce} from "@milkscout/react";
import {REDICE_EVENT_NAME} from "../../../customEvents";
import {shuffle} from "../../../function/shuffle";

const useStyle = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'center'
    }
});

export const Logos = () => {
    const classes = useStyle();
    //force to rerender :D
    const [, setCounter] = useState(1);
    useEffectOnce(() => listenToCustomEvent(REDICE_EVENT_NAME, () => setCounter((c) => c + 1)))
    const cutTechIcons = shuffle(techIcons).filter((_, i) => i < 30);
    return (<div className={classes.root}>
        {cutTechIcons.map(({name, src}) => (<Logo key={name} name={name} src={src}/>))}
    </div>);
};


