import { COLORS } from "@/constants/config";
import { Text, View } from "react-native";

export default function MostlyFollowingStores() {
  return (
    <View
      style={{
        width: 136,
        backgroundColor: COLORS.gray300,
        borderRadius: 14,
        padding: 8,
        position: "relative",
        marginTop: 18,
        marginLeft: 24,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          borderRadius: 58,
          backgroundColor: COLORS.yellow_alpha90,
          boxShadow: "0px 4px 4px 0px #00000040",
          top: -18,
          left: -24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "IRANSansXFaNumBold",
            fontSize: 14,
            color: COLORS.white,
          }}
        >
          پرتخفیف
        </Text>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "IRANSansXFaNumRegular",
          color: COLORS.black_alpha85,
        }}
      >
        الفان شاپ
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontFamily: "IRANSansXFaNumLight",
          color: COLORS.black_alpha85,
        }}
      >
        گجت | گیفت
      </Text>

      <View
        style={{
          marginTop: 5,
          borderRadius: 200,
          backgroundColor: COLORS.gray900,
          paddingVertical: 4,
          paddingHorizontal: 8,
          alignSelf: "flex-end",
        }}
      >
        <Text style={{ fontSize: 6, fontFamily: "IRANSansXFaNumLight" }}>
          ۱۰۰+ کالا تخفیف‌دار
        </Text>
      </View>
    </View>
  );
}
