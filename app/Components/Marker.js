import AddVectors from "../Components/AddVectors";
import { TapGestureHandler, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import Svg, {  Path } from 'react-native-svg';
import { View } from 'react-native';

export default function Marker({ size, style, vector }) {
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const AnimatedView = Animated.createAnimatedComponent(View);
  const scaleMarker = useSharedValue(size);
  const translateX = useSharedValue(vector.x);
  const translateY = useSharedValue(vector.y);

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleMarker.value !== size * 2) {
        scaleMarker.value = scaleMarker.value * 2;
      }
    },
  });

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translationX;
      translateY.value = event.translationY + context.translationY;
    }
  });

  const markerStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleMarker.value),
      height: withSpring(scaleMarker.value),
    }
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        }
      ]
    }
  })

  return (
    <PanGestureHandler onGuestureEvent={onDrag}>
      <AnimatedView style={[style, containerStyle]}>
        <Svg width={size} height={size} viewBox="0 0 71 72" fill="none" >
          <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
            <AnimatedPath 
              d="M66 36C66 53.187 52.279 67 35.5 67C18.721 67 5 53.187 5 36C5 18.813 18.721 5 35.5 5C52.279 5 66 18.813 66 36Z" 
              stroke={vector.color} 
              strokeWidth="10"
            />
          </TapGestureHandler>
        </Svg>
      </AnimatedView>
    </PanGestureHandler>
  );
}
