import React, {PropsWithChildren} from 'react';
import {Container} from "@mui/material";
import stalkMeOnGitHub from "../../assets/img/stalkMeOnGithub.svg"
import { makeStyles } from '@mui/styles';
import {openUrlInNewTab} from "@milkscout/react";
import {GITHUB_URL_PROFILE} from "../../variables";

const useStyle = makeStyles({
  root: {
    marginTop:25, paddingBottom: 25
  },
  imgGithub: {
    height: 200,
    position: "fixed",
    right: 0, 
    top: 0,
    zIndex: 1,
    cursor: "pointer"
  }
});

export const Layout = ({children}: PropsWithChildren<unknown>) => {
  const classes = useStyle();
  return (<Container maxWidth={'desktop'} className={classes.root}>
        <img src={stalkMeOnGitHub} 
             className={classes.imgGithub} 
             onClick={() => openUrlInNewTab(GITHUB_URL_PROFILE)} 
             alt={'Stalk me on GitHub logo'}
        />
      {children}
  </Container>);
};
