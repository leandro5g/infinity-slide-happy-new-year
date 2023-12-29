import Animated from "react-native-reanimated"
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  margin-top: 12px;
  flex-direction: row;
  width: 100%;
`;

export const TextMessage = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    width: 100%;
`;