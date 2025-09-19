import { COLORS } from "@/constants/config";
import { useCategoryFindAll } from "@/requests/queries/useCategoryFindAll";
import Feather from "@expo/vector-icons/Feather";
import { FlashList } from "@shopify/flash-list";
import { Text, TextInput, View } from "react-native";

export default function CategoryScreen() {
  const { data, isFetching } = useCategoryFindAll();
  const DATA = data?.map((item) => ({
    id: item.id,
    title: item.name,
    includes: item.subcategories.join("، "),
  }));

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: COLORS.gray200,
          backgroundColor: COLORS.gray200,
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
              borderBottomColor: COLORS.black_alpha27,
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

              <Feather
                name="chevron-left"
                size={16}
                color={COLORS.black_alpha65}
              />
            </View>

            <Text
              style={{
                fontFamily: "IRANSansXFaNumRegular",
                fontSize: 10,
                color: COLORS.black_alpha70,
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
