export const SHOW_DOGS = 'SHOW_DOGS'
export const SEARCH_DOG = 'SEARCH_DOG'
export const SEARCH_ID = 'SEARCH_ID'
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT'
export const SORT_BREED = 'SORT_BREED'
export const BREEDS = 'BREEDS'
export const GET_NEW_BREEDS = 'GET_NEW_BREEDS'


export function getNewBreeds() {
  console.log('esta entrando')
  return function(dispatch) {
      return fetch(`http://localhost:3001/dog`)
      .then((data)=> data.json())
      .then(json => {
          dispatch({type: GET_NEW_BREEDS, payload: json})
      })
  }

} 

export function showDogs () {
    return function(dispatch) {
        return fetch('http://localhost:3001/dogs')
        .then((data)=> data.json())
        .then((result) => {
          dispatch({type: SHOW_DOGS, payload: result})
          return result
        }) 
    }
}    


export function searchDog (name) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/dogs?name=${name}`)
        .then((data)=> data.json())
        .then((result) => dispatch({type: SHOW_DOGS, payload: result})) 
    }
    
}

export function searchID (id) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/dogs/${id}`)
        .then((data)=> data.json())
        .then((result) => dispatch({type: SEARCH_ID, payload: result})) 
        }
}

export function getTemperaments() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/temperament`)
        .then((data)=> data.json())
        .then(json => {
            dispatch({type: GET_TEMPERAMENT, payload: json})
        })
    }

}


export function sort(alfab, currentDogs) {
    let dogsSorter = [...currentDogs]
        // console.log(dogsSorter)
        dogsSorter.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if(alfab === 'A-Z-breed'){
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            }
            if(alfab === 'Z-A-breed'){
                if (nameA < nameB) {
                  return 1;
                }
                if (nameA > nameB) {
                  return -1;
                }
                return 0;
            }          

          });
        //   console.log(dogsSorter)
        return function(dispatch) {
            dispatch({type: SORT_BREED, payload: dogsSorter});
        }

 }

export function sortWeight (weight, currentDogs) {
    let dogsSorter = [...currentDogs]

        dogsSorter.sort(function(a, b) {
            var auxA = [...a.weight.imperial]
            var auxB = [...b.weight.imperial]
            var nameA = auxA.slice(auxA.length - 3 , auxA.length).join().replace(/\D+/g, "") ; // ignore upper and lowercase
            var nameB = auxB.slice(auxB.length - 3 , auxB.length).join().replace(/\D+/g, ""); // ignore upper and lowercase
           
            
            console.log(nameA, nameB)
            
            if(weight === 'Heaviest'){
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
            }
            if(weight === 'Lightest'){
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
            }          

          });
          console.log(dogsSorter)
        return function(dispatch) {
            dispatch({type: SORT_BREED, payload: dogsSorter});
        }

}



export function filterBreed (currentDogs, breed) {
  console.log(breed)

  let dogFilter = [...currentDogs]
  dogFilter = dogFilter.filter(current => {
    if(current.name){
      let dogTemp = current.name
      // console.log(dogTemp)
      return dogTemp === breed;
    } else {
        return false;
    }
})
  return function(dispatch) {
    dispatch({type: SORT_BREED, payload: dogFilter});
  }
}

export function breedsList () {
  return function(dispatch) {
      return fetch(`http://localhost:3001/dogs`)
      .then((data)=> data.json())
      .then(json => {
          dispatch({type: BREEDS, payload: json.map((dog) => dog.name)})
      })
  }

}

export function filterTemp (currentDogs, temperament) {
  // console.log(temperament)

  let dogFilter = [...currentDogs]
  dogFilter = dogFilter.filter(current => {
    if(current.temperament){
      let dogTemp = current.temperament.split(', ')
      // console.log(dogTemp)
      return dogTemp.includes(temperament);
    } else {
        return false;
    }
})
  return function(dispatch) {
    dispatch({type: SORT_BREED, payload: dogFilter});
  }
}