import { useState } from 'react';

interface IProps {
  targetNum: number;
  duration?: number;
}

export const useInterval = ({ targetNum, duration = 2700 }:IProps) => {
  const [count, setCount] = useState<number>(0)

  const handle = setInterval(() => {
    setCount(prev => {
      if (prev >= targetNum) {
        clearInterval(handle)
        return prev
      }
      return prev + 1
    })
  }, duration / targetNum)

  return count
}