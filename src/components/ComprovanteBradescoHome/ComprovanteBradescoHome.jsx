import React, { useRef, useState } from "react";
import Select from "react-select";
import ReactToPrint from "react-to-print";
import "../ComprovanteBradescoHome/comprovantehome.module.css";
import Comprovantes from "../ComprovantesBradesco/Comprovantes";
import pageStyles from "../pageStyle.js";
import SimpleReactFileUpload from "../Upload/SimpleReactFileUpload";

export default function ComprovanteBradescoHome(props) {
  const [selected, setSelected] = useState("");
  const [compr, setCompr] = useState("");
  const [uploadClick, setUploadClick] = useState(false);

  const componentRef = useRef();

  const options = [
    { value: "titulos", label: "TITULOS", fixed: true },
    { value: "ted", label: "TED" },
    { value: "tcb", label: "TCB" },
    { value: "telefone", label: "TELEFONE" },
    { value: "daems", label: "DAEMS" },
    { value: "fgts", label: "FGTS" },
    { value: "darf", label: "DARF" },
    { value: "gps", label: "GPS" },
  ];

  function getSelectedValue(selectedValue) {
    setSelected(selectedValue.value);
  }

  function uploadButtonHandle(clicked) {
    setUploadClick(clicked);
  }

  return (
    <div className="homeBody">
      <h1 className="homeHeader">Comprovantes Bradesco</h1>
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
            pageStyle="@media print{@page{position:absolute!important;width:297mm;height:210mm;margin:10mm 0 9mm 8mm!important}.comprovantes{display:inline-block;margin:0}.outsideDiv{display:inline-block;position:relative;box-shadow:none;transition:none;max-width:63mm;width:63mm;height:47.2mm;margin-top:0;margin-left:0;margin-bottom:0!important;margin-right:2mm}.insideDiv{position:relative;width:62mm;max-width:62mm;float:left;overflow-wrap:break-word;margin-left:1mm;margin-block-start:0!important;margin-block-end:0!important;margin-inline-end:0;padding:0;font-size:7.4pt}}.break{display:none}"
          />
          <Comprovantes compr={compr} ref={componentRef} />
        </div>
      )}
    </div>
  );
}
