import { COLORS } from "@/constants/config";
import { useUserLogout } from "@/requests/mutations/useUserLogout";
import { useAuthProfile } from "@/requests/queries/useProfile";
import { useAuthStore } from "@/stores/AuthStore";
import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  const userInfo = useAuthStore((state) => state);
  const { data: userProfile } = useAuthProfile();

  const { mutate: userLogout } = useUserLogout();

  useFocusEffect(() => {
    if (!userInfo.isLoggedIn) {
      router.push("/userLogin");
    }
  });

  const setIsLoggedOut = useAuthStore((action) => action.setIsLoggedOut);

  async function logOut() {
    userLogout(undefined, {
      onSuccess: (data) => {
        if (data.status === 200) {
          setIsLoggedOut().then(() => {
            router.push("/");
          });
        }
      },
    });
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
      <View style={{ gap: 10 }}>
        <View>
          <Text style={{ fontFamily: "IRANSansXFaNumBold", fontSize: 12 }}>
            نام و نام خانوادگی:
          </Text>
          <Text style={{ fontFamily: "IRANSansXFaNumRegular", fontSize: 12 }}>
            {userProfile?.fullName}
          </Text>
        </View>

        <View>
          <Text style={{ fontFamily: "IRANSansXFaNumBold", fontSize: 12 }}>
            کد ملی:
          </Text>
          <Text style={{ fontFamily: "IRANSansXFaNumRegular", fontSize: 12 }}>
            {userProfile?.nationalCode}
          </Text>
        </View>

        <View>
          <Text style={{ fontFamily: "IRANSansXFaNumBold", fontSize: 12 }}>
            ایمیل:
          </Text>
          <Text style={{ fontFamily: "IRANSansXFaNumRegular", fontSize: 12 }}>
            {userProfile?.email}
          </Text>
        </View>

        <View>
          <Text style={{ fontFamily: "IRANSansXFaNumBold", fontSize: 12 }}>
            نام کاربری:
          </Text>
          <Text style={{ fontFamily: "IRANSansXFaNumRegular", fontSize: 12 }}>
            {userProfile?.username}
          </Text>
        </View>

        <View>
          <Text style={{ fontFamily: "IRANSansXFaNumBold", fontSize: 12 }}>
            تاریخ عضویت:
          </Text>
          <Text style={{ fontFamily: "IRANSansXFaNumRegular", fontSize: 12 }}>
            {userProfile?.createdAt
              ? new Date(userProfile.createdAt).toLocaleDateString("fa-IR")
              : ""}
          </Text>
        </View>
      </View>

      <Pressable
        onPress={logOut}
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: COLORS.red,
          borderRadius: 5,
          marginTop: 32,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "IRANSansXFaNumMedium",
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          خروج از حساب کاربری
        </Text>
      </Pressable>
    </View>
  );
}
