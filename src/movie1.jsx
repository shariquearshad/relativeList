import React from "react";
import "./styles.css";

export default function Movie1() {
  return (
    <>
      <ol key={"relativeList"}>
        <li key={"relativeListItem1"}>relative1</li>
        <li key={"relativeListItem2"}>relative2</li>
        <li key={"relativeListItem3"}>relative3</li>
      </ol>
    </>
  );
}
