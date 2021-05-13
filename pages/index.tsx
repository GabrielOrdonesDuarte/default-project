import Menu from '../components/Menu/Menu';
import Container from '../components/Container/Container';
import GridItem from '../components/GridItem/GridItem';

const Home: any = () => {
  return (
    <>
      <Menu />
      <Container>
        <GridItem xs={12} md={6}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            provident possimus harum ut non distinctio consequuntur id
            architecto culpa consectetur recusandae, pariatur et reiciendis
            vitae aut enim veniam adipisci ipsam?
          </h1>
        </GridItem>
        <GridItem xs={12} md={6}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            provident possimus harum ut non distinctio consequuntur id
            architecto culpa consectetur recusandae, pariatur et reiciendis
            vitae aut enim veniam adipisci ipsam?
          </h1>
        </GridItem>
      </Container>
    </>
  );
};

export default Home;
