import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

interface IPageProps {
  children: React.ReactElement;
}

const Page: React.FC<IPageProps> = ({ children }) => (
  <>
    <AppBar>
      <Toolbar>
        <Typography variant="h6">React Todo list</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar id="back-to-top-anchor" />
    <Container>
      <Box my={2}>{children}</Box>
    </Container>
  </>
);

export default Page;
