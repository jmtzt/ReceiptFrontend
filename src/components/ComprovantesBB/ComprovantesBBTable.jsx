import React, { useState, Component } from "react";
import "./comprovantesbb.css";

export default class ComprovantesBBTable extends Component {
  constructor(props) {
    super(props);
    this.mapObject = this.mapObject.bind(this);
  }

  mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
  }

  render() {
    let rows = [];
    for (var i = 0; i < this.props.compr.length; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (var idx = 0; idx < 3; idx++) {
        let cellID = `cell${i}-${idx}`;
        cell.push(
          <td key={cellID} id={cellID} className="data">
            {this.mapObject(this.props.compr[i], (key, value) => {
              return (
                <p className="text" key={key}>
                  {value}
                </p>
              );
            })}
          </td>
        );
      }
      rows.push(
        <tr key={i} id={rowID} className="row2">
          {cell}
        </tr>
      );
    }
    return (
      <div className="container">
        <div className="row2">
          <div className="col s12 board">
            <table id="simple-board">
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
//export default function ComprovantesBBTable(props) {
//function mapObject(object, callback) {
//return Object.keys(object).map(function (key) {
//return callback(key, object[key]);
//});
//}

//return (
//{
//let rows = [];
//for (var i = 0; i < length(props.compr); i++){
//let rowID = `row${i}`
//let cell = []
//for (var idx = 0; idx < length(props.compr); idx++){
//let cellID = `cell${i}-${idx}`
//cell.push(<td key={cellID} id={cellID}></td>)
//}
//rows.push(<tr key={i} id={rowID}>{cell}</tr>)
//}
//<h1>Hello</h1>

//);
//}

//<div className="comprovantest">
//{mapObject(props.compr, (keyExt, value) => {
//return (
//<>
//<div key={keyExt} className="outsideDivt">
//{mapObject(value, (key, value) => {
//return (
//<p key={key} className="insideDivt">
//{value}
//</p>
//);
//})}
//</div>
//{(keyExt + 1) % 3 === 0 && <div className="break"></div>}
//</>
//);
//})}
//</div>
