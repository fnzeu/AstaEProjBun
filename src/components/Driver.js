import React from "react";
import {SiMercedes, SiFerrari, SiHonda, SiRenault} from "react-icons/si";

import LH from "../Layout/LH.jpg";
import VB from "../Layout/VBB.jpg";
import MV from "../Layout/MVV.jpg";
import SP from "../Layout/SP.jpg";
import AG from "../Layout/AG.jpg";
import KR from "../Layout/KR.jpg";
import DR from "../Layout/DR.jpg";
import LN from "../Layout/LNN.jpg";
import GR from "../Layout/GR.jpg";
import NL from "../Layout/NL.jpg";
import NM from "../Layout/NM.jpg";
import MS from "../Layout/MS.jpg";
import CL from "../Layout/CL.jpg";
import CS from "../Layout/CS.jpg";
import SV from "../Layout/SV.jpg";
import LS from "../Layout/LS.jpg";
import RK from "../Layout/RKK.jpg";
import PG from "../Layout/PG.jpg";
import YT from "../Layout/YT.jpg";
import EO from "../Layout/EO.jpg";
import FA from "../Layout/FA.jpg";

import styles from "./DriverCard.module.css";

function Driver(props) {
  return (
    <section className={styles.driverCard}>
      {props.givenName === "Lewis" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={LH} alt="" />
          <div className={styles.textMercedes}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textMercedes}>{props.number}</div>
          <div className={styles.textMercedes}>{props.nationality}</div>
          <SiMercedes className={styles.textMercedes} />
        </div>
      ) : props.givenName === "Max" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={MV} alt="" />
          <div className={styles.textRedBull}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textRedBull}>{props.number}</div>
          <div className={styles.textRedBull}>{props.nationality}</div>
          <SiHonda className={styles.textRedBull} />
        </div>
      ) : props.givenName === "Carlos" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={CS} alt="" />
          <div className={styles.textFerrari}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textFerrari}>{props.number}</div>
          <div className={styles.textFerrari}>{props.nationality}</div>
          <SiFerrari className={styles.textFerrari} />
        </div>
      ) : props.givenName === "Fernando" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={FA} alt="" />
          <div className={styles.textAlpine}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAlpine}>{props.number}</div>
          <div className={styles.textAlpine}>{props.nationality}</div>
          <SiRenault className={styles.textAlpine} />
        </div>
      ) : props.givenName === "Valtteri" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={VB} alt="" />
          <div className={styles.textMercedes}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textMercedes}>{props.number}</div>
          <div className={styles.textMercedes}>{props.nationality}</div>
          <SiMercedes className={styles.textMercedes} />
        </div>
      ) : props.givenName === "Sergio" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={SP} alt="" />
          <div className={styles.textRedBull}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textRedBull}>{props.number}</div>
          <div className={styles.textRedBull}>{props.nationality}</div>
          <SiHonda className={styles.textRedBull} />
        </div>
      ) : props.givenName === "Charles" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={CL} alt="" />
          <div className={styles.textFerrari}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textFerrari}>{props.number}</div>
          <div className={styles.textFerrari}>{props.nationality}</div>
          <SiFerrari className={styles.textFerrari} />
        </div>
      ) : props.givenName === "Esteban" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={EO} alt="" />
          <div className={styles.textAlpine}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAlpine}>{props.number}</div>
          <div className={styles.textAlpine}>{props.nationality}</div>
          <SiRenault className={styles.textAlpine} />
        </div>
      ) : props.givenName === "Nikita" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={NM} alt="" />
          <div className={styles.textHaas}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textHaas}>{props.number}</div>
          <div className={styles.textHaas}>{props.nationality}</div>
          <SiFerrari className={styles.textHaas} />
        </div>
      ) : props.givenName === "Mick" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={MS} alt="" />
          <div className={styles.textHaas}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textHaas}>{props.number}</div>
          <div className={styles.textHaas}>{props.nationality}</div>
          <SiFerrari className={styles.textHaas} />
        </div>
      ) : props.givenName === "Sebastian" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={SV} alt="" />
          <div className={styles.textAstonMartin}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAstonMartin}>{props.number}</div>
          <div className={styles.textAstonMartin}>{props.nationality}</div>
          <SiMercedes className={styles.textAstonMartin} />
        </div>
      ) : props.givenName === "Lance" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={LS} alt="" />
          <div className={styles.textAstonMartin}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAstonMartin}>{props.number}</div>
          <div className={styles.textAstonMartin}>{props.nationality}</div>
          <SiMercedes className={styles.textAstonMartin} />
        </div>
      ) : props.givenName === "Yuki" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={YT} alt="" />
          <div className={styles.textAlphaTauri}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAlphaTauri}>{props.number}</div>
          <div className={styles.textAlphaTauri}>{props.nationality}</div>
          <SiHonda className={styles.textAlphaTauri} />
        </div>
      ) : props.givenName === "Pierre" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={PG} alt="" />
          <div className={styles.textAlphaTauri}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAlphaTauri}>{props.number}</div>
          <div className={styles.textAlphaTauri}>{props.nationality}</div>
          <SiHonda className={styles.textAlphaTauri} />
        </div>
      ) : props.givenName === "Daniel" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={DR} alt="" />
          <div className={styles.textMclaren}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textMclaren}>{props.number}</div>
          <div className={styles.textMclaren}>{props.nationality}</div>
          <SiMercedes className={styles.textMclaren} />
        </div>
      ) : props.givenName === "Lando" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={LN} alt="" />
          <div className={styles.textMclaren}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textMclaren}>{props.number}</div>
          <div className={styles.textMclaren}>{props.nationality}</div>
          <SiMercedes className={styles.textMclaren} />
        </div>
      ) : props.givenName === "Antonio" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={AG} alt="" />
          <div className={styles.textAlphaRomeo}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAlphaRomeo}>{props.number}</div>
          <div className={styles.textAlphaRomeo}>{props.nationality}</div>
          <SiFerrari className={styles.textAlphaRomeo} />
        </div>
      ) : props.givenName === "Kimi" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={KR} alt="" />
          <div className={styles.textAlphaRomeo}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAlphaRomeo}>{props.number}</div>
          <div className={styles.textAlphaRomeo}>{props.nationality}</div>
          <SiFerrari className={styles.textAlphaRomeo} />
        </div>
      ) : props.givenName === "Robert" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={RK} alt="" />
          <div className={styles.textAlphaRomeo}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textAlphaRomeo}>{props.number}</div>
          <div className={styles.textAlphaRomeo}>{props.nationality}</div>
          <SiFerrari className={styles.textAlphaRomeo} />
        </div>
      ) : props.givenName === "George" ? (
        <div className={styles.cntnr}>
          <img className={styles.img} src={GR} alt="" />
          <div className={styles.textWilliams}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textWilliams}>{props.number}</div>
          <div className={styles.textWilliams}>{props.nationality}</div>
          <SiMercedes className={styles.textWilliams} />
        </div>
      ) : (
        <div className={styles.cntnr}>
          <img className={styles.img} src={NL} alt="" />
          <div className={styles.textWilliams}>
            {props.givenName + " " + props.familyName}
          </div>
          <div className={styles.textWilliams}>{props.number}</div>
          <div className={styles.textWilliams}>{props.nationality}</div>
          <SiMercedes className={styles.textWilliams} />
        </div>
      )}
      <div>{props.children}</div>
    </section>
  );
}

export default Driver;
