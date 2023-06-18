import home from 'images/home.jpg'
const Main = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-200 mix-blend-multiply -m-1 p-0">
        <div className="h-full w-2/3 bg-primary-700 mix-blend-multiply">
          <div className="absolute top-20 left-10 w-70 md: flex-row items-center sm:text-sm">
            <h1 className="text-5xl font-bold text-center mb-4 mt-20 text-secondary-400 ">
              ECLECTICA
            </h1>
            <h2 className="text-2xl font-bold text-center mb-4 text-white ">
              Curating space crafting memories
            </h2>
            <p className="text-white">
              We are tending to thousands of details it takes to create a
              a custom home tailored to your lifestyle.
            </p>
            <button className="border-solid border-2 p-3 bg-secondary-400 hover:bg-yellow-300 text-s w-55 font-bold text-center mt-20 ml-60 text-white">
              Explore More
            </button>
          </div>
          <div className="h-1/2 w-1/2 float-right ">
            <img
              src={home}
              alt="Error loading"
              className="ml-64 mt-36 max-h-2xl max-w-[39rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
