import { COLORS } from "@/constants/config";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FlashList } from "@shopify/flash-list";
import { Dimensions, Text, View } from "react-native";

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
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

export default function ProfileScreen() {
  const numColumns = 2;
  const { width } = Dimensions.get("window");
  const cardSize = width / numColumns - 30;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 96, backgroundColor: COLORS.blue400 }} />
      <View style={{ paddingHorizontal: 14, flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-end",
            gap: 12,
            position: "relative",
            top: -60,
          }}
        >
          <View
            style={{
              width: 118,
              height: 118,
              borderRadius: 118,
              backgroundColor: COLORS.gray300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather size={25} name="image" color={COLORS.black} />
          </View>

          <View>
            <Text style={{ fontSize: 20, fontFamily: "IRANSansXFaNumRegular" }}>
              لیریتا | Lyrita
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 5,
              }}
            >
              <FontAwesome name="star" size={16} color={COLORS.yellow} />
              <Text
                style={{ fontFamily: "IRANSansXFaNumRegular", fontSize: 14 }}
              >
                4.8
              </Text>
              <Text
                style={{
                  fontFamily: "IRANSansXFaNumRegular",
                  fontSize: 14,
                  color: COLORS.black_alpha55,
                }}
              >
                (210)
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 15,
            position: "relative",
            top: -60,
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 8,
              backgroundColor: COLORS.gray300,
              borderRadius: 56,
              marginTop: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "IRANSansXFaNumRegular",
                fontSize: 14,
              }}
            >
              شمع‌های دست‌ساز
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 6,
              }}
            >
              <FontAwesome name="whatsapp" size={24} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "IRANSansXFaNumRegular",
                }}
              >
                +989034142753
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 6,
              }}
            >
              <FontAwesome name="instagram" size={24} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "IRANSansXFaNumRegular",
                }}
              >
                @sito_shoes
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 6,
              }}
            >
              <FontAwesome name="globe" size={24} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "IRANSansXFaNumRegular",
                }}
              >
                https://sitoshoes.com
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            position: "relative",
            top: -20,
            height: 1,
            backgroundColor: COLORS.black_alpha27,
          }}
        />

        <View
          style={{
            alignSelf: "flex-end",
            marginBottom: 25,
            paddingVertical: 2,
            paddingHorizontal: 12,
            borderRadius: 42,
            backgroundColor: COLORS.gray300,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "IRANSansXFaNumRegular",
              fontSize: 14,
              color: COLORS.blue400,
            }}
          >
            فروش ویژه
          </Text>
        </View>

        <FlashList
          numColumns={numColumns}
          data={DATA}
          renderItem={({ item }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: "auto",
              }}
            >
              <View
                style={{
                  width: cardSize,
                  height: 172,
                  borderRadius: 12,
                  backgroundColor: COLORS.gray700,
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

              <View style={{ marginTop: 10, marginBottom: 20 }}>
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
                    style={{
                      fontFamily: "IRANSansXFaNumRegular",
                      fontSize: 20,
                    }}
                  >
                    100,000
                  </Text>
                  <Text
                    style={{
                      fontFamily: "IRANSansXFaNumRegular",
                      fontSize: 10,
                    }}
                  >
                    تومان
                  </Text>
                </View>

                <Text
                  style={{
                    textDecorationLine: "line-through",
                    fontSize: 14,
                    fontFamily: "IRANSansXFaNumRegular",
                    color: COLORS.grayText,
                  }}
                >
                  ۲,۷۰۰,۰۰۰
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
