import styled from 'styled-components'
import AppImage from './AppImg'
import Content from './Content'

const Wrapper = styled.div`
  min-width: 1200px;
  display: flex;
  justify-content: center;
  column-gap: 200px;
`

const PrizeSection = () => {
  return (
    <Wrapper>
      <AppImage />
      <Content />
    </Wrapper>
  )
}

export default PrizeSection