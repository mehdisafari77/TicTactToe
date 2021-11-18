import React from "react";
import { StyleSheet } from "react";
import { VStack, HStack, Avatar, Image, Text, NativeBaseProvider, Center } from "native-base";

function CardComponent(){

 return<VStack m={2} space={4} border={1} borderRadius="md">
      <HStack alignItems="center" px={4} pt={2}>
        <Avatar borderWidth={1} size="lg"/>
        <VStack ml={2} space={2}>
          <Text fontSize="lg" bold underline>
            Mehdi
          </Text>
          <Text>10.22.2021</Text>
        </VStack>
      </HStack>
      <Image
        source={{
          uri:
            "https://images.pexels.com/photos/8681710/pexels-photo-8681710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        }} style={{height:400, width: 700}}
        alt="NativeBase logo"
      ></Image>
      <VStack px={4} pb={4}>
        <Text>
          NativeBase <Text bold>v3</Text> a universal Design System for Mobile
          Web built for React Native and React with the same API. Ships a bunch
          of components for most of the use-cases that includes Button, AppBar,
          Dialog, Modal and what not.
        </Text>
      </VStack>
    </VStack>
}


export default function () {

  return (
  <NativeBaseProvider>
    <Center flex={1}>
      <CardComponent/>
    </Center>
  </NativeBaseProvider>
  );
}

class AppComponent extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('https://sentry.io/data').then(res => {
      this.setState({ data: res.json() });
    });
  }
}