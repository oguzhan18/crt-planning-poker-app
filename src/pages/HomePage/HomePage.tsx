import { Divider, Grid, Slide, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { CreateGame } from '../../components/Poker/CreateGame/CreateGame';
import { JoinGame } from '../../components/Poker/JoinGame/JoinGame';
import { RecentGames } from '../../components/Poker/RecentGames/RecentGames';
import LandingImage from './../../images/background.jpg';
import roomsControllerImage from './../../images/rooms.jpg';
import './HomePage.css';

export const HomePage = () => {
  const isJoin = useRouteMatch('/join');
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));

  return (
    <>
      <Grid container direction='column' justifyContent='center' alignItems='center' spacing={2}>
        <Grid container item sm={12} lg={11} justifyContent='center' alignItems='center' spacing={3}>
          <Grid item sm={12} lg={6}>
            <Slide direction='down' in={true} timeout={1000}>
              <div className='HomePageContainer'>
                <Typography variant='h5'>CRT Planning Poker App</Typography>
                <img
                  alt='CRT Planning Poker App'
                  className='HomePageImage'
                  style={{ transform: isSmallScreen ? 'scale(0.5)' : 'none' }}
                  src={LandingImage}
                ></img>
                <Typography variant='subtitle1'>
                  CRT Poker - Free Agile Planning Poker app for scoring sprint plans and issues.
                </Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item sm={12} lg={6}>
            <div className='HomePageContainer'>{isJoin ? <JoinGame /> : <CreateGame />}</div>
          </Grid>
        </Grid>
        <Grid container item sm={12} lg={9} justifyContent='center' alignItems='center' spacing={3}>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={1000}>
              <Divider variant='middle'></Divider>
            </Slide>
          </Grid>
        </Grid>

        <Grid container item sm={12} lg={9} justifyContent='center' alignItems='center' spacing={3}>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={1500}>
              <div className='HomePageContainer'>
                <RecentGames />
              </div>
            </Slide>
          </Grid>

          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={1500}>
              <div className='HomePageContainer'>
                <Typography variant='subtitle1'>
                  Here is your recent Planning/Refinement rooms, click on the rooms name to join the rooms again.
                </Typography>
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container item sm={12} lg={9} justifyContent='center' alignItems='center' spacing={3}>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={2000}>
              <Divider variant='middle'></Divider>
            </Slide>
          </Grid>
        </Grid>
   
      </Grid>
      <Footer />
    </>
  );
};

export default HomePage;
