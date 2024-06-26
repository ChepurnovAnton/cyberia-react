import styles from "./Input.module.scss";

interface InputProps {
  legendName: string;
  register:any;
  name: string;
  required: boolean | string;
  errors: any;
  message: string;
  value: string | RegExp;
  validationMessage: string | never[];
  placeHolder: string;
}

const Input: React.FC<InputProps> = ({
  legendName,
  register,
  name,
  required,
  errors,
  message,
  value,
  validationMessage,
  placeHolder,
}) => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{legendName}*</legend>
        <input
          className={styles.input}
          placeholder={placeHolder}
          {...register(name, {
            required: required,
            pattern: {
              message: message,
              value: value,
            },
          })}
        />
      </fieldset>
      <div className={styles.validation_message}>
        {errors[name] ? (
          <p>{errors[name].message}</p>
        ) : (
          <p>{validationMessage}</p>
        )}
      </div>
    </>
  );
};

export default Input;
