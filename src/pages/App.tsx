import styled from 'styled-components'
import PrizeSection from './PrizeSection'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 200vh;
  padding-bottom: 100px;
`

function App() {
  return (
    <Wrapper>
      <PrizeSection />
    </Wrapper>
  )
}

export default App
