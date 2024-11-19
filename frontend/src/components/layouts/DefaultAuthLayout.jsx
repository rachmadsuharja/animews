import PropTypes from "prop-types";
import Card from "./../fragments/Card";

const DefaultAuthLayout = (props) => {
  const { children, title, subtitle } = props;
  return (
    <section className="bg-gray-50 h-screen w-screen">
      <main className="mx-auto max-w-xl flex flex-col items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <Card>
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="mt-6 font-bold text-gray-900 text-2xl md:text-3xl">
              {title}
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">{subtitle}</p>
          </div>

          {children}
        </Card>
      </main>
    </section>
  );
};

DefaultAuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
};

export default DefaultAuthLayout;
