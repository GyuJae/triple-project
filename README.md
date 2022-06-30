# Triple 기업과제

<img src="https://user-images.githubusercontent.com/58322754/176611633-de1d61ca-4efd-42d8-9f06-c8c6cc8a978c.png">

- **Github Repository URL** <br/> https://github.com/GyuJae/triple-project
- **배포 URL** <br/> https://sweet-begonia-bf15b5.netlify.app/

<br/>

# 🗂 프로젝트 소개
- **개발 기간** 22.06.24 - 22.06.30
- **개발자** 정규재
- **프로젝트 개요** <br/>
트리플 홈페이지의 한 섹션을 구현합니다. 

<br/>

# 🔨 기술 스택

|라이브러리|내용|
|:---:|:---:|
| styled components | css library  |
| framer-motion | animation |
| react-intersection-observer | dom library |
| Netlify | Deploy |

<br/>


# 🏞 기능 설명 


### 영역별 등장 애니메이션

<details>
    <summary>구현 방법</summary>


Framer motion 라이브러리를 이용하여 등장 애니메이션을 구현하였다. framer motion을 이용하여 더 쉽고 유지 보수 하기 쉽게 애니메이션을 구현하였다. 

<br />

```tsx
export const containerVar: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }, 
}

export const itemVar: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7
    }
  }
}
```

</details>

<br />

### 숫자가 올라가는 애니메이션

<details>
    <summary>구현 방법</summary>


useCountUp hooks을 만들어 숫자가 올가가는 애니메이션을 만들었고, react-intersection-observer를 이용하여 scroll해서 보일시에 작동하게 만들었다. 

<br />

```tsx
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
```

</details>

<br />



