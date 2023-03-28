import './Body.scss'
import { ReactComponent as FirstPic } from './FirstPic.svg'
import { ReactComponent as SecondPic } from './SecondPic.svg'
import { ReactComponent as BrowserPic } from './Browser.svg'
import { ReactComponent as PhonePic } from './Phone.svg'
import { ReactComponent as MonitorPic } from './Monitor.svg'
import { ReactComponent as GearPic } from './Gear.svg'
import OrderProjectBtn from '../Buttons/OrderProjectBtn'

 const BodyApp = () => {
  return (
    <div className='Body'>
      <div className='FirstStep'>
           <h1 className='MainText'>Prof<mark>it</mark> Разработчик программного обеспечения, веб-сервисов, мобильных приложений</h1>
          <div className='FirstSection'>
             <div className='ProjectBtn'>
                 <OrderProjectBtn/>
              </div>
             <div className='PicWrap'>
                <FirstPic className='FirstPic'/>
             </div>
         </div>
      </div>
      <div className='SecondStep'>
        <div className='PicWrapSecond'>
          <SecondPic className='SecondPic'/>
        </div>
        <div className='SecondStepTextWrap'>
          <h3 className='MainText2'>Разрабатываем  сложные интеграционные проекты</h3>
            <div className='TextWrapH10'>
              <h10 className='Text1'>Наш опыт — 8 лет разработки для ведущих российских компаний, в том числе в банковском секторе, ритейле, промышленности, фармацевтической отрасли, транспорте и логистике.</h10>
              <h10 className='Text1'>Мы вникаем в бизнес-процессы заказчика, что позволяет покрыть весь цикл реализации: от бизнес-аналитики до разработки и внедрения прикладного ИТ-решения.</h10>
              <h10 className='Text1'>Обладая, экспертизой и большим опытом, мы предложим оптимальное технические решения для вашей компании.</h10>
            </div>
        </div>
      </div>
      <div className='ThirdStep'>
        <div className='ThirdWrapItem'>
          <h3 className='ThirdMainText'>50+</h3>
          <div className='RedLine'></div>
          <h4 className='ThirdOtherText'>Сотрудников в нашей команде</h4>
        </div>
        <div className='ThirdWrapItem'>
          <h3 className='ThirdMainText'>С 2014 года</h3>
          <div className='RedLine'></div>
          <h4 className='ThirdOtherText'>Мы помогаем бизнесу создавать it-сервисы</h4>
        </div>
        <div className='ThirdWrapItem'>
          <h3 className='ThirdMainText'>6 юнитов</h3>
          <div className='RedLine'></div>
          <h4 className='ThirdOtherText'>В компании занимаются разными направлениями</h4>
        </div>
        <div className='ThirdWrapItem'>
          <h3 className='ThirdMainText'>40+</h3>
          <div className='RedLine'></div>
          <h4 className='ThirdOtherText'>Реализованных проектов</h4>
        </div>
      </div>
      <div className='FourthStep'>
        <div className='FourthWrapItem'>
          <div className='FourthPic'>
            <BrowserPic/>
          </div>
          <div className='FourthWrapText'>
            <h3 className='FourthMainText'>Веб-сервисы</h3>
            <h4 className='FourthOtherText'>Реализуем функционально сложные и высоконагруженные веб-сервисы на актуальном стеке технологий.</h4>
          </div>
        </div>
        <div className='FourthWrapItem'>
          <div className='FourthPic'>
            <PhonePic/>
          </div>
          <div className='FourthWrapText'>
            <h3 className='FourthMainText'>Мобильные приложения</h3>
            <h4 className='FourthOtherText'>Реализуем функционально сложные мобильные приложения любых направлений. В числе наших проектов:  web-сервис для цифрового банка, решение для клинических исследований лекарственных препаратов, разработка ERP-системы и др.</h4>
          </div>
        </div>
        <div className='FourthWrapItem'>
          <div className='FourthPic'>
            <MonitorPic/>
          </div>
          <div className='FourthWrapText'>
            <h3 className='FourthMainText'>Автоматизация бизнес-процессов</h3>
            <h4 className='FourthOtherText'>Мы легко расширяем команду при возрастающих спросах, делаем системы быстро и без лишней бюрократии. Наши менеджеры проектов умеют работать с большим количеством заинтересованных лиц со стороны заказчика и обрабатывать большие объемы требований.</h4>
          </div>
        </div>
        <div className='FourthWrapItem'>
          <div className='FourthPic'>
            <GearPic/>
          </div>
          <div className='FourthWrapText'>
            <h3 className='FourthMainText'>DevOps</h3>
            <h4 className='FourthOtherText'>Создаем, поддерживаем и документируем Вашу инфраструктуру с помощью самых современных технологий.:</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BodyApp;