import React from 'react';
import { Button, Drawer } from '@material-ui/core';
import Container from '../../../Container/Container';
import GridItem from '../../../GridItem/GridItem';

const MenuSuperior: any = ({ toggleDrawer, list, state }) => {
  return (
    <>
      <Container>
        <GridItem xs={12}>
          <React.Fragment key={'left'}>
            <Button onClick={toggleDrawer('left', true)}>Abrir menu</Button>
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
    </>
  );
};

export default MenuSuperior;
