import React, { useRef, useState } from "react";
import Select from "react-select";
import ReactToPrint from "react-to-print";
//import "./comprovantebb.css";
import ComprovantesBB from "../ComprovantesBB/ComprovantesBB";
import ComprovantesBBTable from "../ComprovantesBB/ComprovantesBBTable";
import SimpleReactFileUpload from "../Upload/SimpleReactFileUpload";

export default function ComprovanteBBHome(props) {
  const [selected, setSelected] = useState("");
  const [compr, setCompr] = useState("");
  const [uploadClick, setUploadClick] = useState(false);

  const componentRef = useRef();

  const options = [{ value: "bbpj", label: "BBPJ", fixed: true }];

  function getSelectedValue(selectedValue) {
    setSelected(selectedValue.value);
  }

  function uploadButtonHandle(clicked) {
    setUploadClick(clicked);
  }

  return (
    <div className="homeBody">
      <h1 className="homeHeader">Comprovantes BB</h1>
      <Select
        options={options}
        onChange={getSelectedValue}
        className="selectComprType"
        placeholder="Clique/Digite o tipo do comprovante"
        className="select"
      />
      <SimpleReactFileUpload
        passChildData={setCompr}
        comprType={selected}
        onButtonClick={uploadButtonHandle}
        className="upload"
      />
      {uploadClick && (
        <div className="printArea">
          <ComprovantesBBTable compr={compr} ref={componentRef} />
        </div>
      )}
    </div>
  );
}

//<ReactToPrint
//trigger={() => (
//<button className="printButton">Imprimir Comprovantes</button>
//)}
//content={() => componentRef.current}
//copyStyles={false}
///>
