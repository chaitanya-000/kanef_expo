import {
  Image,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Ionicons } from "@expo/vector-icons";

const SeperateInvoice = ({ route, navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [lastTap, setLastTap] = useState(0);
  const [scale, setScale] = useState(1);

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap && now - lastTap < 300) {
      const newScale = scale === 1 ? 2.1 : 1;
      setScale(newScale);
      setShowOptions(false);
    } else {
      setShowOptions(!showOptions);
      setLastTap(now);
    }
  };
  return (
    <SafeAreaView>
      <Spinner visible={loading} />
      <Pressable onPress={handleDoubleTap}>
        <Image
          source={{
            uri: `https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`,
          }}
          style={{ width: "100%", height: "100%", transform: [{ scale }] }}
          resizeMode="contain"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </Pressable>
      {showOptions && (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 2454,
            width: "100%",
            height: "10%",
            backgroundColor: "#26ae60ed",
            opacity: 1,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              width: "13%",
              aspectRatio: 1,
              flexDirection: "row",
              marginLeft: "5%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginRight: "5%",
            }}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="arrow-back" size={50} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SeperateInvoice;
