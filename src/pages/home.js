import Header from "../components/haeder";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>home page</title>
        <meta name="description" content="home" />
      </Helmet>
      <Header />
      <MainContent pageName="Home Page" />
      <Footer />
    </>
  );
};

export default Home;
