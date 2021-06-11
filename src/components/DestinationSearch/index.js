import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component{
    state = {
        searchInput: ''
    }
    startSearch = event=>{
        this.setState({searchInput:event.target.value})
    }

    render(){
        const {initialDestinationsList} = this.props;
        const {searchInput} = this.state
        const searchResults = initialDestinationsList.filter(eachItem=>
            eachItem.name.toLowerCase().includes(searchInput.toLowerCase()))
        return(
            <div className="appBackground">
                <div className="destinationBackground">
                    <h1>Destination Search</h1>
                    <div class="searchBoxContainter">
                        <input type='search' placeholder="search" className="searchBox" onChange={this.startSearch}/>
                        <img
                        src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                        alt=" search icon"
                        className="icon"/>
                    </div>
                    <ul className="listItems">
                        {searchResults.map(eachItem => 
                            <DestinationItem key={eachItem.id} value={eachItem}/>
                            )}
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default DestinationSearch