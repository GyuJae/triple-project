import logo from '@/assets/triple2x.png';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 400px;
`

const Date = styled.span`
  bottom: 40px;
  opacity: 0.7;
  position: absolute;
  font-size: 14px;
`

const AppImage = () => {
  return (
    <Container>
      <Image src={logo} alt="triple2x" />
      <Date>2021년 12월 기준</Date>
    </Container>
  )
  
}


export default AppImage