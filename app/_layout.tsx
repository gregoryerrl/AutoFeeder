import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import fetchImageUrl from "./fetchImageUrl";

const Layout = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchImageUrl("path/to/your/image.jpg");
      setImageUrl(url);
    };
    loadImage();
  }, []);

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Layout;
