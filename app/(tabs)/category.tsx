import { COLORS } from "@/constants/config";
import Feather from "@expo/vector-icons/Feather";
import { FlashList } from "@shopify/flash-list";
import { Text, TextInput, View } from "react-native";

const DATA = [
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
  {
    title: "مد و پوشاک",
    includes:
      "پوشاک زنانه | پوشاک مردانه | پوشاک بچگانه | کیف و کفش | لباس زیر و راحتی | مانتو و شال",
  },
];

export default function CategoryScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: COLORS.lightGray,
          backgroundColor: COLORS.lightGray,
          borderRadius: 10,
          paddingVertical: 14,
          paddingHorizontal: 18,
          fontFamily: "IRANSansXFaNumRegular",
          textAlign: "right",
          marginTop: 20,
          marginBottom: 25,
          marginHorizontal: 40,
        }}
        placeholder="...جستجو"
      />

      <FlashList
        scrollEnabled
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.black27,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontFamily: "IRANSansXFaNumMedium", fontSize: 14 }}
              >
                {item.title}
              </Text>

              <Feather name="chevron-left" size={16} color={COLORS.black65} />
            </View>

            <Text
              style={{
                fontFamily: "IRANSansXFaNumRegular",
                fontSize: 10,
                color: COLORS.black70,
                marginTop: 6,
              }}
            >
              {item.includes}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
