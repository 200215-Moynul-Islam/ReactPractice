import {useState} from 'react';
import './Popover.css';

function Popover({trigger, children}){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='popover-container'>
            <div onClick={()=>setIsOpen((io)=>!io)}>{trigger}</div>
            {isOpen && <div className='popover-content'>{children}</div>}
        </div>
    );
}

export default Popover;