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
      <Summary count={350} unit='명' category='사용자' />
      <Summary count={21} category='리뷰' />
      <Summary count={650} category='저장' />
    </CounterContainer>
  )
}

export default Counter