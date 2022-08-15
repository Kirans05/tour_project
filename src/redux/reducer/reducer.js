const tourMembersNumbers = {
    adult:2,
    child:0
}

export const addTravelMembers = (state = tourMembersNumbers, action) => {
    switch(action.type) {
        case "addAdult" : 
            return {...state, adult: state.adult + action.payload}
        
         case "removeAdult" : 
            return {...state, adult: state.adult - action.payload}
        
        case "addChild" : 
            return {...state,child: state.child + action.payload}

        case "removeChild" : 
            return {...state,child: state.child - action.payload}
        
        default : 
            return state
    }
}


// booking date, day & time etc
const date_day_details = {
    BookDate : "",
    BookDay : "",
    BookMonth :"",
    BookYear : "",
    BookTime : ""
}
export const booking_date_day = (state= date_day_details, action) => {
    switch(action.type){
        case  "booking_date_day":
            return action.payload

    default :
        return state
    }
}




// traveler details along with credit card details
const travelDetailsRecord = {
    LeadTravelerFirstName:"",
    LeadTravelerLastName:"",
    specialRequirements: "",
    CardholderName:"",
    CreditCardNumber:"",
    ExpirationMonth:"",
    Expirayyear:"",
    SecurityCode:"",
    Country:"India",
    SaveCreditCard:false,
    EmailAddress:"",
    PhoneNumber:"",
    countryCode:"",
    PromoCode:""
}
export const travelDetails = (state = travelDetailsRecord, action) => {
    switch(action.type){
        case "firstName" : 
            return {...state, LeadTravelerFirstName : action.payload};

        case "lastName" : 
            return {...state,LeadTravelerLastName : action.payload};

        case "specialRequirements" : 
            return {...state,specialRequirements : action.payload};

        case "CardholderName" : 
            return {...state,CardholderName : action.payload};

        case "CreditCardNumber" : 
            return {...state,CreditCardNumber : action.payload};

        case "ExpirationMonth" : 
            return {...state,ExpirationMonth : action.payload};

        case "Expirayyear" : 
            return {...state,Expirayyear : action.payload};

        case "SecurityCode" : 
            return {...state,SecurityCode : action.payload};

        case "Country" : 
            return {...state,Country : action.payload};

        case "SaveCreditCard" : 
            return {...state,SaveCreditCard : action.payload};

        case "SecurityCode" : 
            return {...state,SecurityCode : action.payload};

        case "EmailAddress" : 
            return {...state,EmailAddress : action.payload};

        case "PhoneNumber" : 
            return {...state,PhoneNumber : action.payload};
        
         case "PromoCode" : 
            return {...state,PromoCode : action.payload};

        case "countryCode" : 
            return {...state,countryCode : action.payload};

        default : 
            return state
    }
}