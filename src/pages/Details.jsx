import { RequestAPI } from "RequestAPI";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id, category } = useParams();
  const [selectedDatas, setselectedDatas] = useState([]);
  const [singleProd, setSingleProd] = useState([]);

  useEffect(() => {
    const getAPI = () => {
      let temp;
      if (category === "planters") temp = RequestAPI.apiPlanters;
      if (category === "vases") temp = RequestAPI.apiVases;
      if (category === "table-covers") temp = RequestAPI.apiChairs;
      if (category === "wallart") temp = RequestAPI.apiWallarts;
      return temp;
    };

    const fetchData = async () => {
      try {
        const API = getAPI();
        const response = await axios.get(API);
        setselectedDatas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    const filterProduct = () => {
      const data = selectedDatas.filter((item) => item.uid === item.id);
      setSingleProd(data[0])
    };
    filterProduct();
  }, [selectedDatas]);

  console.log(singleProd)

  return <div className="absolute top-32 p-2">hi</div>;
};

export default Details;
