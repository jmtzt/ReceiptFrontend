import React, { useState } from "react";
import "./chequelist.css";

class ChequeList extends React.Component {
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
      <div className="cheques">
        {this.mapObject(this.props.compr, (keyExt, value) => {
          return (
            <>
              <div key={keyExt} className="outsideDiv">
                {this.mapObject(value, (key, value2) => {
                  return (
                    <>
                      {key === "Valor" && (
                        <p className="chequeValorNum">
                          {value2.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                          *****
                        </p>
                      )}

                      {key === "valorExtenso" && (
                        <p className="chequeValor">*****{value2}*****</p>
                      )}

                      {key === "nome" && (
                        <p className="chequeNome">
                          **{value2.toUpperCase()}*****
                        </p>
                      )}

                      {key === "dia" && <p className="chequeDia">{value2}</p>}

                      {key === "mes" && <p className="chequeMes">{value2}</p>}

                      {key === "ano" && <p className="chequeAno">{value2}</p>}
                    </>
                  );
                })}
              </div>
              {(parseInt(keyExt) + 1) % 4 === 0 && (
                <div className="break"></div>
              )}{" "}
            </>
          );
        })}
      </div>
    );
  }
}

export default ChequeList;

//<p class="chequeValorNum">
//<%= cheques[i].Valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); %>***</p>
//<p class="chequeValor">******<%= cheques[i].valorExtenso %>******</p>
//<p class="chequeNome"><%= cheques[i].nome.toUpperCase() %>****</p>
//<p class="chequeDia"><%= cheques[i].dia %></p>
//<p class="chequeMes"><%= cheques[i].mes %></p>
//<p class="chequeAno"><%= cheques[i].ano %></p>
