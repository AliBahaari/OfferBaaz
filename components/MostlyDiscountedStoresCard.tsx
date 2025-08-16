import { COLORS } from "@/constants/config";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, View } from "react-native";

export default function MostlyDiscountedStoresCard() {
  return (
    <View
      style={{
        backgroundColor: COLORS.gray400,
        borderRadius: 14,
        boxShadow: "0px 4px 4px 0px #00000040",
        padding: 8,
        marginBottom: 30,
        alignItems: "center",
        width: 134,
      }}
    >
      <View
        style={{
          width: 58,
          height: 58,
          backgroundColor: COLORS.blue400,
          borderRadius: 58,
        }}
      />

      <View
        style={{
          backgroundColor: COLORS.gray500,
          borderRadius: 5,
          padding: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <FontAwesome name="star" size={10} color={COLORS.yellow} />
        <Text style={{ fontSize: 8, fontFamily: "IRANSansXFaNumMedium" }}>
          4.5
        </Text>
      </View>

      <Text
        style={{
          fontSize: 10,
          fontFamily: "IRANSansXFaNumDemiBold",
          marginTop: 6,
        }}
      >
        اسم فروشگاه
      </Text>

      <Text
        style={{
          fontSize: 10,
          fontFamily: "IRANSansXFaNumMedium",
          marginTop: 2,
        }}
      >
        ۲ سال سابقه ‌کار
      </Text>

      <View
        style={{
          backgroundColor: COLORS.gray800,
          borderRadius: 18,
          paddingVertical: 4,
          paddingHorizontal: 6,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          alignSelf: "center",
          marginTop: 6,
        }}
      >
        <FontAwesome name="star" size={10} color={COLORS.yellow} />
        <Text style={{ fontSize: 12, fontFamily: "IRANSansXFaNumLight" }}>
          شیراز
        </Text>
      </View>
    </View>
  );
}
