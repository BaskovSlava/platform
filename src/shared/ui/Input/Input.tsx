import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { InputHTMLAttributes, memo, useEffect, useState } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value " | "onChange"
>;
// Omit - позволяет забрать из типа все пропсы , но исключить те , которые нам не нужны
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if(autofocus) {
        setIsFocused(true)
    }
  }, [autofocus]) 

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }
  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (
            <span 
                className={cls.caret}
                style={{left:`${caretPosition * 9}px`}}
            />)}
      </div>
    </div>
  );
});
