import { COLORS } from "@/constants/config";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Picker } from "@react-native-picker/picker";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const DATA = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

export default function SavedScreen() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingVertical: 22,
          paddingHorizontal: 18,
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          gap: 15,
        }}
      >
        <Feather name="arrow-right" size={32} color={COLORS.black} />

        <View
          style={{
            flex: 1,
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
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: 4,
          paddingHorizontal: 18,
          marginBottom: 20,
        }}
      >
        <FontAwesome name="bookmark" size={24} />
        <Text style={{ fontFamily: "IRANSansXFaNumMedium", fontSize: 18 }}>
          ذخیره‌ها
        </Text>
      </View>

      <FlashList
        scrollEnabled
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.black27,
            }}
          >
            <View
              style={{ display: "flex", flexDirection: "row-reverse", gap: 10 }}
            >
              <View
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 12,
                  backgroundColor: COLORS.darkGray,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: 50,
                    height: 40,
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
                      fontSize: 18,
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
                <Feather size={25} name="image" color={COLORS.black} />
              </View>

              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <Text
                  style={{ fontFamily: "IRANSansXFaNumMedium", fontSize: 15 }}
                >
                  ساعت رولکس
                </Text>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FontAwesome6 name="store" size={12} color={COLORS.purple} />
                  <Text
                    style={{
                      fontFamily: "IRANSansXFaNumUltraLight",
                      fontSize: 12,
                    }}
                  >
                    شیراز | مونا اکسسوری
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FontAwesome name="star" size={12} color={COLORS.yellow} />
                  <Text
                    style={{
                      fontFamily: "IRANSansXFaNumRegular",
                      fontSize: 12,
                    }}
                  >
                    4.5
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 4,
                }}
              >
                <Text
                  style={{ fontFamily: "IRANSansXFaNumRegular", fontSize: 20 }}
                >
                  100,000
                </Text>
                <Text
                  style={{ fontFamily: "IRANSansXFaNumRegular", fontSize: 10 }}
                >
                  تومان
                </Text>
              </View>

              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 14,
                  fontFamily: "IRANSansXFaNumRegular",
                  color: COLORS.gray,
                }}
              >
                ۲,۷۰۰,۰۰۰
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
