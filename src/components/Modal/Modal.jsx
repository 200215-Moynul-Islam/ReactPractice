import "./Modal.css";
import { createPortal } from "react-dom";
import { X } from "lucide-react"

function Modal({isOpen, onClose, className, children}) {
    const modalRoot = document.body;

    if(!isOpen) {
        return null;
    }

    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div className={`modal ${className}`} onClick={(e) => e.stopPropagation()}>
                <X size={35} color="grey" className="modal-close-button" onClick={onClose} />
                {children}
            </div>
        </div>,
        modalRoot // Portal target (Modal will be rendered as a child of this container)
    )
}

export default Modal;