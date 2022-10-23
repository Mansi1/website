import React, { ReactElement } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import addressAndNameSrc from "../assets/img/name+address.png";
import contactSrc from "../assets/img/contact.png";

export const ImprintPage = (): ReactElement => {
  return (
    <PageLayout>
      <div style={{ maxWidth: 360, textAlign: "center", margin: "auto" }}>
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <img loading={"lazy"} src={addressAndNameSrc} alt={"some data"} />

        <h2>Kontakt</h2>
        <img loading={"lazy"} src={contactSrc} alt={"some data"} />

        <p>
          Quelle:
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </div>
    </PageLayout>
  );
};

export default ImprintPage;
