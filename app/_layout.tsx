import { useAuthStore } from "@/stores/AuthStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchInterval: 0,
    },
    mutations: {
      retry: 0,
    },
  },
});

export default function RootLayout() {
  const setLoadUser = useAuthStore((action) => action.setLoadUser);

  useEffect(() => {
    setLoadUser();
  }, []);

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
    <QueryClientProvider client={QUERY_CLIENT}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="userLogin" options={{ headerShown: false }} />
        <Stack.Screen name="userRegister" options={{ headerShown: false }} />
        <Stack.Screen name="storeRegister" options={{ headerShown: false }} />
        <Stack.Screen name="PDP" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
