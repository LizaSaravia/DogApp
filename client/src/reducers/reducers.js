import { SHOW_DOGS, SEARCH_DOG, SEARCH_ID, GET_TEMPERAMENT, SORT_BREED, BREEDS, GET_NEW_BREEDS} from '../actions/index'


const initialState = {
    dogs :[],
    dogDetails: {},
    temperament: [],
    breeds: [],
    newBreeds: []

};



const todos = (state = initialState, action) => {
  switch(action.type) {

    case (SHOW_DOGS): {
      return {
          ...state,
          dogs: action.payload  
        }
    }

    
    case (GET_NEW_BREEDS):{
        return{
            ...state,
            newBreeds: action.payload
        }
    }

    case (SEARCH_DOG): {
        return {
            ...state,
            dogs: action.payload     
        }
    }

    case (SEARCH_ID): {
        return {
            ...state,
            dogDetails: action.payload
        }

    }

    case (GET_TEMPERAMENT): {
        return {
            ...state,
            temperament: action.payload
        }

    }

    case (SORT_BREED): {
        return{
            ...state,
            dogs: action.payload

        }
    }

    case (BREEDS): {
        return{
            ...state,
            breeds: action.payload

        }
    }

    



    default: return state
    }
  
}

export default todos;



