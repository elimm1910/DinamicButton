import {configureStore} from '@reduxjs/toolkit'

const initialState={

    className: 'normal',

}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ACTUALIZAR_CLASE':{
            return { ...state, className: action.className,}
        }
        default: {
            return state
        }
    }
}

const store = configureStore({
    reducer: reducer,
});
  
export default store;