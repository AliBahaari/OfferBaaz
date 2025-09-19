import { COLORS } from "@/constants/config";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

const tabsList: {
  name: string;
  title: string;
  icon: FeatherIconName;
}[] = [
  {
    name: "profile",
    title: "پروفایل من",
    icon: "user",
  },
  {
    name: "myStore",
    title: "مغازه من",
    icon: "shopping-cart",
  },
  {
    name: "search",
    title: "جستجو",
    icon: "search",
  },
  {
    name: "saved",
    title: "ذخیره‌ها",
    icon: "save",
  },
  {
    name: "category",
    title: "دسته‌بندی‌ها",
    icon: "list",
  },
  {
    name: "index",
    title: "خانه",
    icon: "home",
  },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 5,
          fontFamily: "IRANSansXFaNumBold",
        },
      }}
    >
      {tabsList.map((i, index) => (
        <Tabs.Screen
          key={index}
          name={i.name}
          options={{
            title: i.title,
            tabBarIcon: ({ color }) => (
              <Feather size={25} name={i.icon} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
