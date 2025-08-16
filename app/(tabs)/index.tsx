import DiscountCard from "@/components/DiscountCard";
import MostlyDiscountedStoresCard from "@/components/MostlyDiscountedStoresCard";
import MostlyFollowingStores from "@/components/MostlyFollowingStores";
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
    <ScrollView style={{ backgroundColor: COLORS.white }}>
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
              borderColor: COLORS.gray700,
              backgroundColor: COLORS.gray700,
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
              borderColor: COLORS.gray200,
              backgroundColor: COLORS.gray200,
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
                backgroundColor: COLORS.gray200,
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
                  color: COLORS.black_alpha70,
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
            backgroundColor: COLORS.gray700,
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
          backgroundColor: COLORS.blue300,
          paddingVertical: 12,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
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
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 10,
            paddingHorizontal: 10,
          }}
        >
          <UnRepeatedDiscountsCard />
          <UnRepeatedDiscountsCard />
          <UnRepeatedDiscountsCard />
          <UnRepeatedDiscountsCard />
          <UnRepeatedDiscountsCard />
        </ScrollView>
      </View>

      {/* MOSTLY DISCOUNTED STORES */}
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <View
            style={{
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              backgroundImage:
                "linear-gradient(90deg, #053B94 33.65%, #213B67 100%)",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              paddingHorizontal: 18,
              paddingVertical: 8,
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <FontAwesome6 name="percent" size={24} color={COLORS.yellow} />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontFamily: "IRANSansXFaNumDemiBold",
                textShadowColor: "#00000040",
                textShadowOffset: { width: 0, height: 4 },
                textShadowRadius: 4,
              }}
            >
              فروشگاه‌های پرتخفیف
            </Text>
          </View>

          <View
            style={{
              borderRadius: 20,
              backgroundColor: COLORS.gray300,
              paddingHorizontal: 10,
              paddingVertical: 4,
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 10, fontFamily: "IRANSansXFaNumRegular" }}>
              مشاهده همه
            </Text>
            <Feather name="chevron-left" size={10} />
          </View>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          style={{ marginTop: 20 }}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 10,
            paddingHorizontal: 10,
          }}
        >
          <MostlyDiscountedStoresCard />
        </ScrollView>
      </View>

      {/* MOSTLY FOLLOWING STORES */}
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <View
            style={{
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              backgroundImage:
                "linear-gradient(90deg, #053B94 33.65%, #213B67 100%)",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              paddingHorizontal: 18,
              paddingVertical: 8,
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <FontAwesome6 name="store" size={24} color={COLORS.yellow} />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontFamily: "IRANSansXFaNumDemiBold",
                textShadowColor: "#00000040",
                textShadowOffset: { width: 0, height: 4 },
                textShadowRadius: 4,
              }}
            >
              فروشگاه‌های پر‌طرفدار
            </Text>
          </View>

          <View
            style={{
              borderRadius: 20,
              backgroundColor: COLORS.gray300,
              paddingHorizontal: 10,
              paddingVertical: 4,
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 10, fontFamily: "IRANSansXFaNumRegular" }}>
              مشاهده همه
            </Text>
            <Feather name="chevron-left" size={10} />
          </View>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          style={{ marginTop: 20 }}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 10,
            paddingHorizontal: 10,
          }}
        >
          <MostlyFollowingStores />
          <MostlyFollowingStores />
          <MostlyFollowingStores />
          <MostlyFollowingStores />
          <MostlyFollowingStores />
        </ScrollView>
      </View>

      {/* DISCOUNT CARDS */}
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <View
            style={{
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              backgroundImage:
                "linear-gradient(90deg, #053B94 33.65%, #213B67 100%)",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              paddingHorizontal: 18,
              paddingVertical: 8,
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <FontAwesome6 name="ticket" size={24} color={COLORS.yellow} />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontFamily: "IRANSansXFaNumDemiBold",
                textShadowColor: "#00000040",
                textShadowOffset: { width: 0, height: 4 },
                textShadowRadius: 4,
              }}
            >
              فروشگاه‌های پر‌طرفدار
            </Text>
          </View>

          <View
            style={{
              borderRadius: 20,
              backgroundColor: COLORS.gray300,
              paddingHorizontal: 10,
              paddingVertical: 4,
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 10, fontFamily: "IRANSansXFaNumRegular" }}>
              مشاهده همه
            </Text>
            <Feather name="chevron-left" size={10} />
          </View>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          style={{ marginTop: 20 }}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 10,
            paddingHorizontal: 10,
          }}
        >
          <DiscountCard />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
