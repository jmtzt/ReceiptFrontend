import React, { useState, useEffect } from "react";
import Select from "react-select";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import axios from "axios";
import "./recibohome.css";
import { getToken } from "../../services/auth";

export default function ReciboHome(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [emps, setEmps] = useState([]);
  const [benefs, setBen] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:3001/empresas", {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }),
        axios.get("http://localhost:3001/beneficiarios", {
          headers: { Authorization: `Bearer ${getToken()}` },
        }),
      ])
      .then(
        (responseArr) => {
          setIsLoaded(true);
          setEmps(responseArr[0].data);
          setBen(responseArr[1].data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function setEmpOpt() {
    return emps.map(({ NOME }) => ({ label: NOME, value: NOME }));
  }

  function setBenOpt() {
    return benefs.map(({ Nome }) => ({ label: Nome, value: Nome }));
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <h1>Carregando...</h1>;
  } else {
    return (
      <div className="ReciboHomeMainDiv">
        <DayPickerInput onDayChange={(day) => setStartDate(day)} />
        <Select options={setEmpOpt()} />
        <Select options={setBenOpt()} />
      </div>
    );
  }
}
