import {combineReducers} from "redux"
import {addTravelMembers, booking_date_day, travelDetails, signUpInfo, loginDetails, totalProductReducer, currentUserReducer, singleProductReducer, cratItemReducer, displayProductReducer, countryListReducer, filterProductByCityReducer, productImageReducer} from "./reducer"

const rootReducer = combineReducers({
    addTravelMembers,
    booking_date_day,
    travelDetails,
    signUpInfo,
    loginDetails,
    totalProductReducer,
    currentUserReducer,
    singleProductReducer,
    cratItemReducer,
    displayProductReducer,
    countryListReducer,
    filterProductByCityReducer,
    productImageReducer
})

export default  rootReducer