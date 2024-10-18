import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import Filmes from "./src/Filmes";
import api from "./src/services/api";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      load:true
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get('/movie/popular?language=en-US&page=1');
      this.setState({
        filmes: response.data.results,
        load:false
      });
    } catch (error){
      console.error('Erro ao buscar filmes:', error);
    }
    
  }

  render() {
    if(this.state.load){
      return(
        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
          <ActivityIndicator color="blue" size={100} />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Filmes data={item} />}
          />
  
  
        </View>
      );
    }
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;