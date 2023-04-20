import "./Footer.scss";
import { ReactComponent as MainLogo } from "../Header/MainLogo.svg";
import { ReactComponent as PhoneIcon } from "./PhoneIcon.svg";
import { ReactComponent as FoundIcon } from "./FoundIcon.svg";

const FooterApp = () => {
  return (
    <footer>
      <div className="FooterItems">
        <div className="FooterLogo">
          <MainLogo className="FooterLogoSVG" />
        </div>
        <div className="FooterFound">
          <h6 className="FoundText">Телефон</h6>
          <div className="FoundWrap">
            <PhoneIcon className="FooterIcon" />
            <h6 className="FoundOtherText">+7 (900) 900-90-90</h6>
          </div>
        </div>
        <div className="FooterFound">
          <h6 className="FoundText">Где мы находимся</h6>
          <div className="FoundWrap">
            <FoundIcon className="FooterIcon" />
            <h6 className="FoundOtherText">
              г. Ярославль, ул. Промышленная, д. 1, стр. 6, офис 304/2
            </h6>
          </div>
        </div>
      </div>
      <div className="FooterLine"></div>
      <div className="FooterEnd">
        <h6 className="FooterOtherText ProfITText">© 2014-2022 PROF IT</h6>
        <h6 className="FooterOtherText PrivacyText">Политика конфиденциальности</h6>
      </div>
    </footer>
  );
};
export default FooterApp;
