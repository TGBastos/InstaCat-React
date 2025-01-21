import React, {useState} from "react";
import {View, Text, Image,StyleSheet, TouchableOpacity} from "react-native";

const Post = ({file, count}) => {
  const [likeCount, setLike] = useState(count);

  const incrementLike = () => {
    setLike(likeCount + 1);
    }
  return (
   <View style={styles.container}>
      <Image style={styles.image} source={file}/>

      <TouchableOpacity onPress={incrementLike}>
        <Text>{likeCount} Like</Text>
      </TouchableOpacity> 
    
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  text: {
    fontSize: 22,
    color: "#0000FF",
  },
  image: {
    height: 200,
    width: 200,
  }
});

export default Post;