import styled from "styled-components";
import Counter from "./Counter";
import Prize from "./Prize";
import { motion } from "framer-motion";
import { containerVar } from "@/animations/prizeSection";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`
const Content = () => {
  return (
    <Wrapper variants={containerVar}>
      <Counter />
      <Prize />
    </Wrapper>
  )
}

export default Content