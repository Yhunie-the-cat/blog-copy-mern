import React from "react";
import { useHistory } from "react-router-dom";
import "./../PageNotFound/style.scss";

export default function PageNotFoundPage() {
   let history = useHistory();

   return (
      <section id="not-found-page">
         <h1>Page not found!</h1>
         <button onClick={() => history.goBack()}>back</button>
      </section>
   );
}
