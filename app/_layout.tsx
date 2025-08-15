import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    IRANSansXFaNumBlack: require("../assets/fonts/IRANSansXFaNum-Black.ttf"),
    IRANSansXFaNumExtraBold: require("../assets/fonts/IRANSansXFaNum-ExtraBold.ttf"),
    IRANSansXFaNumDemiBold: require("../assets/fonts/IRANSansXFaNum-DemiBold.ttf"),
    IRANSansXFaNumBold: require("../assets/fonts/IRANSansXFaNum-Bold.ttf"),
    IRANSansXFaNumMedium: require("../assets/fonts/IRANSansXFaNum-Medium.ttf"),
    IRANSansXFaNumRegular: require("../assets/fonts/IRANSansXFaNum-Regular.ttf"),
    IRANSansXFaNumLight: require("../assets/fonts/IRANSansXFaNum-Light.ttf"),
    IRANSansXFaNumUltraLight: require("../assets/fonts/IRANSansXFaNum-UltraLight.ttf"),
    IRANSansXFaNumThin: require("../assets/fonts/IRANSansXFaNum-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="PDP" options={{ headerShown: false }} />
    </Stack>
  );
}
