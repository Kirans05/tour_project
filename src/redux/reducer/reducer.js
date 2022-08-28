const tourMembersNumbers = {
    adult:1,
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
    BookMonth : "",
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
    PromoCode:"",
    currencyCode:"INR"
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
       
        case "currencyCode" : 
            return {...state,currencyCode : action.payload};

        default : 
            return state
    }
}






// signupDetails information 
const signUpObject = {
    email:"",
    firstName:"",
    lastName:"",
    phoneNumber:"",
    password:"",
    phoneNumberCode:"India,+91"
}
export const signUpInfo = (state = signUpObject, action) => {
    switch(action.type){
        case "signupEmail" : 
            return {...state,email:action.payload}

        case "signupFirstName" :
            return {...state,firstName:action.payload}

        case "signupLastName" : 
            return {...state,lastName:action.payload}

        case "signupPhoneNumber" : 
            return {...state,phoneNumber:action.payload}

        case "signupPassword" : 
            return {...state,password:action.payload}

        case "phoneNumberCode" : 
            return {...state,phoneNumberCode:action.payload}

        default :
            return state

    }
}   


const userLoginDetails = {
    email:"",
    password:""
}
export const loginDetails = (state = userLoginDetails, action) => {
    switch(action.type){
        case "loginEmail" :
            return {...state, email:action.payload}
        
        case "loginPassword" :
            return {...state, password:action.payload}
        
        default :
            return state
    }
}


// total product array
const totalProductList = []
export const totalProductReducer = (state = totalProductList, action) => {
    switch(action.type){
        case "productList" : 
            return action.payload

        default :
            return state;
    }
}


// single Product information reducer
const singleProductObject = {}
export const singleProductReducer = (state = singleProductObject , action) => {
    switch(action.type){
        case "individualProduct" :
            return action.payload

        default :
        return state
    }
}



const currentUserObj = {};
export const currentUserReducer = (state = currentUserObj, action) => {
    switch(action.type){
        case "currentUserDetails": 
            return action.payload

        default : 
            return state
    }
}


const addCartItemArray = []
export const cratItemReducer = (state = addCartItemArray, action) => {
    switch(action.type){
        case "addCartItem" : 
            return action.payload
        default :
            return state
    }

}



//  duplicate product list for filtering purpose 
const displayProduct = []
export const displayProductReducer = (state = displayProduct, action) => {
    switch(action.type) {
        case "addProductList" : 
            return action.payload
        default :
            return state
    }
}



//  all list of counrties for filterting purpose
const countryListArr = []
export const countryListReducer = (state = countryListArr, action) => {
    switch(action.type){
        case "countryList" :
            return action.payload
        default :
            return state
    }
}




const countryName = ""
export const filterProductByCityReducer = (state = countryName, action) => {
    switch(action.type){
        case "filterProduct":
            return action.payload
        default :
            return state
    }
} 
