import Svg, {  Path } from 'react-native-svg';

const AddVectors = ({vectorColor}) => {
  return (
    <Svg testID='circle-icon' width="30" height="30" viewBox="0 0 71 72" fill="none" >
      <Path d="M66 36C66 53.187 52.279 67 35.5 67C18.721 67 5 53.187 5 36C5 18.813 18.721 5 35.5 5C52.279 5 66 18.813 66 36Z" stroke={vectorColor} strokeWidth="10"/>
    </Svg>
  );

};

export default AddVectors;