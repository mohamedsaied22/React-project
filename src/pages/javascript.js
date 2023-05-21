import Header from "../components/haeder";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";
import { Helmet  } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>javascript page</title>
        <meta name="description" content="js" />
      </Helmet>
      <Header />
      <MainContent pageName="javascript Page" />
      <Footer />
    </>
  );
};

export default Javascript;
