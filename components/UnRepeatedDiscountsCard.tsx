import { COLORS } from "@/constants/config";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function UnRepeatedDiscountsCard() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push("/PDP")}>
      <View
        style={{
          width: 146,
          backgroundColor: COLORS.white,
          borderRadius: 12,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            position: "absolute",
            width: 60,
            height: 50,
            backgroundColor: COLORS.primary,
            borderBottomLeftRadius: 50,
            top: 0,
            right: 0,
            zIndex: 1,
            boxShadow: "0px 4px 4px 0px #00000040",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 24,
              fontFamily: "IRANSansXFaNumDemiBold",
              textShadowColor: "#00000040",
              textShadowOffset: { width: 0, height: 4 },
              textShadowRadius: 4,
              position: "relative",
              top: -3,
              right: -3,
            }}
          >
            20%
          </Text>
        </View>

        <View
          style={{
            height: 80,
            backgroundColor: COLORS.gray700,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
          }}
        >
          <Feather size={25} name="image" color={COLORS.black} />
        </View>

        <Text
          style={{
            fontSize: 15,
            fontFamily: "IRANSansXFaNumMedium",
            color: COLORS.black,
          }}
        >
          کفش
        </Text>

        <View
          style={{
            borderRadius: 18,
            paddingHorizontal: 8,
            paddingVertical: 4,
            backgroundColor: COLORS.gray700,
            width: 52,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "IRANSansXFaNumLight",
              color: COLORS.black,
            }}
          >
            تهران
          </Text>
          <Ionicons size={10} name="location-sharp" color={COLORS.primary} />
        </View>

        <View>
          <Text
            style={{
              fontFamily: "IRANSansXFaNumRegular",
              color: COLORS.black,
              fontSize: 20,
            }}
          >
            4,200,000
          </Text>

          <Text
            style={{
              fontFamily: "IRANSansXFaNumRegular",
              color: COLORS.grayText,
              fontSize: 15,
              textDecorationLine: "line-through",
            }}
          >
            8,900,000
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
