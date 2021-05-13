import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '../../../Container/Container';
import GridItem from '../../../GridItem/GridItem';
import DehazeIcon from '@material-ui/icons/Dehaze';

const MenuSuperior: any = ({ toggleDrawer, list, state }) => {
  const classes = useStyles();
  return (
    <>
      <div className="bg-gray-900">
        <Container>
          <GridItem xs={12}>
            <React.Fragment key={'left'}>
              <DehazeIcon
                onClick={toggleDrawer('left', true)}
                className={classes.iconeAbrirMenu}
              />
              <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
              >
                {list('left')}
              </Drawer>
            </React.Fragment>
          </GridItem>
        </Container>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  iconeAbrirMenu: {
    padding: 0,
  },
});

export default MenuSuperior;
