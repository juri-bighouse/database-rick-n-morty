
import './App.css';
import React from 'react';
import Header from './Components/Header/Header.js';
import Grid from './Components/Grid/Grid.js';
import Pagina from './Components/Paginator/Paginator'
import SearchBox from './Components/SearchBox/SearchBox'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      searchKey:"",
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
    if(prevState.currentPage !== this.state.currentPage || 
      prevState.searchKey !== this.state.searchKey){
      this.fetchCharacters();
    }
  }
  fetchCharacters = async () =>{
    try{
      this.setState({isLoading:true})
      const url = new URL("https://rickandmortyapi.com/api/character")
      const params = {
        page:this.state.currentPage,
        name: this.state.searchKey
      }
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key,params[key])
      );
      const response = await fetch(url);
      const json = await response.json();

      
      this.setState({characters:json.results,totalPages:json.info.pages})
    }catch(e){
      console.log(e);
    }finally{
      this.setState({isLoading:false})
    }
  }
  onPaginatorChange = (nextPage) => {
    this.setState({currentPage:nextPage})
  }
  onSubmit=(searchKey) =>{
    this.setState({
      searchKey
    })
  }
  render(){
    const {characters,isLoading,currentPage,totalPages} = this.state;
    return (
    <div className="App">
     <Header />
     <SearchBox onSubmit={this.onSubmit}/>
     <Grid characters={characters} isLoading={isLoading}/>
     <Pagina currentPage={currentPage} onChange={this.onPaginatorChange} totalPages={totalPages}/>
    </div>
  );
}
}

export default App;
