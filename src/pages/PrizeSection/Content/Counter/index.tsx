import styled from "styled-components"
import Summary from "./Summary"
import { motion, Variants } from "framer-motion"
import { itemVar } from "@/animations/prizeSection"

const CounterContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 20px;
  }
`
const Counter = () => {
  return (
    <CounterContainer variants={itemVar}>
      <Summary count={700} unit='명' category='여행자' />
      <Summary count={100} category='여행리뷰' />
      <Summary count={470} category='여행일정' />
    </CounterContainer>
  )
}

export default Counter