import React, { useEffect, useState } from 'react'
import './Home.css'
import { connect } from 'react-redux';
import { showDogs, searchDog, sort, sortWeight, getTemperaments, filterBreed, filterTemp, breedsList, getNewBreeds } from '../../actions/index';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import SearchIcon from '../../Images/search.svg'
import Footer from '../../Components/Footer'




function Home(props) {
    const [dog, setDog] = useState("");
    const[loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = props.dogs.slice(indexOfFirstDog, indexOfLastDog);
    const [newBreeds, setNewBreeds] = useState("");


    useEffect(() => {
        props.showDogs()
        props.getTemperaments()
        props.breedsList()
    }, []);
 

    const handleChange = (event) => {
        setDog(event.target.value);
    }

    const handleSubmit = (event) => {
        // console.log('Recibiendo')
        event.preventDefault();
        props.searchDog(dog);
    }

    const handleBreedChange = async (event) => {

        props.filterBreed( await props.showDogs(), event.target.value)

    }

    const handleBreedChangeDB = async (event) => {

        props.getNewBreeds()
        

    }


    const handleTemperamentChange = async (event) => {
        // console.log(await props.showDogs())
        props.filterTemp( await props.showDogs(), event.target.value)

    }


    return (
        <div className = 'container'>
            <Navbar />
            
        <div className = 'headers'>

            <div className = 'GroupDD'>
            <select onChange = {(e) => {
                if(e.target.value === 'A-Z-breed' || e.target.value === 'Z-A-breed' ){
                    props.sort(e.target.value, props.dogs)
                } else if(e.target.value === 'Heaviest' || e.target.value === 'Lightest') {

                    props.sortWeight(e.target.value, props.dogs)
                }            
            }}  className = 'DropDown'>

                <option value = 'A-Z-breed'>A-Z order</option>
                <option value = 'Z-A-breed'>Z-A order</option>
            </select>
         


            {/* <select name = 'name' onChange = {(event) => handleBreedChange(event)} className = 'DropDown' >
                <option>Select By Breed</option>
                    {props.breeds && props.breeds.map((breed) => {
                        return <option value = {breed} >{breed}</option>                    
                    })}
            </select> */}

            {/* <select name = 'name' onChange = {(event) => handleBreedChangeDB(event)} className = 'DropDown' >
                <option>Select between new Breeds</option>
                    {props.newBreeds && props.newBreeds.map((breed) => {
                        console.log(props.dogs[props.dogs.length -1])
                        return <option value = {breed.name} >{breed.name}</option>                    
                    })}
            </select> */}



            <select name = 'temperament' onChange = {(event) => handleTemperamentChange(event)} className = 'DropDown'>
                <option className ='tempDD'>Select By Temperament</option>
                    {props.temperament && props.temperament.map((temp) => {
                        return <option value = {temp.nameT} >{temp.nameT}</option>                    
                    })}
            </select>
            </div>
            
            <div className ='MyDogsDiv'>
                <a href='/newdogs'>
                <button className='MyDogsButton'>My Dogs</button>
                </a>
            </div>

            <div className = 'SearchBar'>
                <form onSubmit={handleSubmit}> 
                    <div className='SBDiv'>
                        <input
                        type="text"
                        value={dog}
                        onChange={handleChange}
                        placeholder='Search...'
                        className = 'searchInput'
                        />
                        <button className='btnSearch'>
                            <img
                                className='searchIcon'
                                src={SearchIcon}
                                alt="search icon"
                            />
                        </button>
                    </div>
                </form>

            </div>
            </div>

                <div className = 'NewDog'>
                    <p className='NDtext'>Didn't find the dog you were looking for?</p>
                    <a href = '/create'> Create a new breed!</a>
                </div>
          





            <div className = 'DogContainer'>
                {currentDogs.map( (dog, i) =>
                
                    <div  key = {i} className = 'BoxInside'>
                        <NavLink to={`/dogs/${dog.id}`} >
                        <img src={`https://cdn2.thedogapi.com/images/${dog && dog.reference_image_id}.jpg`} alt='Error finding dog image' className='doggies'/>
                        </NavLink>

                        <div className = 'textContainer'>
                            <div className = 'Breed'>
                            <NavLink to={`/dogs/${dog.id}`} className='navlink' >                   
                            <p> {dog.name}</p>
                            </NavLink>
                            </div>

                            <div className = 'Temperament'>
                            <p>{dog.temperament}</p>
                            </div>
                        </div>
                    </div>
                
                )}
                
            </div>
            

            <div className='PrevNext'>
                <button className = 'btnH' onClick = {() => {
                    setCurrentPage(currentPage - 1)
                }}>Previous</button>
                {currentPage > 1 ?
                <button className = 'btnH' onClick = {() => {
                    setCurrentPage(currentPage -1)
                }}>{currentPage - 1 }</button>
                :
                <></>
                }
                <button className = 'btnH' onClick = {() => {
                    setCurrentPage(currentPage)
                }}>{currentPage}</button>
                <button className = 'btnH' onClick = {() => {
                    setCurrentPage(currentPage + 1)
                }}>{currentPage +1 }</button>
                <button className = 'btnH' onClick = {() => {
                    setCurrentPage(currentPage + 1)
                }}>Next</button>
            </div>

            <Footer />

        </div>
    )
}

function mapStateToProps(state) {
    return {
      dogs: state.dogs,
      temperament: state.temperament,
      breeds : state.breeds,
    }
  }


function mapDispatchToProps(dispatch) {
    return {
      showDogs: dogs => dispatch(showDogs(dogs)),
      searchDog: dogs => dispatch(searchDog(dogs)),
      sort:(alfab, dogs) => dispatch(sort(alfab, dogs)),
      sortWeight:  (weight, dogs) => dispatch(sortWeight(weight, dogs)),
      getTemperaments: (elem) => dispatch(getTemperaments(elem)),
      filterTemp : (dogs, temperament) => dispatch(filterTemp(dogs, temperament)),
      filterBreed : (dogs, name) => dispatch(filterBreed(dogs, name)),
      breedsList : breeds => dispatch(breedsList(breeds)),
    }
  }

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);

