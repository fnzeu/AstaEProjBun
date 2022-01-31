import React, {useEffect, useState, useCallback} from "react";
import axios from "axios";
import debounce from "lodash.debounce";

import Card from "../components/Card";

import "./ProductsPage.css";

function ProductsPage() {
  const [cars, setCars] = useState([]);
  const [debounceValue, setDebounceValue] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSave = useCallback(
    debounce((val) => setDebounceValue(val), 300),
    []
  );

  function inputChangeHandler(event) {
    setSearch(event.target.value);
    debouncedSave(event.target.value);
  }

  const carList = cars
    .filter((val) => {
      if (debounceValue === "") return val;
      else if (val.make.toLowerCase().includes(debounceValue.toLowerCase())) {
        return val;
      }
    })
    .map((val) => {
      return (
        <Card
          key={val.id}
          img={val.img_url}
          name={val.make}
          model={val.model}
          price={val.price}
          year={val.year}
          horsePower={val.horsepower}
        >
          {val.name}
        </Card>
      );
    });

  useEffect(() => {
    const getCars = async () => {
      const carsArray = [];
      const response = await axios.get(
        `https://private-anon-3dead3a412-carsapi1.apiary-mock.com/cars`
      );
      const data = response.data;

      for (let i = 0; i < data.length; i++) carsArray.push(data[i]);
      setCars(carsArray);
    };
    getCars();
  }, []);

  return (
    <>
      <section className="show">
        <input
          className="input"
          id="name"
          type="Text"
          value={search}
          onChange={inputChangeHandler}
          placeholder="search"
        />
        <div className="ctn">{carList}</div>
      </section>
    </>
  );
}

export default ProductsPage;
