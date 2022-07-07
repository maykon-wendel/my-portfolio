import { motion } from 'framer-motion';

import './ footerStyles/footer.css'

import CyberSec from '../../imgs/CyberSec.jpeg'
import devsOn from '../../imgs/devsOn.png'
import cph from '../../imgs/ciphine.jpeg'
function Finnaly() {
  const aPf = {
    x: +200,
    opacity: 0
  }
  const aPt = {
    x: 0,
    opacity: 1
  }

  const AnimateImgFrom = {
    y: +50,
    opacity: 0
  }
  const AnimateImgTo = {
    y: 0,
    opacity:1
  }

  return (
    <div className='footer-div'>
      <motion.p
      initial={aPf}
      animate={aPt}
      transition={{delay: 0.25}}
      >Worked it:</motion.p> 
      <div className='Imgs-Community'>
        <motion.img 
        initial={AnimateImgFrom}
        animate={AnimateImgTo}
        transition={{delay:0.05}}
        src={CyberSec} alt="" srcset="" />
        <motion.img 
         initial={AnimateImgFrom}
         animate={AnimateImgTo}
         transition={{delay:0.20}}
         src={devsOn} alt="" srcset="" />
        <motion.img 
         initial={AnimateImgFrom}
         animate={AnimateImgTo}
         transition={{delay:0.30}}
        src={cph} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Finnaly