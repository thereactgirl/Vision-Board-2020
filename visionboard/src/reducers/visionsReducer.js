import { ADD_VISION } from "../actions";


const initialState = {
    visions : [
    {
      name: 'Clean Space',
      id: 1528817077286,
      completed: false
    },
    {
      name: 'Dress Well',
      id: 1528817084358,
      completed: false
    }
  ]
}

export function visionsReducer(state = initialState, action) {
    switch(action.type){
        case ADD_VISION: 
            const newVision =  {
                name: '',
                id: Date.now,
                completed: false
              }
              return {
                  ...state,
                  visions: [...state.visions, newVision]
              }
        default: 
        return state;
    }
}