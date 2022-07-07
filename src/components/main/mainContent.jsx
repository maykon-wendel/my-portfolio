
import './styles/main.css'
import { motion } from 'framer-motion'

import useSWR from 'swr'

function MainContent() {

  const animatePFrom = {
    x: -100,
    opacity: 0
  }
  const animatePTo = {
    x: 0,
    opacity: 1
  }
  const animateH1from = {
    x: -80,
    opacity: 0
  }
  const animateH1to = {
    x: 0,
    opacity: 1
  }

  const animateImgFrom = {
    x: +400,
    opacity: 0
  }
  const animateImgTo = {
    x: 0,
    opacity: 1,
    rotate: [0, 360],
    borderRadius: ["20%", "20%", "20%", "20%", "50%"],
  }

  const animateDivFrom = {
    y: -40,
    opacity: 0

  }
  const animateDivTo= {
    y: 0,
    opacity:1

  }

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  function Profile(...args) {
      const { data, error } = useSWR(args , fetcher)

      if (error) return <div>falhou ao carregar</div>
      if (!data) return <div>carregando...</div>

      return data
  }

  const Avatar = Profile('https://api.github.com/users/UserDevz')

  return (
    <div className='main-div'>
      <div id='text-area'>
        <div
          className='info'>

          <motion.h1
            initial={animateH1from}
            animate={animateH1to}
            transition={{ delay: 0.50 }}
          >Maykon Dev</motion.h1>
          <motion.p

            initial={animatePFrom}
            animate={animatePTo}
            transition={{ delay: 0.70 }}

          > Hello, I've been a Back End programmer for 4 years, with knowledge in Python, Shell Script and C, and studying JavaScript. I currently live in Florianópolis Santa Catarina, I am 18 years old and since I was 12 I have been fascinated by technology, having my first computer at that age, I had my first contact with programming, but I did not continue because I lacked some resources. I'm currently studying JavaScript at w3schools, with plans to enter the FullStack area in the future!
          </motion.p>
        </div>
        <motion.div 
        initial={animateDivFrom}
        animate={animateDivTo}
        transition={{delay: 0.70}}
        className='button'>
          
          <a href="http://Wa.me/+55679831-8445" target="_blank" rel="noopener noreferrer"><input type="button" value="Contact" /></a>

        </motion.div>
      </div>

      <aside>
        <motion.img 
        initial={animateImgFrom}
        animate={animateImgTo}
        transition={{delay:0.50}}
        src={Avatar.avatar_url} alt="" />
      </aside>

    </div>
  )
}

export { MainContent }