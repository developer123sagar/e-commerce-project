import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

const Category = (props) => {
  const { title, API } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API]);

  return (
    <>
      <p className="text-primary-700 text-lg font-cursive font-bold">{title}</p>
      <div className="w-full grid grid-cols-5 grid-Categorys-3 gap-y-10 gap-x-5">
        {data.map((item, id) => {
          return (
            <Link
              key={id + Math.random()}
              to={`/details/${item.category}/${item.uid}`}
            >
              <div className="shadow-lg relative">
                <img
                  src={item.primaryImage}
                  alt={title}
                  className="rounded object-contain"
                />
                {item.rating ? (
                  <p className="absolute bottom-[68px] left-1 text-sm bg-gray-400 flex items-center gap-1 px-2 py-[2px] rounded">
                    <span>{item.rating?.rating}</span>
                    <AiFillStar color="green" /> | {item.rating?.ratedUser}
                  </p>
                ) : null}
                <p className="font-roboto text-sm font-bold mt-1 px-2">
                  {item.title}
                </p>
                <p className="font-roboto text-sm text-gray-500 px-2 w-full truncate">
                  {item.subtitle}
                </p>
                <p className="px-2 text-sm w-full">
                  Rs. {item.price} &nbsp;
                  <span className="mark line-through"> Rs.{item.MRP}</span>
                  <span className="text-pink-500">
                    &nbsp; (
                    {item.disPercentage ? (
                      item.disPercentage
                    ) : (
                      <>Rs. {item.discount}</>
                    )}
                    OFF)
                  </span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
