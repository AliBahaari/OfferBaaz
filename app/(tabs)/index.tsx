import UnRepeatedDiscountsCard from "@/components/UnRepeatedDiscountsCard";
import { COLORS } from "@/constants/config";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Picker } from "@react-native-picker/picker";
import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

const categoryList: {
  title: string;
  icon: React.ComponentProps<typeof Feather>["name"];
}[] = [
  {
    title: "اکسسوری",
    icon: "box",
  },
  {
    title: "اکسسوری",
    icon: "box",
  },
  {
    title: "اکسسوری",
    icon: "box",
  },
  {
    title: "اکسسوری",
    icon: "box",
  },
  {
    title: "اکسسوری",
    icon: "box",
  },
  {
    title: "اکسسوری",
    icon: "box",
  },
  {
    title: "اکسسوری",
    icon: "box",
  },
  {
    title: "اکسسوری",
    icon: "box",
  },
];

export default function HomeScreen() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <ScrollView>
      {/* HEADER */}
      <View
        style={{
          padding: 20,
          backgroundColor: COLORS.primary,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontFamily: "IRANSansXFaNumRegular", color: COLORS.white }}
        >
          هر خرید یه بُرده!
        </Text>

        <Image
          source={require("../../assets/images/Logo.png")}
          style={{ width: 72, height: 34 }}
          transition={1000}
        />

        <Text
          style={{ fontFamily: "IRANSansXFaNumRegular", color: COLORS.white }}
        >
          با
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 26,
          backgroundColor: COLORS.white,
        }}
      >
        {/* SEARCH */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={{
              height: 50,
              width: 110,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderColor: COLORS.darkGray,
              backgroundColor: COLORS.darkGray,
              fontFamily: "IRANSansXFaNumRegular",
              textAlign: "center",
              paddingHorizontal: 4,
            }}
          >
            <Picker.Item label="انتخاب شهر" value="selectCity" />
          </Picker>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: COLORS.lightGray,
              backgroundColor: COLORS.lightGray,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              paddingVertical: 14,
              paddingHorizontal: 18,
              fontFamily: "IRANSansXFaNumRegular",
              textAlign: "right",
            }}
            placeholder="...جستجو"
          />
        </View>

        {/* CATEGORIES */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 14,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            rowGap: 5,
          }}
        >
          {categoryList.map((i, index) => (
            <View
              key={index}
              style={{
                width: "24%",
                height: 78,
                backgroundColor: COLORS.lightGray,
                borderRadius: 10,
                padding: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Feather size={25} name={i.icon} color={COLORS.primary} />
              <Text
                style={{
                  fontFamily: "IRANSansXFaNumRegular",
                  textAlign: "center",
                  fontSize: 10,
                  color: COLORS.black70,
                }}
              >
                {i.title}
              </Text>
            </View>
          ))}
        </View>

        {/* ADS */}
        <View
          style={{
            height: 140,
            backgroundColor: COLORS.darkGray,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Feather size={25} name="image" color={COLORS.black} />
        </View>
      </View>

      {/* DISCOUNTS */}
      <View
        style={{
          backgroundColor: COLORS.lightBlue,
          paddingHorizontal: 10,
          paddingVertical: 12,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Feather name="clock" color={COLORS.white} size={20} />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "IRANSansXFaNumDemiBold",
                fontSize: 20,
                color: COLORS.white,
              }}
            >
              تخفیف های تکرارنشدنی
            </Text>

            <FontAwesome6
              name="fire-flame-curved"
              color={COLORS.yellow}
              size={30}
            />
          </View>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          style={{ marginTop: 20 }}
        >
          <UnRepeatedDiscountsCard />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
