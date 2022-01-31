import React, {useEffect, useState} from "react";
import axios from "axios";

import Driver from "../components/Driver";

import styles from "./F1Grid.module.css";

function F1Grid() {
  const [drivers, setDrivers] = useState([]);

  const driversList = drivers.map((val) => {
    return (
      <Driver
        key={val.code}
        givenName={val.givenName}
        familyName={val.familyName}
        number={val.permanentNumber}
        nationality={val.nationality}
      />
    );
  });

  useEffect(() => {
    const getDrivers = async () => {
      const driversArray = [];
      const response = await axios.get(
        `http://ergast.com/api/f1/2021/drivers.json`
      );
      console.log(response.data.MRData.DriverTable.Drivers);
      const data = response.data.MRData.DriverTable.Drivers;

      for (let i = 0; i < data.length; i++) driversArray.push(data[i]);
      setDrivers(driversArray);
    };
    getDrivers();
  }, []);

  //   console.log(cars);

  return (
    <>
      <section className={styles.showcase}>
        <div className={styles.container}>{driversList}</div>
      </section>
    </>
  );
}

export default F1Grid;
