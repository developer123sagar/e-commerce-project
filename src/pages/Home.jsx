import { Category, Main } from "components";
import { RequestAPI } from "RequestAPI";

const Home = () => {
  return (
    <div className="absolute top-24 p-2">
      <Main />
      <Category title="Planters" API={RequestAPI.apiPlanters} />
      <Category title="Table Covers" API={RequestAPI.apiChairs} />
      <Category title="Vases" API={RequestAPI.apiChairs} />
      <Category title="Wall Arts" API={RequestAPI.apiWallarts} />
    </div>
  );
};

export default Home;
