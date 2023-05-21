import Header from "../components/haeder";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>css page</title>
        <meta name="description" content="csssss" />
      </Helmet>
      <Header />
      <MainContent pageName="CSS Page" />
      <Footer />
    </>
  );
};

export default Css;
