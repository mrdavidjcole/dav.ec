

const Home = () => {
  return (<></>);
}

Home.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/ole',
    });
    res.end();
  } else {
    Router.push('/ole');
  }
  return {};
};

export default Home;
