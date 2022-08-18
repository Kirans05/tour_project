import {combineReducers} from "redux"
import {addTravelMembers, booking_date_day, travelDetails, signUpInfo, loginDetails, totalProductReducer} from "./reducer"

const rootReducer = combineReducers({
    addTravelMembers,
    booking_date_day,
    travelDetails,
    signUpInfo,
    loginDetails,
    totalProductReducer
})

export default  rootReducer