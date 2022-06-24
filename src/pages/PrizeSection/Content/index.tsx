import styled from "styled-components"
import Counter from "./Counter"
import Prize from "./Prize"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`


const Content = () => {
  return (
    <Wrapper>
      <Counter />
      <Prize />
    </Wrapper>
  )
}

export default Content