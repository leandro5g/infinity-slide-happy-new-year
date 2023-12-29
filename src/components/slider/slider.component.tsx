import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat } from "react-native-reanimated"

import { Container, TextMessage } from './slider.styles';

const Slider: React.FC = () => {
  const dimensios = useWindowDimensions()
  const slideX = useSharedValue(dimensios.width - 20)

  const slideAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: slideX.value }]
  }))

   useEffect(() => {
     slideX.value = withRepeat(withTiming(-dimensios.width, {
       duration: 10000,
       easing: Easing.linear
     }), -1)
   }, [])

  return (
    <Container style={slideAnimatedStyle}>
        <TextMessage numberOfLines={1} ellipsizeMode="clip">
        🎉🥳✨ FELIZ ANO NOVO E UM FELIZ 2024! 🌟🍾🎊
        </TextMessage>
    </Container>
  )
}

export { Slider }