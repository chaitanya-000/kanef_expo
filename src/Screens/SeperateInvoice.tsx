import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import ImageZoom from "react-native-image-pan-zoom";

const SeperateInvoice = ({ route, navigation }: any) => {
  const [showOptions, setShowOptions] = useState(true);
  const [lastTap, setLastTap] = useState(0);
  const [scale, setScale] = useState(1);

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={Dimensions.get("window").width}
        imageHeight={Dimensions.get("window").height}
        onClick={() => setShowOptions(!showOptions)}
        maxOverflow={30}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: `https://kenaf.ie/OrgInvoice/${route.params.InvoiceLink}`,
          }}
          resizeMode="contain"
          resizeMethod="scale"
        />
      </ImageZoom>

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
