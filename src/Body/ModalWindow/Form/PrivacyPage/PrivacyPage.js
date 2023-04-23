import React from "react";
import { ReactComponent as CloseBtn } from "./../../../../Buttons/CloseBtn.svg";
import "./PrivacyPage.scss";

const PrivacyPage = ({ active, closeModal }) => {
  if (!active) {
    return null;
  }
  return (
    <div className="ModalWindowPrivacy">
      <div className="CloseBtnWrap">
        <CloseBtn className="CloseBtn Privacy" onClick={closeModal} />
      </div>
      <div className="ModalContentPrivacy">
        <h3 className="PolicyMainText">
          Политика обработки персональных данных
        </h3>
        <h4 className="PolicyTopicText">Термины и принятые сокращения</h4>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">1.</h5>
          <h5 className="PolicyOtherText">
            Персональные данные (ПД) — любая информация, относящаяся прямо или
            косвенно к определенному или определяемому физическому лицу
            (субъекту ПД).
          </h5>
        </div>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">2.</h5>
          <h5 className="PolicyOtherText">
            Обработка персональных данных — любое действие (операция) или
            совокупность действий (операций), совершаемых с использованием
            средств автоматизации или без использования таких средств с
            персональными данными, включая сбор, запись, систематизацию,
            накопление, хранение, уточнение (обновление, изменение), извлечение,
            использование, передачу (распространение, предоставление, доступ),
            обезличивание, блокирование, удаление, уничтожение персональных
            данных.
          </h5>
        </div>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">3.</h5>
          <h5 className="PolicyOtherText">
            Неавтоматизированная обработка персональных данных — обработка
            персональных данных без помощи средств вычислительной техники.
          </h5>
        </div>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">4.</h5>
          <h5 className="PolicyOtherText">
            Персональные данные, сделанные общедоступными субъектом персональных
            данных — персональные данные, доступ неограниченному кругу лиц к
            которым предоставлен субъектом персональных данных, либо по его
            просьбе.
          </h5>
        </div>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">5.</h5>
          <h5 className="PolicyOtherText">
            Cookies — это часть данных, автоматически располагающаяся на жестком
            диске компьютера при каждом посещении веб-сайта. Таким образом,
            cookies — это уникальный идентификатор браузера для веб-сайта.
            Cookies дают возможность хранить информацию на сервере и помогают
            легче ориентироваться в веб-пространстве, а также позволяют
            осуществлять анализ сайта и оценку результатов. Большинство
            веб-браузеров разрешают использование cookies, однако можно изменить
            настройки для отказа от работы с cookie или отслеживания пути их
            рассылки. При этом некоторые ресурсы могут работать некорректно,
            если работа cookies в браузере будет запрещена.
          </h5>
        </div>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">6.</h5>
          <h5 className="PolicyOtherText">
            IP-адрес — уникальный сетевой адрес узла в компьютерной сети,
            построенной на основе стека протоколов TCP/IP.
          </h5>
        </div>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">7.</h5>
          <h5 className="PolicyOtherText">
            Пользователь — пользователь сети Интернет.
          </h5>
        </div>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">8.</h5>
          <h5 className="PolicyOtherText">
            Сайт — любой из сайтов, в том числе https://optimumdata. com,
            сервисов, служб, программ Profit.
          </h5>
        </div>
        <div className="ListPolicyOtherText">
          <h5 className="PolicyOtherText Number">9.</h5>
          <h5 className="PolicyOtherText">
            Profit — организация, самостоятельно или совместно с другими лицами
            организующая и (или) осуществляющая обработку персональных данных,
            а также определяющая цели обработки персональных данных, состав
            персональных данных, подлежащих обработке, действия (операции),
            совершаемые с персональными данными. Юридическое лицо (название
            по документации), юридический адрес: (действующий юридический
            адрес).
          </h5>
        </div>
        <h3 className="PolicyMainText">Официальное уведомление</h3>
        <h5 className="PolicyOtherText">
          Данное официальное уведомление размещено в дополнение к прочим
          официальным уведомлениям и заявлениям об ответственности, находящимся
          на интернет-сайте Profit, либо включенным в состав помещенных на этом
          сайте документов. Profit оставляет за собой право вносить любые
          изменения в данный текст без предварительного оповещения пользователей
          сайта.
        </h5>
        <h3 className="PolicyMainText">Общие положения</h3>
        <h5 className="PolicyOtherText">
          Настоящая Политика конфиденциальности (далее — Политика) составлена
          в соответствии с пунктом 2 статьи 18.1 Федерального закона
          «О персональных данных» № 152-ФЗ от 27 июля 2006 г., а также иными
          нормативно-правовыми актами Российской Федерации в области защиты
          и обработки персональных данных и действует в отношении всех
          персональных данных, которые Profit может получить от Пользователя
          во время использования им в сети Интернет Сайта. Profit обеспечивает
          защиту обрабатываемых персональных данных от несанкционированного
          доступа и разглашения, неправомерного использования или утраты
          в соответствии с требованиями Федерального закона от 27 июля 2006 г.
          № 152-ФЗ «О персональных данных».
        </h5>
        <h5 className="PolicyOtherText">
          Profit обязано опубликовать или иным образом обеспечить неограниченный
          доступ к настоящей Политике конфиденциальности в соответствии
          с ч. 2 ст. 18.1. ФЗ-152.
        </h5>
        <h3 className="PolicyMainText">Авторские права</h3>
        <h5 className="PolicyOtherText">
          Информация сайта Profit защищена законом об авторских правах. Profit
          предоставляет право посетителям сайта использовать опубликованные
          материалы в любых личных и некоммерческих целях. За исключением
          оговоренных ситуаций, воспроизведение (копирование) любых материалов
          сайта невозможно без прямого письменного разрешения со стороны Profit.
        </h5>
        <h3 className="PolicyMainText">Лицензионные права</h3>
        <h5 className="PolicyOtherText">
          Информация, опубликованная на сайте Profit, не может быть воспринята
          как предоставление лицензионных прав на интеллектуальную
          собственность, принадлежащую Profit, либо третьим сторонам.
        </h5>
        <h3 className="PolicyMainText">Торговые марки</h3>
        <h5 className="PolicyOtherText">
          Торговые марки, знаки, логотипы и т. п. (далее — Торговые марки),
          помещенные на данном сайте, являются собственностью Profit и третьих
          сторон. Информация, опубликованная на сайте, не предоставляет никаких
          лицензионных прав на использование любых торговых марок без получения
          предварительного письменного согласия владельца.
        </h5>
        <h3 className="PolicyMainText">Конфиденциальность</h3>
        <h5 className="PolicyOtherText">
          Мы обрабатываем персональные данные без использования средств
          автоматизации.
        </h5>
        <h5 className="PolicyOtherText">
          Такие данные могут включать: имя, фамилию, адрес электронной почты,
          телефонный номер, возраст, образование. По вашему требованию
          информация в любой момент может быть удалена.
        </h5>
        <h5 className="PolicyOtherText">
          Информация о посетителях сайта (IP-адрес, имя домена, тип браузера
          и операционная система, дата и время посещения и т. п.) собирается
          и сохраняется в целях ведения статистики посещений. Эта информация
          является общедоступной, таким образом, Profit не несет ответственности
          за ее разглашение.
        </h5>
        <h5 className="PolicyOtherText">
          Полученная информация может быть использована с целью оказания услуг
          в сфере разработки программного обеспечения и консультирования в этой
          области, регистрации заявок на проведение учебных стажировок и курсов
          обучения с возможностью последующего трудоустройства в компании,
          в маркетинговых целях, для рассылки новостей и информации об услугах;
          для персонализации сайта на основе истории поиска и просмотров
          пользователя. Полученные данные в обезличенном виде могут быть
          использованы для лучшего понимания потребностей бизнес-партнеров
          Profit и улучшения качества сотрудничества.
        </h5>
        <h5 className="PolicyOtherText">
          Мы будем посылать вам электронные и текстовые сообщения только в том
          случае, если вы дадите нам на это свое согласие. Вы можете в любое
          время попросить нас изменить или аннулировать ваши персональные данные
          в некоторых или во всех наших списках для рассылки. При возникновении
          затруднений при изменении или аннулировании персональных данных,
          вы можете обратиться по телефону компании Profit(контакты для
          обращения).
        </h5>
        <h3 className="PolicyMainText">
          Меры защиты персональных данных, используемые Profit
        </h3>
        <h5 className="PolicyOtherText">
          Назначение лица, ответственного за обработку ПД, которое осуществляет
          организацию обработки ПД, обучение и инструктаж, внутренний контроль
          за соблюдением учреждением и его работниками требований к защите ПД.
        </h5>
        <h5 className="PolicyOtherText">
          Определение актуальных угроз безопасности ПД при их обработке и
          разработка мер и мероприятий по защите ПД.
        </h5>
        <h5 className="PolicyOtherText">
          Разработка политики конфиденциальности.
        </h5>
        <h5 className="PolicyOtherText">
          Установление правил доступа к обрабатываемым ПД, а также обеспечение
          регистрациии учета всех действий, совершаемых с ПД.
        </h5>
        <h5 className="PolicyOtherText">
          Установление индивидуальных паролей доступа сотрудников в
          информационную систему в соответствии с их производственными
          обязанностями.
        </h5>
        <h5 className="PolicyOtherText">
          Применение средств защиты информации, прошедших в установленном
          порядке процедуру оценки соответствия.
        </h5>
        <h5 className="PolicyOtherText">
          Сертифицированное антивирусное программное обеспечение с регулярно
          обновляемыми базами.
        </h5>
        <h5 className="PolicyOtherText">
          Соблюдение условий, обеспечивающих сохранность ПД и исключающих
          несанкционированный к ним доступ.
        </h5>
        <h5 className="PolicyOtherText">
          Обнаружение фактов несанкционированного доступа к персональным данным
          и принятие мер.
        </h5>
        <h5 className="PolicyOtherText">
          Восстановление ПД, модифицированных или уничтоженных вследствие
          несанкционированного доступа к ним.
        </h5>
        <h5 className="PolicyOtherText">
          Обучение работников Profit, непосредственно осуществляющих
          обработку ПД, положениям законодательства РФ о ПД, в том числе
          требованиям к защите ПД, документам, определяющим политику «Profit»
          в отношении обработки ПД, локальным актам по вопросам обработки
          персональных данных. Осуществление внутреннего контроля и аудита.
        </h5>
        <h3 className="PolicyMainText">Ссылки</h3>
        <h5 className="PolicyOtherText">
          Ссылки на другие (внешние) сайты размещены на этом сайте бесплатно.
          Информация с этих сайтов не является продолжением, либо дополнением
          материалов Profit.
        </h5>
        <h3 className="PolicyMainText">Действие законодательства</h3>
        <h5 className="PolicyOtherText End">
          Поддержка данного сайта осуществляется из офиса Profit, расположенного
          в (фактическое место расположения). Все вопросы, касающиеся доступа
          пользователей к сайту и использования размещенной на нем информации,
          регулируются действующим законодательством Российской Федерации. Любые
          спорные вопросы, касающиеся использования сайта, должны
          рассматриваться в судебной инстанции соответствующей юрисдикции, а
          именно, в (суде по месту нахождения).
        </h5>
      </div>
    </div>
  );
};
export default PrivacyPage;