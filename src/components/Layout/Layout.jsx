import react from "react";
import "./layout.module.css";

export default function Layout(props) {
  return <div className="container">{props.children}</div>;
}
