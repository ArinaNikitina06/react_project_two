import { Children } from "react";
import "./modal.scss";
import Button from "../Button/Button";
import { FaCross } from "react-icons/fa";

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__content">{children}</div>
        <div className="modal__btn">
          <Button use="secondary" handler={() => {}}>
            <FaCross />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
