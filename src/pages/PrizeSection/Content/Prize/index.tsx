import styled from "styled-components"
import playStoreIconPath from "@/assets/play-store2x.png"
import appleIconPath from "@/assets/badge-apple4x.png"
import PrizeContainer from "./PrizeContainer"
import { motion } from "framer-motion"; 
import { itemVar } from "@/animations/prizeSection";

const PrizeWrapper = styled(motion.div)`
  display: flex;
  column-gap: 30px;
`

const Prize = () => {
  return (
    <PrizeWrapper variants={itemVar}>
      <PrizeContainer iconPath={playStoreIconPath} category='2018 구글 플레이스토어' prize="올해의 앱 최우수상 수상" />
      <PrizeContainer iconPath={appleIconPath} category='2018 애플 앱스토어' prize="오늘의 여행앱 선정" />
    </PrizeWrapper>
  )
}

export default Prize