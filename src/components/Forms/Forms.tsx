import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./Forms.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Checkbox from "../UI/Checkbox/Checkbox";

type Inputs = {
  name: string;
  email: string;
};

const Forms = () => {
  const [emailValidation, setEmailValidation] = useState([]);
  const [phoneValidation, setPhoneValidation] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data) => {
    axios
      .post("https://api.test.cyberia.studio/api/v1/feedbacks", data)
      .then((res) => console.log(res))
      .catch((error) => {
        if (error.response.status === 422) {
          setEmailValidation(error.response.data.errors.email);
        }
        if (error.response.status === 422) {
          setPhoneValidation(error.response.data.errors.phone);
        }
      });
    setPhoneValidation([]);
    setEmailValidation([]);
  };

  return (
    <section className={styles.forms}>
      <h2 className={styles.title}>
        Расскажите <br /> о вашем проекте
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <Input
            register={register}
            name={"name"}
            required={false}
            errors={errors}
            legendName={"Ваше имя"}
            message={false}
            value={""}
            validationMessage=""
            placeHolder={"Ваше имя*"}
          />
        </div>
        <div>
          <Input
            placeHolder={"Email*"}
            legendName={"Email"}
            register={register}
            name={"email"}
            required={false}
            errors={errors}
            message={"Некоректный емейл"}
            value={
              /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
            }
            validationMessage={emailValidation}
          />
        </div>
        <div>
          <Input
            placeHolder={"Телефон*"}
            register={register}
            name={"phone"}
            required={false}
            errors={errors}
            legendName={"Телефон"}
            message={"Неправильно введен номер телефона"}
            value={/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/}
            validationMessage={phoneValidation}
          />
        </div>
        <div className={styles.field_message}>
          <Input
            placeHolder={"Сообщение*"}
            register={register}
            name={"message"}
            required={false}
            errors={errors}
            legendName={"Сообщение"}
            message={""}
            value={""}
            validationMessage=""
          />
        </div>
        <div className={styles.checkbox}>
          <Checkbox>Согласие на обработку персональных данных</Checkbox>
        </div>
        <Button value="Обсудить проект" className={styles.button_forms} />

        {/* <div className={styles.button_forms}>
        </div> */}
      </form>
    </section>
  );
};

export default Forms;
