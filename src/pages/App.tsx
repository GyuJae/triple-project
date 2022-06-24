import styled from 'styled-components'
import PrizeSection from './PrizeSection'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500vh;
`

function App() {
  return (
    <Wrapper>
      <PrizeSection />
    </Wrapper>
  )
}

export default App
