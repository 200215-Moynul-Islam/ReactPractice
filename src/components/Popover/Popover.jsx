import {useState} from 'react';
import './Popover.css';
import PopoverContent from './PopoverContent';

function Popover({trigger, children}){
    const [isOpen, setIsOpen] = useState(false);
    const handleClickTrigger = (e) => {
        setIsOpen((io) => !io);
        e.stopPropagation();
    }
    
    return (
        <div className='popover-container'>
            <div onClick={handleClickTrigger}>{trigger}</div>
            {isOpen && <PopoverContent onClickOutside={()=>setIsOpen(false)}>{children}</PopoverContent>}
        </div>
    );
}

export default Popover;