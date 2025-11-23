import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import "./Input.css";

interface InputProps {
  type?: "text" | "password" | "number";
  clearable?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  clearable = true,
  value = "",
  onChange,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    onChange?.("");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="inputWrapper">
      <input
        type={inputType}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="input"
      />

      {type === "password" && (
        <button onClick={togglePassword} className="button">
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      )}

      {clearable && (
        <button onClick={handleClear} className="button">
          <IoCloseOutline className="close" />
        </button>
      )}
    </div>
  );
};
export default Input;
