import { COLORS } from "@/constants/config";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, Text, View } from "react-native";

const contentList = [
  {
    title: "سایز های موجود",
    content: "۳۸ | ۳۹ | ۴۰ | ۴۱",
  },
  {
    title: "جنس رویه",
    content: "پارچه",
  },
  {
    title: "میزان انعطاف‌پذیری",
    content: "زیاد",
  },
  {
    title: "مناسب برای فصل",
    content: "بهار | تابستان | پاییز | زمستان",
  },
];

export default function PDP() {
  return (
    <ScrollView>
      {/* HEADER */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 25,
          backgroundColor: COLORS.white,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.lighterGray,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 36,
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <FontAwesome name="commenting-o" size={24} color={COLORS.black} />
          <Ionicons
            name="share-social-outline"
            size={24}
            color={COLORS.black}
          />
          <FontAwesome name="bookmark-o" size={24} color={COLORS.black} />
        </View>

        <Feather name="chevron-right" size={32} />
      </View>

      {/* IMAGE */}
      <View
        style={{
          height: 285,
          backgroundColor: COLORS.darkGray,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather size={25} name="image" color={COLORS.black} />
      </View>

      {/* CONTENT */}
      <View
        style={{
          padding: 20,
          backgroundColor: COLORS.white,
          borderTopWidth: 4,
          borderTopColor: COLORS.primary,
        }}
      >
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 200,
            backgroundColor: COLORS.gray23,
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.black93,
              fontFamily: "IRANSansXFaNumMedium",
              fontSize: 22,
            }}
          >
            کفش نیوبالانس ۵۳۰ سبز نقره‌ای
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 4,
            marginTop: 25,
          }}
        >
          <FontAwesome name="star" size={16} color={COLORS.yellow} />
          <Text
            style={{
              color: COLORS.black,
              fontSize: 14,
              fontFamily: "IRANSansXFaNumRegular",
            }}
          >
            4.9
          </Text>
          <Text
            style={{
              color: COLORS.black60,
              fontSize: 12,
              fontFamily: "IRANSansXFaNumRegular",
            }}
          >
            (98)
          </Text>
        </View>

        <View style={{ marginTop: 4 }}>
          {contentList.map((i, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                borderBottomWidth: index !== contentList.length - 1 ? 1 : 0,
                borderBottomColor:
                  index !== contentList.length - 1
                    ? COLORS.black27
                    : "transparent",
                paddingVertical: 8,
              }}
            >
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: COLORS.black,
                    borderRadius: 6,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "IRANSansXFaNumRegular",
                    fontSize: 16,
                    color: COLORS.black65,
                  }}
                >
                  {i.title}
                </Text>
              </View>

              <Text
                style={{
                  flex: 1,
                  fontFamily: "IRANSansXFaNumRegular",
                  fontSize: 16,
                  color: COLORS.black,
                }}
              >
                {i.content}
              </Text>
            </View>
          ))}
        </View>

        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.black,
              fontSize: 20,
              fontFamily: "IRANSansXFaNumMedium",
            }}
          >
            ثبت سفارش
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 6,
            }}
          >
            <FontAwesome name="whatsapp" size={20} />
            <Text
              style={{
                color: COLORS.lightBlue,
                fontSize: 12,
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
            <FontAwesome name="instagram" size={20} />
            <Text
              style={{
                color: COLORS.lightBlue,
                fontSize: 12,
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
            <FontAwesome name="globe" size={20} />
            <Text
              style={{
                color: COLORS.lightBlue,
                fontSize: 12,
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
          padding: 12,
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: COLORS.lighterBlue,
          borderTopWidth: 1,
          borderTopColor: COLORS.borderColor,
        }}
      >
        <View
          style={{
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 200,
            backgroundColor: COLORS.blue,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 16,
              fontFamily: "IRANSansXFaNumRegular",
            }}
          >
            قابل پرداخت در دو قسط
          </Text>
        </View>

        <Text
          style={{
            color: COLORS.darkBlue,
            fontSize: 28,
            fontFamily: "IRANSansXFaNumRegular",
          }}
        >
          ۲,۸۵۰,۰۰۰
        </Text>
      </View>
    </ScrollView>
  );
}
