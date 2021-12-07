import React from "react";
import "./SearchBox.css"
import PropTypes from "prop-types"

class SearchBox extends React.Component{
    constructor(){
        super();
        this.state = {
            searchKey:""
        };
    }
    onInputChange=(e)=>{
        this.setState({searchKey: e.target.value})
    }
    onClickSubmit = () => {
        this.props.onSubmit(this.state.searchKey);
    }
    render(){
        return(
        <div className="container searchBox">
        <input type="text" placeholder="Search" onChange={this.onInputChange}/>
        <button onClick={this.onClickSubmit}>
            {'>'}
        </button>
    </div>
        );}
}
SearchBox.propTypes={
    onSubmit: PropTypes.func.isRequired
}

export default SearchBox;
