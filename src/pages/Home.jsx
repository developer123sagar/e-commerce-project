import { Category, Footer, Main } from "components";
import { RequestAPI } from "RequestAPI";

const Home = () => {
  return (
    <>
      <div className="mt-24 p-2">
        <Main />
        <Category title="Wall Arts" API={RequestAPI.apiWallarts} />
        <Category title="Vases" API={RequestAPI.apiVases} />
        <Category title="Planters" API={RequestAPI.apiPlanters} />
        <Category title="Table Covers" API={RequestAPI.apiChairs} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
