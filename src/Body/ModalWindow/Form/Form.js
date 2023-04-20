import "./Form.scss";
import { useForm } from "react-hook-form";
import { ReactComponent as ClearBtn } from "./../../../Buttons/ClearField.svg";

const Form = () => {
  const {
    register,
    reset,
    getFieldState,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange" // "onChange"
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  let error = false;
  if(getFieldState("surname").error!==undefined){
    error =true;
  } else{
    error=false;
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="FormField">
          <label className="FieldLabel">
            Фамилия<mark>*</mark>
          </label>
          <div className="FieldInputWrap">
            <input
              className={`FieldInput ${error ? 'error' : ''}`}
              placeholder="Фамилия"
              {...register("surname", {
                required: "Поле обязательно для заполнения",
                pattern: /^[А-Яа-яЁё\s]+$/,
              })}
            />
            <ClearBtn className="ClearBtn" onClick={() => reset()} />
          </div>
        </div>
        {errors.surname && <p className="ErrorError">error</p>}
        <div>
          {Object.keys(errors).length > 0 && (
            <p className="ErrorMass">*Выделенные поля заполнены неверно.</p>
          )}
        </div>
        <input className="SendBtn" type="submit" value="Отправить" />
      </form>
    </div>
  );
};
export default Form;
