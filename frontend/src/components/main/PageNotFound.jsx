import React from "react";
import PageNotFoundCSS from "../../styles/PageNotFound.module.css";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const PageNotFound = () => {
  return (
    <>
      <div
        className={`${PageNotFoundCSS.mainContainer} ${PageNotFoundCSS.mutedText}`}
      >
        <div className={`${PageNotFoundCSS.text404}`}>404</div>
        <div className={`${PageNotFoundCSS.mediumText}`}>Page not found.</div>
        <div>We're sorry, the page you requested could not be found.</div>
        <br />
        <div>
          <Link reloadDocument to="/">
            <Button>Go to homepage</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
