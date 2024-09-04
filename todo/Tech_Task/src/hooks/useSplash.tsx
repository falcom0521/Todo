import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Splash: undefined;
  Home: undefined; // Ensure Home route is defined
  // Add other routes here
};

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

const useSplash = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const navigateToLogin = () => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 1500); // Navigate to Home after 1.5 seconds
  };

  return {
    navigateToLogin,
  };
};

export default useSplash;
