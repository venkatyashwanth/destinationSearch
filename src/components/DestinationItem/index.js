import {Component} from 'react'
import './index.css'

class DestinationItem extends Component{
    render(){
        const {value} = this.props
        const {name,imgUrl} = value
        return(
            <li className='cardDetails'>
                <img
                src={imgUrl}
                alt={name}
                className="imageDim"
                />
                <p className="placeName">{name}</p>
            </li>
        )
    }
}

export default DestinationItem