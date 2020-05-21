import React, { useRef, useState } from "react";
import Select from "react-select";
import ReactToPrint from "react-to-print";
import "./chequehome.css";
import ChequeList from "../ChequeList/ChequeList.jsx";
import SimpleReactFileUpload from "../Upload/SimpleReactFileUpload";

export default function ChequeHome(props) {
  const [selected, setSelected] = useState("");
  const [compr, setCompr] = useState("");
  const [uploadClick, setUploadClick] = useState(false);

  const componentRef = useRef();

  const options = [
    { value: "chequeBradesco", label: "ChequeBradesco", fixed: true },
  ];

  function getSelectedValue(selectedValue) {
    setSelected(selectedValue.value);
  }

  function uploadButtonHandle(clicked) {
    setUploadClick(clicked);
  }

  return (
    <div className="homeBody">
      <h1 className="homeHeader">Cheque</h1>
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
          <ReactToPrint
            trigger={() => (
              <button className="printButton">Imprimir Comprovantes</button>
            )}
            content={() => componentRef.current}
            copyStyles={false}
            pageStyle="@media print{@page{position:absolute!important;size:175mm 305mm;margin:0}.cheques{margin:0}.outsideDiv{display:inline-block;position:relative;box-shadow:none;transition:none;height:75.8mm;width:100%;font-size:small;border-bottom:.8px solid transparent;margin:0}.chequeValorNum{position:absolute;left:130mm;top:5mm}.chequeValor{position:absolute;line-height:6mm;left:25mm;top:15mm;width:70%}.chequeNome{position:absolute;left:10mm;top:27mm}.chequeDia{position:absolute;left:95mm;top:35mm}.chequeMes{position:absolute;left:115mm;top:35mm}.chequeAno{position:absolute;left:140mm;top:35mm}.break{page-break-after:always;display:none}}"
          />
          <ChequeList compr={compr} ref={componentRef} />
        </div>
      )}
    </div>
  );
}
