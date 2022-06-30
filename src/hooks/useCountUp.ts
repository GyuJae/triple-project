import { useEffect, useState } from 'react'

interface IProps {
  end: number;
  start?: number;
  duration?: number;
  isStart?: boolean
}

const slowNum = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export const useCountUp = ({end, start = 0, duration = 2000, isStart = true}:IProps) => {
  const [count, setCount] = useState(start)
  const rate = 1000 / 60
  const total = Math.round(duration / rate)

  useEffect(() => {
    if (isStart) {
      const counter = setInterval(() => {
        const progress = slowNum(++start / total)
        setCount(Math.round(end * progress))
        if (progress === 1) clearInterval(counter)
      }, rate)
    }
  }, [end, rate, start, total, isStart])

  return count
}