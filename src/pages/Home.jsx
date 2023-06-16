import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { Category, Footer, Main } from "components";
import { useState } from "react";
import { RequestAPI } from "RequestAPI";

const Home = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="mt-24">
        <Main />
        <div className="mt-10 h-[1300px]">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Wall Art" value="1" />
                <Tab label="Vases" value="2" />
                <Tab label="Planters" value="3" />
                <Tab label="Table Covers" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Category API={RequestAPI.apiWallarts} />
            </TabPanel>
            <TabPanel value="2">
              <Category API={RequestAPI.apiVases} />
            </TabPanel>
            <TabPanel value="3">
              <Category API={RequestAPI.apiPlanters} />
            </TabPanel>
            <TabPanel value="4">
              <Category API={RequestAPI.apiChairs} />
            </TabPanel>
          </TabContext>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
