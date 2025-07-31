import { Children, useEffect } from "react";
import "./modal.scss";
import Button from "../Button/Button";
import { FaCross } from "react-icons/fa";

const Modal = ({ children, isActive, closeHandler }) => {
  const keyPressEscHandler = (event) => {
    if (event.code === "Escape") {
      closeHandler();
    }
  };

  const clickInEmptyHandler = (event) => {
    if(!event.target.closest('.modal__wrapper')){
        closeHandler();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyPressEscHandler);
    document.addEventListener("mousedown", clickInEmptyHandler);

		// call before destroy Modal
    return () => {
      document.removeEventListener("keydown", keyPressEscHandler);
      document.removeEventListener("mousedown", clickInEmptyHandler);
    };
  }, []);

  return (
    isActive && (
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal__content">{children}</div>
          <div className="modal__btn">
            <Button use="secondary" handler={() => closeHandler()}>
              <FaCross />
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
