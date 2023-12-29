import newYearLottie from "../../assets/new-year.json"

import { Lottie } from './animation-lottie.styles';

const AnimationLottie: React.FC = () => {
  return <Lottie autoPlay source={newYearLottie} />
}

export { AnimationLottie }