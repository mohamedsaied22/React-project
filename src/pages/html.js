import Header from "../components/haeder";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>html page</title>
        <meta name="description" content="html" />
      </Helmet>
      <Header />
      <MainContent pageName="HTML Page" />
      <Footer />
    </>
  );
};

export default Html;
