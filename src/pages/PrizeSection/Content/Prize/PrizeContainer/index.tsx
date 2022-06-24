import styled from "styled-components"

interface IProps {
  iconPath: string;
  category: string;
  prize: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 13px;
`

const Icon = styled.img`
  width: 60px;
  `
const Content = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  font-weight: bold;
  row-gap: 6px;
  font-size: 14px;
`

const PrizeContainer = ({ iconPath, category, prize }:IProps) => {
  return (
    <Container>
      <Icon src={iconPath} alt={prize} />
      <Content>
        <span>{category}</span>
        <span>{prize}</span>
      </Content>
    </Container>
  )
}

export default PrizeContainer