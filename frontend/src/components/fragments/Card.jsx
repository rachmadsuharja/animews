import { PropTypes } from "prop-types";

const Card = (props) => {
  const { children } = props;
  return (
    <>
      <div className="card bg-white px-6 py-12 overflow-hidden rounded-lg shadow sm:shadow-lg">
        {children}
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
