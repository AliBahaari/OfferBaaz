import { COLORS } from "@/constants/config";
import { useUserLogin } from "@/requests/mutations/useUserLogin";
import { useAuthStore } from "@/stores/AuthStore";
import Feather from "@expo/vector-icons/Feather";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";

const schema = z.object({
  password: z
    .string("نباید خالی باشد")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/, {
      error: "باید 8 کاراکتر و شامل حروف بزرگ و کوچک، اعداد و علایم خاص باشد",
    }),
  username: z.string("نباید خالی باشد").min(8, "باید حداقل 8 کاراکتر باشد"),
});

export default function UserLogin() {
  const setIsLoggedIn = useAuthStore((action) => action.setIsLoggedIn);

  const { mutate: userLoginMutate } = useUserLogin();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof schema>) {
    userLoginMutate(values, {
      onSuccess: (data) => {
        if (data?.access_token) {
          setIsLoggedIn(data?.access_token).then(() => {
            router.push("/profile");
          });
        }
      },
      onError: (error) => {
        console.error("Login failed:", error);
      },
    });
  }

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

      <View style={{ width: "100%", marginTop: 32, gap: 16 }}>
        <View>
          <Controller
            control={control}
            name="username"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="نام کاربری"
                style={{
                  fontFamily: "IRANSansXFaNumRegular",
                  fontSize: 14,
                  borderWidth: 1,
                  borderColor: COLORS.black_alpha30,
                  paddingVertical: 18,
                  paddingHorizontal: 14,
                  color: COLORS.black_alpha52,
                  borderRadius: 8,
                  textAlign: "right",
                }}
              />
            )}
          />
          {errors.username && (
            <Text
              style={{
                fontFamily: "IRANSansXFaNumBold",
                fontSize: 10,
                color: COLORS.red,
                marginTop: 4,
              }}
            >
              {errors.username.message}
            </Text>
          )}
        </View>

        <View>
          <Controller
            control={control}
            name="password"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="رمز عبور"
                style={{
                  fontFamily: "IRANSansXFaNumRegular",
                  fontSize: 14,
                  borderWidth: 1,
                  borderColor: COLORS.black_alpha30,
                  paddingVertical: 18,
                  paddingHorizontal: 14,
                  color: COLORS.black_alpha52,
                  borderRadius: 8,
                  textAlign: "right",
                }}
              />
            )}
          />
          {errors.username && (
            <Text
              style={{
                fontFamily: "IRANSansXFaNumBold",
                fontSize: 10,
                color: COLORS.red,
                marginTop: 4,
              }}
            >
              {errors.username.message}
            </Text>
          )}
        </View>
      </View>

      <Pressable
        onPress={handleSubmit(onSubmit)}
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
      </Pressable>

      <View style={{ marginTop: 100, width: "100%" }}>
        <View
          style={{
            paddingBottom: 14,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black_alpha27,
          }}
        >
          <Link href={"/userRegister"}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
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
                ثبت نام
              </Text>
              <Feather
                name="chevron-left"
                size={20}
                color={COLORS.black_alpha90}
              />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}
