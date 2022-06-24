import styled from 'styled-components'
import AppImage from './AppImg'
import Content from './Content'
import { motion } from 'framer-motion'
import { containerVar } from '@/animations/prizeSection'

const Wrapper = styled(motion.div)`
  min-width: 1200px;
  display: flex;
  justify-content: center;
  column-gap: 200px;
`

const PrizeSection = () => {
  return (
    <Wrapper
      initial='initial'
      variants={containerVar}
      animate='animate'
    >
      <AppImage />
      <Content />
    </Wrapper>
  )
}

export default PrizeSection