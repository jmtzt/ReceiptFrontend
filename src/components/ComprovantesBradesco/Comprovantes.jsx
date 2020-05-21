import React, { useState } from "react";
import "./comprovantes.css";

class Comprovantes extends React.Component {
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
    return (
      <div className="comprovantes">
        {this.mapObject(this.props.compr, (keyExt, value) => {
          return (
            <>
              <div key={keyExt} className="outsideDiv">
                {this.mapObject(value, (key, value) => {
                  return (
                    <p key={key} className="insideDiv">
                      {key + ": " + value}
                    </p>
                  );
                })}
              </div>
              {(keyExt + 1) % 3 === 0 && <div className="break"></div>}
            </>
          );
        })}
      </div>
    );
  }
}

export default Comprovantes;
