import "./Body.scss";
import { ReactComponent as FirstPic } from "./MainSVG/FirstPic.svg";
import { ReactComponent as SecondPic } from "./MainSVG/SecondPic.svg";
import { ReactComponent as BrowserPic } from "./MainSVG/Browser.svg";
import { ReactComponent as PhonePic } from "./MainSVG/Phone.svg";
import { ReactComponent as MonitorPic } from "./MainSVG/Monitor.svg";
import { ReactComponent as GearPic } from "./MainSVG/Gear.svg";
import OrderProjectBtn from "../Buttons/OrderProjectBtn";

import { ReactComponent as Ansible } from "./TechnologySVG/Ansible.svg";
import { ReactComponent as Apollo } from "./TechnologySVG/Apollo.svg";
import { ReactComponent as Dagger } from "./TechnologySVG/Dagger.svg";
import { ReactComponent as Docker } from "./TechnologySVG/Docker.svg";
import { ReactComponent as Go } from "./TechnologySVG/Go.svg";
import { ReactComponent as Gradle } from "./TechnologySVG/Gradle.svg";
import { ReactComponent as Jetpack } from "./TechnologySVG/Jetpack.svg";
import { ReactComponent as Kotlin } from "./TechnologySVG/Kotlin.svg";
import { ReactComponent as Kubernetes } from "./TechnologySVG/Kubernetes.svg";
import { ReactComponent as Mobx } from "./TechnologySVG/Mobx.svg";
import { ReactComponent as Mongo } from "./TechnologySVG/Mongo.svg";
import { ReactComponent as Mysql } from "./TechnologySVG/Mysql.svg";
import { ReactComponent as Postgres } from "./TechnologySVG/Postgres.svg";
import { ReactComponent as Prometheus } from "./TechnologySVG/Prometheus.svg";
import { ReactComponent as Python } from "./TechnologySVG/Python.svg";
import { ReactComponent as Reactpic } from "./TechnologySVG/React.svg";
import { ReactComponent as Realmdb } from "./TechnologySVG/Realmdb.svg";
import { ReactComponent as Redux } from "./TechnologySVG/Redux.svg";
import { ReactComponent as Rxjava } from "./TechnologySVG/Rxjava.svg";
import { ReactComponent as Rxswift } from "./TechnologySVG/Rxswift.svg";
import { ReactComponent as Salt } from "./TechnologySVG/Salt.svg";
import { ReactComponent as Swift } from "./TechnologySVG/Swift.svg";
import { ReactComponent as Swnject } from "./TechnologySVG/Swnject.svg";
import { ReactComponent as Tarantool } from "./TechnologySVG/Tarantool.svg";
import { ReactComponent as Terraform } from "./TechnologySVG/Terraform.svg";
import { ReactComponent as Typescript } from "./TechnologySVG/Typescript.svg";

const BodyApp = () => {
  return (
    <div className="Body">
      <div className="FirstStep">
        <h1 className="MainText">
          Prof<mark>it</mark> Разработчик программного обеспечения,
          веб-сервисов, мобильных приложений
        </h1>
        <div className="FirstSection">
          <div className="ProjectBtn">
            <OrderProjectBtn />
          </div>
          <div className="PicWrap">
            <FirstPic className="FirstPic" />
          </div>
        </div>
      </div>
      <div className="SecondStep">
        <div className="PicWrapSecond">
          <SecondPic className="SecondPic" />
        </div>
        <div className="SecondStepTextWrap">
          <h3 className="MainText2">
            Разрабатываем сложные интеграционные проекты
          </h3>
          <div className="TextWrapH10">
            <h10 className="Text1">
              Наш опыт — 8 лет разработки для ведущих российских компаний, в том
              числе в банковском секторе, ритейле, промышленности,
              фармацевтической отрасли, транспорте и логистике.
            </h10>
            <h10 className="Text1">
              Мы вникаем в бизнес-процессы заказчика, что позволяет покрыть весь
              цикл реализации: от бизнес-аналитики до разработки и внедрения
              прикладного ИТ-решения.
            </h10>
            <h10 className="Text1">
              Обладая, экспертизой и большим опытом, мы предложим оптимальное
              технические решения для вашей компании.
            </h10>
          </div>
        </div>
      </div>
      <div className="ThirdStep">
        <div className="ThirdWrapItem">
          <h3 className="ThirdMainText">50+</h3>
          <div className="RedLine"></div>
          <h4 className="ThirdOtherText">Сотрудников в нашей команде</h4>
        </div>
        <div className="ThirdWrapItem">
          <h3 className="ThirdMainText">С 2014 года</h3>
          <div className="RedLine"></div>
          <h4 className="ThirdOtherText">
            Мы помогаем бизнесу создавать it-сервисы
          </h4>
        </div>
        <div className="ThirdWrapItem">
          <h3 className="ThirdMainText">6 юнитов</h3>
          <div className="RedLine"></div>
          <h4 className="ThirdOtherText">
            В компании занимаются разными направлениями
          </h4>
        </div>
        <div className="ThirdWrapItem">
          <h3 className="ThirdMainText">40+</h3>
          <div className="RedLine"></div>
          <h4 className="ThirdOtherText">Реализованных проектов</h4>
        </div>
      </div>
      <div className="FourthStep">
        <div className="FourthWrapItem">
          <div className="FourthPic">
            <BrowserPic className="FourthStepPic Browser" />
          </div>
          <div className="FourthWrapText">
            <h3 className="FourthMainText">Веб-сервисы</h3>
            <h4 className="FourthOtherText">
              Реализуем функционально сложные и высоконагруженные веб-сервисы на
              актуальном стеке технологий.
            </h4>
          </div>
        </div>
        <div className="FourthWrapItem reverse">
          <div className="FourthPic reverse">
            <PhonePic className="FourthStepPic" />
          </div>
          <div className="FourthWrapText">
            <h3 className="FourthMainText">Мобильные приложения</h3>
            <h4 className="FourthOtherText">
              Реализуем функционально сложные мобильные приложения любых
              направлений. В числе наших проектов: web-сервис для цифрового
              банка, решение для клинических исследований лекарственных
              препаратов, разработка ERP-системы и др.
            </h4>
          </div>
        </div>
        <div className="FourthWrapItem">
          <div className="FourthPic">
            <MonitorPic className="FourthStepPic" />
          </div>
          <div className="FourthWrapText">
            <h3 className="FourthMainText">Автоматизация бизнес-процессов</h3>
            <h4 className="FourthOtherText">
              Мы легко расширяем команду при возрастающих спросах, делаем
              системы быстро и без лишней бюрократии. Наши менеджеры проектов
              умеют работать с большим количеством заинтересованных лиц
              со стороны заказчика и обрабатывать большие объемы требований.
            </h4>
          </div>
        </div>
        <div className="FourthWrapItem reverse">
          <div className="FourthPic reverse">
            <GearPic className="FourthStepPic" />
          </div>
          <div className="FourthWrapText">
            <h3 className="FourthMainText">DevOps</h3>
            <h4 className="FourthOtherText">
              Создаем, поддерживаем и документируем Вашу инфраструктуру с
              помощью самых современных технологий.
            </h4>
          </div>
        </div>
      </div>
      <div className="FifthStep">
        <div className="FifthStepWrap">
          <div className="FifthWrapText">
            <h3 className="FifthMainText">Технологии</h3>
            <h4 className="FifthOtherText">
              Мы используем только актуальные технологии, позволяющие бизнесу
              быть на острие it-прогресса
            </h4>
          </div>
          <div className="Technology">
            <div className="TechnologyWrap">
              <h5 className="TechnologyMainText">Devops</h5>
              <div className="TechnologyItem">
                <Docker className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Docker</h6>
              </div>
              <div className="TechnologyItem">
                <Kubernetes className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Kubernetes</h6>
              </div>
              <div className="TechnologyItem">
                <Salt className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Salt</h6>
              </div>
              <div className="TechnologyItem">
                <Terraform className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Terraform</h6>
              </div>
              <div className="TechnologyItem">
                <Prometheus className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Prometheus</h6>
              </div>
              <div className="TechnologyItem">
                <Ansible className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Ansible</h6>
              </div>
            </div>
            <div className="TechnologyWrap">
              <h5 className="TechnologyMainText">Back-End</h5>
              <div className="TechnologyItem">
                <Python className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Python</h6>
              </div>
              <div className="TechnologyItem">
                <Go className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Go</h6>
              </div>
              <div className="TechnologyItem">
                <Postgres className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Postgres</h6>
              </div>
              <div className="TechnologyItem">
                <Mongo className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Mongo</h6>
              </div>
              <div className="TechnologyItem">
                <Mysql className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Mysql</h6>
              </div>
              <div className="TechnologyItem">
                <Tarantool className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Tarantool</h6>
              </div>
            </div>
            <div className="TechnologyWrap">
              <h5 className="TechnologyMainText">Front-End</h5>
              <div className="TechnologyItem">
                <Reactpic className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">React</h6>
              </div>
              <div className="TechnologyItem">
                <Typescript className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Typescript</h6>
              </div>
              <div className="TechnologyItem">
                <Redux className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Redux</h6>
              </div>
              <div className="TechnologyItem">
                <Mobx className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Mobx</h6>
              </div>
              <div className="TechnologyItem">
                <Apollo className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Apollo</h6>
              </div>
            </div>
            <div className="TechnologyWrap">
              <h5 className="TechnologyMainText">Android</h5>
              <div className="TechnologyItem">
                <Kotlin className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Kotlin</h6>
              </div>
              <div className="TechnologyItem">
                <Rxjava className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Rxjava</h6>
              </div>
              <div className="TechnologyItem">
                <Dagger className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Dagger</h6>
              </div>
              <div className="TechnologyItem">
                <Gradle className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Gradle</h6>
              </div>
              <div className="TechnologyItem">
                <Jetpack className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Jetpack</h6>
              </div>
            </div>
            <div className="TechnologyWrap">
              <h5 className="TechnologyMainText">Ios</h5>
              <div className="TechnologyItem">
                <Swift className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Swift</h6>
              </div>
              <div className="TechnologyItem">
                <Rxswift className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Rxswift</h6>
              </div>
              <div className="TechnologyItem">
                <Swnject className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Swnject</h6>
              </div>
              <div className="TechnologyItem">
                <Realmdb className="TechnologyIcon" />
                <h6 className="TechnologyOtherText">Realmdb</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BodyApp;
