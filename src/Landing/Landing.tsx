import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import Classes from "./Landing.module.scss";

const LandingPage: FC = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (token) {
    history.push("/dashboard");
  }

  return (
    <div className={Classes.hero}>
      <div className={Classes.central}>
        <div className={Classes.top}>
          <h1 className={Classes["landing-page-heading"]}>Bookable</h1>
        </div>

        <div className={Classes.bottom}>
          <div onClick={() => history.push("/login")} className={Classes.split}>
            LOG IN
          </div>
          <div
            onClick={() => history.push("/signup")}
            className={Classes.split}
          >
            SIGN UP
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
