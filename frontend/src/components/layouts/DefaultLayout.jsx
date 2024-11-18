import PropTypes from "prop-types";
import Header from "../fragments/Header";
import Footer from "../fragments/Footer";

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div className="bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
