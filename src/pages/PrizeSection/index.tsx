import styled from 'styled-components'
import AppImage from './AppImg'
import Content from './Content'
import { motion } from 'framer-motion'
import { containerVar } from '@/animations/prizeSection'

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  min-width: 1200px;
  column-gap: 200px;
`

const PrizeSection = () => {
  return (
    <Wrapper
      initial='initial'
      variants={containerVar}
      whileInView='animate'
      viewport={{ once: true, amount: 0.9 }}
    >
      <AppImage />
      <Content />
    </Wrapper>
  )
}

export default PrizeSection