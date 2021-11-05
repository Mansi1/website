import React, {PropsWithChildren} from 'react';
import {Container} from "@mui/material";


export const Layout = ({children}: PropsWithChildren<unknown>) => {
  return (<Container maxWidth={'desktop'} style={{marginTop:25, paddingBottom: 25}}>
      {children}
  </Container>);
};
