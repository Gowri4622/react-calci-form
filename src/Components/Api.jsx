import React, { Component } from 'react'
import axios from 'axios'
import './Api.css'

export class Api extends Component {
constructor(props){
    super(props)
    this.state={
        characters : [],
        errorMessage: ''
    }
}
 componentDidMount(){
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response => {
        console.log(response)
     this.setState({characters:response.data.results})
    })
    .catch(error =>{
        console.log(error)
        this.setState({errorMessage: 'Error retrieving data'})
    })
 }

 
  render() {
    
    const {characters, errorMessage}=this.state

    return (
      <React.Fragment>  
       
      <div className='results'>
        {characters.length ? characters.map (character => <div>
    
            <img src={character.image} alt={character.name}/>
            <div className='details'>
            
                <h1>{character.name}</h1>
                <h3>{character.status} : {character.species}</h3>
            
            </div>
            </div>) : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
        </div>
        
        
        </React.Fragment>
     
       
     
    )
  }
}

export default Api