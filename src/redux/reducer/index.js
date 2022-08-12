import {combineReducers} from "redux"
import {addTravelMembers, booking_date_day, travelDetails} from "./reducer"

const rootReducer = combineReducers({
    addTravelMembers,
    booking_date_day,
    travelDetails
})

export default  rootReducer