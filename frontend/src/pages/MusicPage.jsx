import DefaultLayout from "../components/layouts/DefaultLayout";

const MusicPage = () => {
  document.title = "Music | Animews.com";
  return (
    <>
      <DefaultLayout>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header className="text-center">
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                animews.com
              </h2>

              <p className="mx-auto mt-4 max-w-md text-gray-500">
                Providing the latest information on the world of anime, manga,
                and more. With daily updates, in-depth reviews, and various
                engaging features, this site has become a trusted source for
                anime fans to stay updated with the latest developments.
              </p>
            </header>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default MusicPage;
