import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from 'react-intersection-observer';
import styled from "styled-components"

interface IProps {
  count: number;
  category: string;
  unit?: '명' | '개'
}

const Container = styled.div`
  font-size: 36px;

  strong {
    font-weight: bold;
  }
`

const Summary = ({ count, category, unit = '개' }: IProps) => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const countValue = useCountUp({ end:count , isStart: inView})
  
  return (
    <Container ref={ref}>
      <strong>{countValue}만 {unit}</strong>
      <span>의 {category}</span>
    </Container>
  )
}

export default Summary