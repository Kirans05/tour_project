import {combineReducers} from "redux"
import {addTravelMembers, booking_date_day, travelDetails, signUpInfo, loginDetails, totalProductReducer, currentUserReducer, singleProductReducer, cratItemReducer} from "./reducer"

const rootReducer = combineReducers({
    addTravelMembers,
    booking_date_day,
    travelDetails,
    signUpInfo,
    loginDetails,
    totalProductReducer,
    currentUserReducer,
    singleProductReducer,
    cratItemReducer
})

export default  rootReducer