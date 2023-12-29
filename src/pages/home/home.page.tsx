
import { AnimationLottie } from '../../components/animation-lottie/animation-lottie.component';
import { Slider } from '../../components/slider/slider.component';

import { Container } from './home.styles';

const Home: React.FC = () => {
  return (
    <Container>
      <AnimationLottie />
      <Slider />
    </Container>
  )
}

export { Home }