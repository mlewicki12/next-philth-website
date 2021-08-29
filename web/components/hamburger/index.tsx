
import { useState, ReactNode } from 'react';
import styles from './style.module.scss';

type Hamburger = {
  onClick?: () => void;
}

const Hamburger = ({
  onClick
}: Hamburger) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <button className={styles.hamburger} onClick={() => {
        setOpen(!open);
        onClick && onClick();
      }}
    >
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 512 512" >
      <g id='menu'>
        <line style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 50, strokeLinecap: 'round', strokeMiterlimit: 10}} x1="68.6" y1="145.7" x2="443.4" y2="145.7"/>
        <line style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 50, strokeLinecap: 'round', strokeMiterlimit: 10}} x1="68.6" y1="256" x2="443.4" y2="256"/>
        <line style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 50, strokeLinecap: 'round', strokeMiterlimit: 10}} x1="68.6" y1="366.3" x2="443.4" y2="366.3"/>
      </g>
      {/* hidden for now, but this is for later animation use */}
      {false && <g id='menu-open' style={{visibility: 'hidden'}}>
        <path style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 50, strokeLinecap: 'round', strokeMiterlimit: 10}} d="M443.4,145.7"/>
        <path style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 50, strokeLinecap: 'round', strokeMiterlimit: 10}} d="M68.6,145.7"/>
        <line style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 50, strokeLinecap: 'round', strokeMiterlimit: 10}} x1="68.6" y1="366.3" x2="443.4" y2="145.7"/>
        <line style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 50, strokeLinecap: 'round', strokeMiterlimit: 10}} x1="68.6" y1="145.7" x2="443.4" y2="366.3"/>
      </g>}
      </svg>
    </button>
  );
}

export default Hamburger;