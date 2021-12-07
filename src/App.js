
import './App.css';
import React from 'react';
import Header from './Components/Header/Header.js';
import Grid from './Components/Grid/Grid.js';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      isLoading: false,
      characters:[]
    }
  }
  componentDidMount = () =>{
    this.fetchCharacters();
  }
  fetchCharacters = async () =>{
    try{
      this.setState({isLoading:true})
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      this.setState({characters:json.results})
    }catch(e){
      console.log(e);
    }finally{
      this.setState({isLoading:false})
    }
  }
  render(){
    const {characters,isLoading} = this.state;
    return (
    <div className="App">
     <Header />
     <Grid characters={characters} isLoading={isLoading}/>
    </div>
  );
}
}

export default App;
