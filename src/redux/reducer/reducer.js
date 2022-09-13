import Amsterdam1 from "../../assets/amsterdam/amsterdam1.jpg"
import Amsterdam2 from "../../assets/amsterdam/amsterdam2.jpg"
import Amsterdam3 from "../../assets/amsterdam/amsterdam3.jpg"
import Amsterdam4 from "../../assets/amsterdam/amsterdam4.jpg"
import Amsterdam5 from "../../assets/amsterdam/amsterdam5.jpg"
import Amsterdam6 from "../../assets/amsterdam/amsterdam6.jpg"
import Amsterdam7 from "../../assets/amsterdam/amsterdam7.jpg"
import Amsterdam8 from "../../assets/amsterdam/amsterdam8.jpg"
import Amsterdam9 from "../../assets/amsterdam/amsterdam9.jpg"

// dubai images
import Dubai1 from "../../assets/dubai/dubai1.jpg"
import Dubai2 from "../../assets/dubai/dubai2.jpg"
import Dubai3 from "../../assets/dubai/dubai3.jpg"
import Dubai4 from "../../assets/dubai/dubai4.jpg"
import Dubai5 from "../../assets/dubai/dubai5.jpg"

// edenburgh images
import Edenburgh1 from "../../assets/edenburgh/edenburgh1.jpg"
import Edenburgh2 from "../../assets/edenburgh/edenburgh2.jpg"
import Edenburgh3 from "../../assets/edenburgh/edenburgh3.jpg"
import Edenburgh4 from "../../assets/edenburgh/edenburgh4.jpg"
import Edenburgh5 from "../../assets/edenburgh/edenburgh5.jpg"
import Edenburgh6 from "../../assets/edenburgh/edenburgh6.jpg"
import Edenburgh7 from "../../assets/edenburgh/edenburgh7.jpg"
import Edenburgh8 from "../../assets/edenburgh/edenburgh8.jpg"

// florence images
import Florence1 from "../../assets/florence/florence1.jpg"
import Florence2 from "../../assets/florence/florence2.jpg"
import Florence3 from "../../assets/florence/florence3.jpg"
import Florence4 from "../../assets/florence/florence4.jpg"
import Florence5 from "../../assets/florence/florence5.jpg"
import Florence6 from "../../assets/florence/florence6.jpg"
import Florence7 from "../../assets/florence/florence7.jpg"


// istanbul images
import Istanbul1 from "../../assets/istanbul/istanbul1.jpg"
import Istanbul2 from "../../assets/istanbul/istanbul2.jpg"
import Istanbul3 from "../../assets/istanbul/istanbul3.jpg"
import Istanbul4 from "../../assets/istanbul/istanbul4.jpg"
import Istanbul5 from "../../assets/istanbul/istanbul5.jpg"

// krakow
//  krakow imamges
import Krakow1 from "../../assets/krakow/krakow1.jpg"
import Krakow2 from "../../assets/krakow/krakow2.jpg"
import Krakow3 from "../../assets/krakow/krakow3.jpg"
import Krakow4 from "../../assets/krakow/krakow4.jpg"
import Krakow5 from "../../assets/krakow/krakow5.jpg"
import Krakow6 from "../../assets/krakow/krakow6.jpg"
import Krakow7 from "../../assets/krakow/krakow7.jpg"
import Krakow8 from "../../assets/krakow/krakow8.jpg"


// london images
import London1 from "../../assets/london/london1.jpg"
import London2 from "../../assets/london/london2.jpg"
import London3 from "../../assets/london/london3.jpg"
import London4 from "../../assets/london/london4.jpg"
import London5 from "../../assets/london/london5.jpg"
import London6 from "../../assets/london/london6.jpg"
import London7 from "../../assets/london/london7.jpg"
import London8 from "../../assets/london/london8.jpg"

// raykjavik images
import Raykjavik1 from "../../assets/raykjavik/raykjavik1.jpg"
import Raykjavik2 from "../../assets/raykjavik/raykjavik2.jpg"
import Raykjavik3 from "../../assets/raykjavik/raykjavik3.jpg"
import Raykjavik4 from "../../assets/raykjavik/raykjavik4.jpg"
import Raykjavik5 from "../../assets/raykjavik/raykjavik5.jpg"
import Raykjavik6 from "../../assets/raykjavik/raykjavik6.jpg"
import Raykjavik7 from "../../assets/raykjavik/raykjavik7.jpg"
import Raykjavik8 from "../../assets/raykjavik/raykjavik8.jpg"

//  rome images
import Rome1 from "../../assets/rome/romeImage1.jpg"
import Rome2 from "../../assets/rome/romeImage2.jpg"
import Rome3 from "../../assets/rome/romeImage3.jpg"
import Rome4 from "../../assets/rome/romeImage4.jpg"
import Rome5 from "../../assets/rome/romeImage5.jpg"
import Rome6 from "../../assets/rome/romeImage6.jpg"
import Rome7 from "../../assets/rome/romeImage7.jpg"
import Rome8 from "../../assets/rome/romeImage8.jpg"

// venice images
import Venice1 from "../../assets/venice/venice1.jpg"
import Venice2 from "../../assets/venice/venice2.jpg"
import Venice3 from "../../assets/venice/venice3.jpg"
import Venice4 from "../../assets/venice/venice4.jpg"
import Venice5 from "../../assets/venice/venice5.jpg"
import Venice6 from "../../assets/venice/venice6.jpg"
import Venice7 from "../../assets/venice/venice7.jpg"



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
    currencyCode:"GBP",
    currencyValue:1,
    webSiteLanguage:localStorage.getItem("lang") == null ? "EN" : localStorage.getItem("lang")
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

        case "currencyConversion" :
            return {...state,currencyValue:action.payload}
        
        case "websiteLanguage" :
            return {...state,webSiteLanguage:action.payload}

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









const imageObj = {
    amsterdam:["Amsterdam1", "Amsterdam2", "Amsterdam3", "Amsterdam4", "Amsterdam5", "Amsterdam6", "Amsterdam7", "Amsterdam8", "Amsterdam9"],
    dubai:["Dubai1", "Dubai2", "Dubai3", "Dubai4", "Dubai5"],
    edenburgh:["Edenburgh1", "Edenburgh2", "Edenburgh3", "Edenburgh4", "Edenburgh5", "Edenburgh6", "Edenburgh7", "Edenburgh8"],
    florence:["Florence1", "Florence2", "Florence3", "Florence4", "Florence5", "Florence6", "Florence7"],
    istanbul:["Istanbul1", "Istanbul2", "Istanbul3", "Istanbul4", "Istanbul5"],
    krakow:["Krakow1", "Krakow2", "Krakow3", "Krakow4", "Krakow5", "Krakow6", "Krakow7", "Krakow8"],
    london:["London1", "London2", "London3", "London4", "London5", "London6", "London7", "London8"],
    raykjavik: ["Raykjavik1", "Raykjavik2", "Raykjavik3", "Raykjavik4", "Raykjavik5", "Raykjavik6", "Raykjavik7", "Raykjavik8"],
    rome:["Rome1", "Rome2", "Rome3", "Rome4", "Rome5", "Rome6", "Rome7", "Rome8"],
    venice:["Venice1", "Venice2", "Venice3", "Venice4", "Venice5", "Venice6", "Venice7"]
}
export const productImageReducer = (state = imageObj, action) => {
    switch(action.type){
    case "london" :
            return {...imageObj, london : action.payload}
    case "amsterdam" :
            return {...imageObj, amsterdam : action.payload}
    case "dubai" :
            return {...imageObj, dubai : action.payload}
    case "edenburgh" :
            return {...imageObj, edenburgh : action.payload}
    case "florence" :
            return {...imageObj, florence : action.payload}
    case "istanbul" :
            return {...imageObj, istanbul : action.payload}
    case "krakow" :
            return {...imageObj, krakow : action.payload}
    case "raykjavik" :
            return {...imageObj, raykjavik : action.payload}
    case "rome" :
            return {...imageObj, rome : action.payload}
    case "venice" :
            return {...imageObj, venice : action.payload}
    default : 
        return state
    }
}



const selectedProductObj = {}
export const selectedBookedProductReducer = (state = selectedProductObj, action) => {
    switch(action.type){
        case "selectedProduct" : 
            return action.payload
        default :
            return state
    }
}



const verticalImage = {
    image : ""
}
export const verticalImagesReducer = (state= verticalImage, action) => {
    switch(action.type){
        case "VerticalImages" :
            return {...state,image:action.payload}
        
        default :
            return state
    }
}