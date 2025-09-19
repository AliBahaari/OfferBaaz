import { COLORS } from "@/constants/config";
import { useUserRegister } from "@/requests/mutations/useUserRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { z } from "zod";

const schema = z.object({
  fullName: z.string("نباید خالی باشد").min(3, "باید حداقل 3 کاراکتر باشد"),
  email: z.email({ message: "ایمیل اشتباه هست" }),
  nationalCode: z
    .string("نباید خالی باشد")
    .min(10, "باید حداقل 10 کاراکتر باشد"),
  password: z
    .string("نباید خالی باشد")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/, {
      error: "باید 8 کاراکتر و شامل حروف بزرگ و کوچک، اعداد و علایم خاص باشد",
    }),
  username: z.string("نباید خالی باشد").min(8, "باید حداقل 8 کاراکتر باشد"),
});

export default function UserRegister() {
  const { mutate: userRegisterMutate } = useUserRegister();
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
    userRegisterMutate(values, {
      onSuccess(data) {
        if (data?.status === 201) {
          router.push("/userLogin");
        }
      },
      onError(error) {
        console.error("Registration failed:", error);
      },
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          height: 90,
          backgroundColor: COLORS.blue400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "IRANSansXFaNumMedium",
            fontSize: 25,
            color: COLORS.white,
          }}
        >
          در کمتر از ۵ دقیقه به آفرباز بپیوندید!{" "}
        </Text>
      </View>

      <ScrollView
        style={{ padding: 20, backgroundColor: COLORS.blue100, flex: 1 }}
      >
        <View
          style={{
            borderRadius: 20,
            backgroundColor: COLORS.white,
            padding: 14,
            boxShadow: "0px 4px 4px 0px #00000040",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <View>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="نام و نام خانوادگی"
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
            {errors.fullName && (
              <Text
                style={{
                  fontFamily: "IRANSansXFaNumBold",
                  fontSize: 10,
                  color: COLORS.red,
                  marginTop: 4,
                }}
              >
                {errors.fullName.message}
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              name="nationalCode"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="کد ملی"
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
            {errors.nationalCode && (
              <Text
                style={{
                  fontFamily: "IRANSansXFaNumBold",
                  fontSize: 10,
                  color: COLORS.red,
                  marginTop: 4,
                }}
              >
                {errors.nationalCode.message}
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              name="email"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="ایمیل"
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
            {errors.email && (
              <Text
                style={{
                  fontFamily: "IRANSansXFaNumBold",
                  fontSize: 10,
                  color: COLORS.red,
                  marginTop: 4,
                }}
              >
                {errors.email.message}
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
            {errors.password && (
              <Text
                style={{
                  fontFamily: "IRANSansXFaNumBold",
                  fontSize: 10,
                  color: COLORS.red,
                  marginTop: 4,
                }}
              >
                {errors.password.message}
              </Text>
            )}
          </View>

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

          <Pressable
            style={{
              borderRadius: 8,
              backgroundColor: COLORS.blue400,
              padding: 12,
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "IRANSansXFaNumRegular",
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              ثبت
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
