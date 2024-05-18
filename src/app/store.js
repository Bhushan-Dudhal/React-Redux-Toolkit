import {configureStore} from '@reduxjs/toolkit'
import { customReducer } from './Reducer'


export const store = configureStore({
    
        
        reducer: {
            custom:customReducer,
        }

})


export default store