
import './App.css';
import React from 'react';
import Header from './Components/Header/Header.js';
import Grid from './Components/Grid/Grid.js';
import Pagina from './Components/Paginator/Paginator'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      totalPages: 1,
      currentPage: 1,
      isLoading: false,
      characters:[]
    }
  }
  componentDidMount = () =>{
    this.fetchCharacters();
  }
  componentDidUpdate = (prevProps,prevState) =>{
    if(prevState.currentPage !== this.state.currentPage){
      this.fetchCharacters();
    }
  }
  fetchCharacters = async () =>{
    try{
      this.setState({isLoading:true})
      const response = await fetch('https://rickandmortyapi.com/api/character/?page='+ this.state.currentPage);
      const json = await response.json();
      this.setState({characters:json.results})
    }catch(e){
      console.log(e);
    }finally{
      this.setState({isLoading:false})
    }
  }
  onPaginatorChange = (nextPage) => {
    this.setState({currentPage:nextPage})
  }
  render(){
    const {characters,isLoading,currentPage,totalPages} = this.state;
    return (
    <div className="App">
     <Header />
     <Grid characters={characters} isLoading={isLoading}/>
     <Pagina currentPage={currentPage} onChange={this.onPaginatorChange} totalPages={totalPages}/>
    </div>
  );
}
}

export default App;
