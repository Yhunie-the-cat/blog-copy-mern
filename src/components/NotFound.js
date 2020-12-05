import React from "react";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  let history = useHistory();

  return (
    <div id="not-found-page">
      <h1>Page not found!</h1>
      <button onClick={() => history.goBack()}>back</button>
    </div>
  );
}
