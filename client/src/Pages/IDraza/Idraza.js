import React, { useEffect, useState } from 'react'
import { searchID } from '../../actions/index';
import { connect } from 'react-redux';
import './Idraza.css'
import Navbar from '../../Components/Navbar'
import { NavLink } from 'react-router-dom';
import Footer from '../../Components/Footer';


function Idraza(props) {

  useEffect(() => {
    props.searchID(props.match.params.id)
    console.log('entro', props.dogDetails) 
    
    }, []);
    
 
    return (

    
        <div className = 'TheDogContainer'>
            <Navbar />
              {props.dogDetails? 
              
                <div className = 'TheDog'>
                  <h1 className = 'TheDogName'>{props.dogDetails.name}</h1>
                          
                  <img className='TheDogPic' src={`https://cdn2.thedogapi.com/images/${props.dogDetails && props.dogDetails.reference_image_id}.jpg`} alt='Error finding dog image' />
                              
                  <p className = 'TheDogDetails'>Temperament : {props.dogDetails.temperament}</p>
                  <p className = 'TheDogDetails'>Height : {props.dogDetails.height? props.dogDetails.height.imperial : 'Not existent'}</p>
                  <p className = 'TheDogDetails'>Weight : {props.dogDetails.weight? props.dogDetails.weight.imperial : 'Not existent'}</p>                    
                  <p className = 'TheDogDetails'>Life Span : {props.dogDetails.life_span}</p>
                  <p className = 'TheDogDetails'>Origin : {props.dogDetails.origin}</p>
                </div>
              
                : <h1>Oops, we had a problem finding this dog!</h1>
                
              }

              <Footer />

        </div>
    )
    
}




  
function mapStateToProps(state) {
  return {
      dogDetails: state.dogDetails
  }
}

function mapDispatchToProps(dispatch) {
  return {
      searchID : dog => dispatch(searchID(dog))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Idraza)
