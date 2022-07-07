import { motion } from 'framer-motion'
import './styles/NavBar.css'
import Telegram from './../../imgs/telegram.png'

const NavLinks = () => {

    const animateFrom = {
        opacity: 0,
        y: -40
    }

    const animateTo = {
        opacity: 1,
        y: 0
    }

    return (
        <div className='navlinks'>
            <motion.a 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            href="https://www.linkedin.com/in/maycon-wendel-mizael-a047b423b" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-linkedin" id="linkedin"></i></motion.a>

            <motion.a 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            href="https://www.instagram.com/maykondev/" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-instagram" id="instagram"></i></motion.a>

            <motion.a 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            href="https://github.com/UserDevz?tab=repositories" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-github-square github" id="github"></i></motion.a>
           
            <motion.a 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            href="https://t.me/MaykonDevz" target="_blank" rel="noopener noreferrer">
                <i ><img id='Telegram' src={Telegram} alt="" srcset="" /></i>
            </motion.a>

        </div>
    );
}

export default NavLinks