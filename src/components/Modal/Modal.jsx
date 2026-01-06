import "./Modal.css";
import { createPortal } from "react-dom";
import { X } from "lucide-react"
import { useEffect, useRef } from "react";

function Modal({isOpen, onClose, className, children}) {
    const modalRoot = document.body;
    const modalRef = useRef(null);
    const previouslyFocusedElementRef = useRef(null);

    if(!isOpen) {
        return null;
    }

    useEffect(() => {
        // Save the element that was focused before opening modal
        previouslyFocusedElementRef.current = document.activeElement;

        // Move focus into the modal
        modalRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key !== "Tab"){
                return;
            }

            const focusableElements = modalRef.current.querySelectorAll(
                'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements.length === 0) {
                return;
            }

            const first = focusableElements[0];
            const last = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) {
                // Shift + Tab
                if (document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                }
            } else {
                // Tab
                if (document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);

            // Restore focus to previously focused element
            previouslyFocusedElementRef.current?.focus();
        };
    }, []);

    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div className={`modal ${className}`} ref={modalRef} tabIndex="-1" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button"><X size={20} color="grey" onClick={onClose} /></button>
                {children}
            </div>
        </div>,
        modalRoot // Portal target (Modal will be rendered as a child of this container)
    )
}

export default Modal;