import React from "react";
import { StyleSheet, View, TouchableOpacity,  } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Button, NativeBaseProvider, VStack, HStack, IconButton, Icon, Center, Text, Box, StatusBar } from "native-base";

var itemArray = new Array(9).fill('empty');

function AppBar(){
  return (
    <>
        <StatusBar backgroundColor="#38CC77" barStyle="light-content" />
        <Box safeAreaTop backgroundColor="#38CC77" />
        <HStack bg='#38CC77' px="1" py="3" justifyContent='center' alignItems='center'>
          <HStack space="4" alignItems='center'>
            <Text color="white" fontSize="25" fontWeight='bold'>Tic Tac Toe Game</Text>
          </HStack>
        </HStack>

    </>
  )
}

export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    isCross: false,
    winMessage: ""
  };
}

drawItem = itemNumber => {
  if (itemArray[itemNumber] === 'empty') {
    itemArray[itemNumber] = this.state.isCross;
    this.setState({ isCross: !itemArray[itemNumber] }, () => {})
  }

  this.winGame();
}

chooseItemIcon = itemNumber => {
  if (itemArray[itemNumber] !== 'empty') {
    return itemArray[itemNumber] ? 'cross' : 'circle'
  }

  return 'pencil';
}

chooseItemColor = itemNumber => {
  if (itemArray[itemNumber] !== 'empty') {
    return itemArray[itemNumber] ? 'red' : 'green'
  }

  return 'black';
}

resetGame = () => {
  itemArray.fill('empty');
  this.setState({ winMessage: '' })

  //force update to the component
  this.forceUpdate();
}

winGame = () => {
  if (
    itemArray[0] !== "empty" &&
    itemArray[0] == itemArray[1] &&
    itemArray[1] == itemArray[2]
  ) {
    this.setState({
      winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" Wins!")
    });
  } else if (
    itemArray[3] !== "empty" &&
    itemArray[3] == itemArray[4] &&
    itemArray[4] == itemArray[5]
  ) {
    this.setState({
      winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" Wins!")
    });
  } else if (
    itemArray[6] !== "empty" &&
    itemArray[6] == itemArray[7] &&
    itemArray[7] == itemArray[8]
  ) {
    this.setState({
      winMessage: (itemArray[6] ? "Cross" : "Circle").concat(" Wins!")
    });
  } else if (
    itemArray[0] !== "empty" &&
    itemArray[0] == itemArray[3] &&
    itemArray[3] == itemArray[6]
  ) {
    this.setState({
      winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win")
    });
  } else if (
    itemArray[1] !== "empty" &&
    itemArray[1] == itemArray[4] &&
    itemArray[4] == itemArray[7]
  ) {
    this.setState({
      winMessage: (itemArray[1] ? "Cross" : "Circle").concat(" Wins!")
    });
  } else if (
    itemArray[2] !== "empty" &&
    itemArray[2] == itemArray[5] &&
    itemArray[5] == itemArray[8]
  ) {
    this.setState({
      winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win")
    });
  } else if (
    itemArray[0] !== "empty" &&
    itemArray[0] == itemArray[4] &&
    itemArray[4] == itemArray[8]
  ) {
    this.setState({
      winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" Wins!")
    });
  } else if (
    itemArray[2] !== "empty" &&
    itemArray[2] == itemArray[4] &&
    itemArray[4] == itemArray[6]
  ) {
    this.setState({
      winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" Wins!")
    });
  }
};

render() {
  return (
    <NativeBaseProvider>
      <AppBar/>
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(0)}>
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)}>
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)}>
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)}>
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)}>
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)}>
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)}>
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)}>
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)}>
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        <Button style={styles.button} size="lg" variant="subtle">
          <Text style={styles.btnText}>Reset Game</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b3e6c0"
  },
  grid: {
    borderColor: '#fff',
    color: '#fff',
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row'
  },
  item: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 30,
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#38CC77',
    width: 350,
    margin: 20,
    padding: 10,
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold'
  }
})