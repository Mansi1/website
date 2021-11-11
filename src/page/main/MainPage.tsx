import React from 'react';
import {Layout} from "./Layout";
import {makeStyles} from '@mui/styles';
import {Button} from "@mui/material"
import profileImage from '../../assets/img/profile.jpg'
import Typed from 'react-typed';
import {Logos} from "./components/Logos";
import {getCurrentAge} from "../../function/getCurrentAge";
import { dispatchCustomEvent } from '@milkscout/react';
import {REDICE_EVENT_NAME} from "../../customEvents";

const useStyle = makeStyles({
    root: {
        backgroundColor: '#f3ebe3',
        height: 340
    },  
    imageWrapper: {
        textAlign: 'center'
    },
    image: {
        maxWidth: 370,
        borderRadius: 200,
        border: '10px solid #fff',
        margin: '-280px auto 0',
    },
    headline: {
        textAlign: "center",
        textTransform: 'uppercase',
        fontWeight: 300,
        letterSpacing: '4px',
        fontSize: '2.8rem',
    },
    subHeadline: {
        fontWeight: 600,
    },
    descriptionShort: {
        margin: "auto",
        marginTop: 30,
        textAlign: "center",
        maxWidth: 520,
        fontSize: 18,
        lineHeight: '25.6px'
    },
    fullStack: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 52
    },
    technologyHeader:{
        fontSize: 18,
        textAlign: "center"
    },
    technology:{
        marginTop: 20,
        maxWidth: 600,
        margin: "auto"
    }
});

export interface MainPageProps {

}

export const MainPage = (props: MainPageProps) => {
    const classes = useStyle();
    return (<Layout>
        <div>
            <div className={classes.root}>
            </div>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={profileImage} alt={'Its me Michael Mannseicher'}/>
            </div>
            <div className={classes.headline}>
                <div>Michael</div>
                <div className={classes.subHeadline}>Mannseicher</div>
            </div>

            <div className={classes.descriptionShort}>
                {'Ich bin '+ getCurrentAge(18,5,1990) +' Jahre alt und habe an der Hochschule für angewandte Wissenschaften Landshut meinen '}
                <i>Master in Informatik</i>
                {' gemacht.'}
            </div>
            <div className={classes.fullStack}>
                <Typed
                    strings={['Ich bin <b>Full-Stack Entwickler</b>']}
                    typeSpeed={40}
                    backDelay={10000}
                    loop
                />
            </div>

            <div className={classes.technologyHeader}>30 zufällige Technologien, Frameworks und Tools mit den ich bereits gearbeitet habe:</div>
            <div className={classes.technology}>
              <Logos/>
            </div>
            <div style={{textAlign: 'center', marginTop: 25}}>
                <Button onClick={() => dispatchCustomEvent(REDICE_EVENT_NAME)}>Erneut Würfeln</Button>
            </div>
        </div>
    </Layout>);
};
