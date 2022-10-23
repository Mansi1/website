import React, { ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../routes";
import { openUrlInNewTab } from "@milkscout/react";
import stalkMeOnGitHub from "../../assets/img/stalkMeOnGithub.svg";
import profileImage from "../../assets/img/profile.jpg";
import { GITHUB_URL_PROFILE } from "../../variables";

const useStyle = makeStyles(({ palette }) => ({
  main: { cursor: "pointer" },
  rootLayout: {
    backgroundColor: palette.primary.main,
    height: 300,
  },
  imageWrapper: {
    textAlign: "center",
  },
  image: {
    maxWidth: 300,
    borderRadius: 200,
    width: "100%",
    border: "10px solid #fff",
    margin: "-190px auto 0",
  },
  headline: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 300,
    letterSpacing: "4px",
    fontSize: "40px",
  },
  subHeadline: {
    fontWeight: 600,
  },
  imgGithub: {
    height: 200,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 1,
    cursor: "pointer",
  },
}));
export const Main = (): ReactElement => {
  const navigator = useNavigate();
  const classes = useStyle();

  return (
    <>
      <img
        src={stalkMeOnGitHub}
        className={classes.imgGithub}
        onClick={() => openUrlInNewTab(GITHUB_URL_PROFILE)}
        alt={"Stalk me on GitHub logo"}
      />
      <div onClick={() => navigator(MAIN_ROUTE)} className={classes.main}>
        <div className={classes.rootLayout}></div>
        <div className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={profileImage}
            alt={"Its me Michael Mannseicher"}
          />
        </div>
        <div className={classes.headline}>
          <div>Michael</div>
          <div className={classes.subHeadline}>Mannseicher</div>
        </div>
      </div>
    </>
  );
};
