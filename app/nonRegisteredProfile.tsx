import { COLORS } from "@/constants/config";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function NonRegisteredProfile() {
  return (
    <View
      style={{
        paddingVertical: 85,
        paddingHorizontal: 14,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: COLORS.white,
        flex: 1,
      }}
    >
      <Image
        source={require("../assets/images/ProfileUser.png")}
        style={{ width: 99, height: 99 }}
        transition={1000}
      />

      <Text
        style={{
          fontFamily: "IRANSansXFaNumMedium",
          fontSize: 18,
          marginTop: 20,
        }}
      >
        وارد حساب کاربری شوید
      </Text>

      <Text
        style={{
          width: 235,
          marginTop: 14,
          fontSize: 12,
          fontFamily: "IRANSansXFaNumRegular",
          textAlign: "center",
        }}
      >
        برای اطلاع از تخفیف‌های بیشتر وارد حساب کاربری خود شوید.
      </Text>

      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: COLORS.blue400,
          borderRadius: 5,
          marginTop: 32,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "IRANSansXFaNumMedium",
            color: COLORS.white,
          }}
        >
          ورود به حساب کاربری
        </Text>
      </View>

      <View style={{ marginTop: 100, width: "100%" }}>
        <View
          style={{
            paddingBottom: 14,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black_alpha27,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "IRANSansXFaNumRegular",
                color: COLORS.black_alpha90,
              }}
            >
              پشتیبانی
            </Text>
            <Feather
              name="chevron-left"
              size={20}
              color={COLORS.black_alpha90}
            />
          </View>
        </View>

        <View
          style={{
            paddingVertical: 14,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "IRANSansXFaNumRegular",
                color: COLORS.black_alpha90,
              }}
            >
              ثبت فروشگاه
            </Text>
            <Feather
              name="chevron-left"
              size={20}
              color={COLORS.black_alpha90}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
