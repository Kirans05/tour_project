
//  adding adults number for tour
export const addAdults = (payload) => {
    return {
        type:"addAdult",
        payload
    }
}

//  removing adults number for tour
export const removeAdults = (payload) => {
    return {
        type:"removeAdult",
        payload
    }
}

//  adding child number for tour
export const addChild = (payload) => {
    return {
        type:"addChild",
        payload
    }
}

//  removing adults number for tour
export const removeChild = (payload) => {
    return {
        type:"removeChild",
        payload
    }
}


// tourBookingDate
export const tourBookingDate = (payload) => {
    const splitItems = payload.toString().split(" ")
    const [BookDay, BookMonth, BookDate, BookYear, BookTime ] = splitItems
    return {
        type:"booking_date_day",
        payload:{
            BookDate,
            BookDay,
            BookMonth,
            BookYear,
            BookTime
        }
    }
}



// travelerDetails
// firstName
export const addFirstName = (payload) => {
    return {
        type:"firstName",
        payload
    }
} 

// LastName
export const addLastName = (payload) => {
    return {
        type:"lastName",
        payload
    }
}


// specialRequirements
export const specialRequirements = (payload) => {
    return {
        type:"specialRequirements",
        payload
    }
}


// CardholderName
export const CardholderName = (payload) => {
    return {
        type:"CardholderName",
        payload
    }
}


// CreditCardNumber
export const CreditCardNumber = (payload) => {
    return {
        type:"CreditCardNumber",
        payload
    }
}

// ExpirationMonth
export const ExpirationMonth = (payload) => {
    return {
        type:"ExpirationMonth",
        payload
    }
}

// Expirayyear
export const Expirayyear = (payload) => {
    return {
        type:"Expirayyear",
        payload
    }
}

// SecurityCode
export const SecurityCode = (payload) => {
    return {
        type:"SecurityCode",
        payload
    }
}

// Country
export const Country = (payload) => {
    return {
        type:"Country",
        payload
    }
}


// SaveCreditCard
export const SaveCreditCard = (payload) => {
    return {
        type:"SaveCreditCard",
        payload
    }
}

// EmailAddress
export const EmailAddress = (payload) => {
    return {
        type:"EmailAddress",
        payload
    }
}

// PhoneNumber
export const PhoneNumber = (payload) => {
    return {
        type:"PhoneNumber",
        payload
    }
}

// PromoCode
export const PromoCode = (payload) => {
    return {
        type:"PromoCode",
        payload
    }
}

// countryCode
export const countryCode = (payload) => {
    return {
        type:"countryCode",
        payload
    }
}