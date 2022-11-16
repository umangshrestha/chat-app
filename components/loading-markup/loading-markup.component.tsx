import { ActivityIndicator, View } from "react-native"
import Styles from './loading-markup.style';

export const LoadingMarkup = () => (
  <View style={Styles.view}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);