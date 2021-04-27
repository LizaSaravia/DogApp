import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getNewBreeds} from '../../actions/index'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import './MyDogs.css'
import DogIncognito from '../../Images/dogincognito.jpg'

function MyDogs() {
    const newDoggies = useSelector(state => state.newBreeds)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewBreeds())
    }, [])

    return (
        <div className='MyDogsContainer'>
            <Navbar />
            {newDoggies && newDoggies.map((doggie) => (

                <div className = 'BoxInside'>
                    <img src={DogIncognito} className='MyDogPicture' />               
                    <p className='MyDogName'> {doggie.name}</p>
                    {/* <p>{doggie.temperaments.nameT}</p> */}

            </div>

            ))}
            <Footer className='MyDogFooter'/>
        </div>
    )
}

export default MyDogs
