import { useEffect, useRef } from "react";
import './Popover.css';

function PopoverContent({onClickOutside, children}){
    const popoverContentRef = useRef(null);
    useEffect(()=>{
        const handleOutsideClick = (e) => {
            if(!popoverContentRef.current.contains(e.target)){
                onClickOutside();
            }
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div ref={popoverContentRef} className='popover-content'>{children}</div>
    );
}

export default PopoverContent;