import React, { ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Typed from "react-typed";
import { Logos } from "./components/Logos";
import { getCurrentAge } from "../../function/getCurrentAge";
import { dispatchCustomEvent, openUrlInNewTab } from "@milkscout/react";
import { REDICE_EVENT_NAME } from "../../customEvents";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MILKSOCUT_IMAGE_URL, MILKSOCUT_URL } from "../../variables";
import { PageLayout } from "../../components/layout/PageLayout";

const useStyle = makeStyles({
  root: {
    margin: -25,
    backgroundColor: "#f3ebe3",
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
  descriptionShort: {
    margin: "auto",
    marginTop: 30,
    textAlign: "center",
    maxWidth: 520,
    fontSize: 18,
    lineHeight: "25.6px",
  },
  fullStack: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 36,
  },
  technologyHeader: {
    fontSize: 18,
    textAlign: "center",
  },
  technology: {
    marginTop: 20,
    maxWidth: 600,
    margin: "auto",
  },
  coFounder: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  milkScoutImg: {
    maxWidth: 350,
    width: "100%",
    padding: 16,
    cursor: "pointer",
  },
  projectWrapper: {
    marginTop: 20,
    textAlign: "center",
  },
  projectHeader: {
    fontWeight: "bold",
  },
});

export const MainPage = (): ReactElement => {
  const classes = useStyle();
  return (
    <PageLayout>
      <div>
        <div className={classes.descriptionShort}>
          {"Ich bin " +
            getCurrentAge(18, 5, 1990) +
            " Jahre alt und habe an der Hochschule für angewandte Wissenschaften Landshut meinen "}
          <i>Master in Informatik</i>
          {" gemacht."}
        </div>
        <div className={classes.projectWrapper}>
          <div className={classes.projectHeader}>Einige Projekte</div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://market.milkscout.eu"}
            >
              MilkScout Markplatz (react, aws)
            </a>
          </div>
          <div>
            <a target="_blank" rel="noreferrer" href={"https://sigma-bau.de"}>
              SIGΣA plan + bau (springtype, js)
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://github.com/springtype-org"}
            >
              SpringType (Frontend Framework, ts)
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://mansi1.github.io/mdi-react-icons/mui"}
            >
              material-ui-extra/icons (react, material-ui v4/ v5)
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://mansi1.github.io/material-ui-v5-starter/"}
            >
              material-ui v5 starter
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.npmjs.com/package/ng-fetch"}
            >
              ngFetch (nodejs, js)
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://mansi1.github.io/minesweeper/"}
            >
              Minesweeper
            </a>
          </div>
        </div>
        <div className={classes.fullStack}>
          <Typed
            strings={["Ich bin <b>Full-Stack Entwickler</b>"]}
            typeSpeed={40}
            backDelay={10000}
            loop
          />
        </div>

        <div className={classes.technologyHeader}>
          30 zufällige Technologien, Frameworks und Tools mit den ich bereits
          gearbeitet habe:
        </div>
        <div className={classes.technology}>
          <Logos />
        </div>
        <div style={{ textAlign: "center", marginTop: 25 }}>
          <Button onClick={() => dispatchCustomEvent(REDICE_EVENT_NAME)}>
            Erneut Würfeln
          </Button>
        </div>
        <div className={classes.coFounder}>
          <div>
            <b>
              <i>Co-Founder</i>
            </b>{" "}
            und{" "}
            <b>
              <i>Frontend-Engineer</i>
            </b>{" "}
            bei
          </div>
          <LazyLoadImage
            src={MILKSOCUT_IMAGE_URL}
            effect="blur"
            loading={"lazy"}
            className={classes.milkScoutImg}
            onClick={() => openUrlInNewTab(MILKSOCUT_URL)}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default MainPage;
