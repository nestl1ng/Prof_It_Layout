import "./Form.scss";
import { useForm } from "react-hook-form";
import { ReactComponent as ClearBtn } from "./../../../Buttons/ClearField.svg";

const Form = () => {
  const {
    register,
    resetField,
    getFieldState,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  let surname = false;
  let name = false;
  let midlName = false;
  let company = false;
  let email = false;
  let phone = false;
  let task = false;
  let money = false;
  const renderSwitch = (param) => {
    switch (param) {
      case undefined:
        return true;
      default:
        return false;
    }
  };
  surname = renderSwitch(getFieldState("surname").error);
  name = renderSwitch(getFieldState("name").error);
  midlName = renderSwitch(getFieldState("midlName").error);
  company = renderSwitch(getFieldState("company").error);
  email = renderSwitch(getFieldState("email").error);
  phone = renderSwitch(getFieldState("phone").error);
  task = renderSwitch(getFieldState("task").error);
  money = renderSwitch(getFieldState("money").error);
  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="FormFieldWrap">
          <div className="FormField">
            <label className="FieldLabel">
              Фамилия<mark>*</mark>
            </label>
            <div className="FieldInputWrap">
              <input
                className={`FieldInput ${surname ? "" : "error"}`}
                placeholder="Константинов"
                {...register("surname", {
                  required: "Поле обязательно для заполнения",
                  pattern: /^[А-Яа-яЁё\s]+$/,
                })}
              />
              <ClearBtn
                className="ClearBtn"
                onClick={() => resetField("surname")}
              />
            </div>
          </div>
          {errors.surname && <p className="ErrorError">error</p>}
        </div>
        <div className="FormFieldWrap">
          <div className="FormField">
            <label className="FieldLabel">
              Имя<mark>*</mark>
            </label>
            <div className="FieldInputWrap">
              <input
                className={`FieldInput ${name ? "" : "error"}`}
                placeholder="Константин"
                {...register("name", {
                  required: "Поле обязательно для заполнения",
                  pattern: /^[А-Яа-яЁё\s]+$/,
                })}
              />
              <ClearBtn
                className="ClearBtn"
                onClick={() => resetField("name")}
              />
            </div>
          </div>
          {errors.name && <p className="ErrorError">error</p>}
        </div>
        <div className="FormFieldWrap">
          <div className="FormField">
            <label className="FieldLabel">Отчество</label>
            <div className="FieldInputWrap">
              <input
                className={`FieldInput ${midlName ? "" : "error"}`}
                placeholder="Константинович"
                {...register("midlName", {
                  pattern: /^[А-Яа-яЁё\s]+$/,
                })}
              />
              <ClearBtn
                className="ClearBtn"
                onClick={() => resetField("midlName")}
              />
            </div>
          </div>
          {errors.midlName && <p className="ErrorError">error</p>}
        </div>
        <div className="FormFieldWrap">
          <div className="FormField">
            <label className="FieldLabel">Компания</label>
            <div className="FieldInputWrap">
              <input
                className={`FieldInput ${company ? "" : "error"}`}
                placeholder="KonstantinComp"
                {...register("company")}
              />
              <ClearBtn
                className="ClearBtn"
                onClick={() => resetField("company")}
              />
            </div>
          </div>
          {errors.company && <p className="ErrorError">error</p>}
        </div>
        <div className="FormFieldWrap">
          <div className="FormField">
            <label className="FieldLabel">
              Email<mark>*</mark>
            </label>
            <div className="FieldInputWrap">
              <input
                className={`FieldInput ${email ? "" : "error"}`}
                placeholder="kostikkostochka@mail.ru"
                {...register("email", {
                  required: "Поле обязательно для заполнения",
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              <ClearBtn
                className="ClearBtn"
                onClick={() => resetField("email")}
              />
            </div>
          </div>
          {errors.email && <p className="ErrorError">error</p>}
        </div>
        <div className="FormFieldWrap">
          <div className="FormField">
            <label className="FieldLabel">
              Телефон<mark>*</mark>
            </label>
            <div className="FieldInputWrap">
              <input
                className={`FieldInput ${phone ? "" : "error"}`}
                placeholder="+7"
                {...register("phone", {
                  required: "Поле обязательно для заполнения",
                  pattern:
                    /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                })}
              />
              <ClearBtn
                className="ClearBtn"
                onClick={() => resetField("phone")}
              />
            </div>
          </div>
          {errors.phone && <p className="ErrorError">error</p>}
        </div>
        <div className="FormFieldWrap">
          <div className="FormField">
            <label className="FieldLabel">Опишите задание</label>
            <div className="FieldInputWrap">
              <textarea
                className={`FieldInput Big ${task ? "" : "error"}`}
                placeholder="Требуется разработать мобильное приложение и web-кабинет для автоматизации бизнес-процессов компании"
                {...register("task")}
              />
              <ClearBtn
                className="ClearBtn"
                onClick={() => resetField("task")}
              />
            </div>
          </div>
          {errors.task && <p className="ErrorError">error</p>}
        </div>
        <div className="FormFieldWrap">
          <div className="FormField">
            <label className="FieldLabel">Планируемый бюджет, ₽</label>
            <div className="FieldInputWrap">
              <input
                className={`FieldInput ${money ? "" : "error"}`}
                placeholder="300 000"
                {...register("money", {
                  pattern: /^[ 0-9]+$/,
                })}
              />
              <ClearBtn
                className="ClearBtn"
                onClick={() => resetField("money")}
              />
            </div>
          </div>
          {errors.money && <p className="ErrorError">error</p>}
        </div>
        <div className="ModalLine"></div>
        <div>
          {Object.keys(errors).length > 0 && (
            <p className="ErrorMass">*Выделенные поля заполнены неверно.</p>
          )}
        </div>
        <div className="FormFooter">
          <input
            className={`SendBtn ${
              surname &&
              name &&
              midlName &&
              company &&
              email &&
              phone &&
              task &&
              money
                ? ""
                : "disable"
            }`}
            type="submit"
            value="Отправить"
          />
          <h4 className="FooterText">
            Нажимая на кнопку, вы соглашаетесь с Обработкой персональных данных
          </h4>
        </div>
      </form>
    </div>
  );
};
export default Form;
