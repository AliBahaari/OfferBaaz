import { COLORS } from "@/constants/config";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function Register() {
  const [selectedBusinessType, setSelectedBusinessType] =
    useState("selectBusinessType");
  const [selectedCity, setSelectedCity] = useState("selectCity");

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
          <Picker
            selectedValue={selectedBusinessType}
            onValueChange={(itemValue) => setSelectedBusinessType(itemValue)}
            style={{
              height: 60,
              borderRadius: 8,
              borderColor: COLORS.gray700,
              fontFamily: "IRANSansXFaNumRegular",
              fontSize: 15,
              textAlign: "right",
              paddingHorizontal: 14,
              paddingVertical: 18,
            }}
          >
            <Picker.Item
              label="انتخاب نوع کسب و کار"
              value="selectBusinessType"
            />
          </Picker>
          <Picker
            selectedValue={selectedCity}
            onValueChange={(itemValue) => setSelectedCity(itemValue)}
            style={{
              height: 60,
              borderRadius: 8,
              borderColor: COLORS.gray700,
              fontFamily: "IRANSansXFaNumRegular",
              fontSize: 15,
              textAlign: "right",
              paddingHorizontal: 14,
              paddingVertical: 18,
            }}
          >
            <Picker.Item label="انتخاب شهر" value="selectCity" />
          </Picker>
          <TextInput
            placeholder="نام فروشگاه"
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
          <TextInput
            placeholder="نام و نام خانوادگی مالک فروشگاه"
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
          <TextInput
            placeholder="آیدی فروشگاه/آدرس سایت فروشگاه"
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
          <TextInput
            placeholder="شماره تلفن همراه"
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
          <TextInput
            placeholder="کد معرف (اختیاری)"
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

          <View
            style={{
              borderRadius: 8,
              backgroundColor: COLORS.blue400,
              padding: 12,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "IRANSansXFaNumRegular",
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              دریافت کد تایید
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
