import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./Toast.css";

type ToastProps = {
  time?: number;
};

export default function Toast({ time = 3000 }: ToastProps) {
  const [isActive, setIsActive] = useState<Boolean>(false);

  useEffect(() => {
    setIsActive(true);
    const removeTimer = setTimeout(() => {
      setIsActive(false);
    }, time);
    return () => clearTimeout(removeTimer);
  }, [time]);

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div className={`toastWrapper ${isActive ? "active" : ""}`}>
      <p className="text">Toast</p>
      <button
        type="button"
        className="closeButton"
        aria-label="Close toast"
        onClick={handleClose}>
        <IoCloseOutline className="close" />
      </button>
    </div>
  );
}
