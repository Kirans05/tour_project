import {
  Alert,
  Box,
  Button,
  Divider,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Imgae2 from "../../assets/images/img2.jpg";
import { RiVisaLine, RiRefund2Line } from "react-icons/ri";
import { SiAmericanexpress, SiMastercard } from "react-icons/si";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useSelector, useDispatch } from "react-redux";
import {booking_date_day, addTravelMembers, travelDetails, singleProductReducer, currentUserReducer} from "../../redux/reducer/reducer"
import { addFirstName, addLastName, CardholderName, Country, countryCode, CreditCardNumber, EmailAddress, ExpirationMonth, Expirayyear, PhoneNumber, PromoCode, SaveCreditCard, SecurityCode, specialRequirements } from "../../redux/action/index";
import axios from "axios"
import Header from "../HeaderComponents/Header";
import { Navigate, useNavigate } from "react-router-dom";
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import Footer from "../FooterComponents/Footer";



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


const Base_url = process.env.REACT_APP_Axios_Base_urls


const countries = [
    {
      "code": "+7 840",
      "name": "Abkhazia"
    },
    {
      "code": "+93",
      "name": "Afghanistan"
    },
    {
      "code": "+355",
      "name": "Albania"
    },
    {
      "code": "+213",
      "name": "Algeria"
    },
    {
      "code": "+1 684",
      "name": "American Samoa"
    },
    {
      "code": "+376",
      "name": "Andorra"
    },
    {
      "code": "+244",
      "name": "Angola"
    },
    {
      "code": "+1 264",
      "name": "Anguilla"
    },
    {
      "code": "+1 268",
      "name": "Antigua and Barbuda"
    },
    {
      "code": "+54",
      "name": "Argentina"
    },
    {
      "code": "+374",
      "name": "Armenia"
    },
    {
      "code": "+297",
      "name": "Aruba"
    },
    {
      "code": "+247",
      "name": "Ascension"
    },
    {
      "code": "+61",
      "name": "Australia"
    },
    {
      "code": "+672",
      "name": "Australian External Territories"
    },
    {
      "code": "+43",
      "name": "Austria"
    },
    {
      "code": "+994",
      "name": "Azerbaijan"
    },
    {
      "code": "+1 242",
      "name": "Bahamas"
    },
    {
      "code": "+973",
      "name": "Bahrain"
    },
    {
      "code": "+880",
      "name": "Bangladesh"
    },
    {
      "code": "+1 246",
      "name": "Barbados"
    },
    {
      "code": "+1 268",
      "name": "Barbuda"
    },
    {
      "code": "+375",
      "name": "Belarus"
    },
    {
      "code": "+32",
      "name": "Belgium"
    },
    {
      "code": "+501",
      "name": "Belize"
    },
    {
      "code": "+229",
      "name": "Benin"
    },
    {
      "code": "+1 441",
      "name": "Bermuda"
    },
    {
      "code": "+975",
      "name": "Bhutan"
    },
    {
      "code": "+591",
      "name": "Bolivia"
    },
    {
      "code": "+387",
      "name": "Bosnia and Herzegovina"
    },
    {
      "code": "+267",
      "name": "Botswana"
    },
    {
      "code": "+55",
      "name": "Brazil"
    },
    {
      "code": "+246",
      "name": "British Indian Ocean Territory"
    },
    {
      "code": "+1 284",
      "name": "British Virgin Islands"
    },
    {
      "code": "+673",
      "name": "Brunei"
    },
    {
      "code": "+359",
      "name": "Bulgaria"
    },
    {
      "code": "+226",
      "name": "Burkina Faso"
    },
    {
      "code": "+257",
      "name": "Burundi"
    },
    {
      "code": "+855",
      "name": "Cambodia"
    },
    {
      "code": "+237",
      "name": "Cameroon"
    },
    {
      "code": "+1",
      "name": "Canada"
    },
    {
      "code": "+238",
      "name": "Cape Verde"
    },
    {
      "code": "+ 345",
      "name": "Cayman Islands"
    },
    {
      "code": "+236",
      "name": "Central African Republic"
    },
    {
      "code": "+235",
      "name": "Chad"
    },
    {
      "code": "+56",
      "name": "Chile"
    },
    {
      "code": "+86",
      "name": "China"
    },
    {
      "code": "+61",
      "name": "Christmas Island"
    },
    {
      "code": "+61",
      "name": "Cocos-Keeling Islands"
    },
    {
      "code": "+57",
      "name": "Colombia"
    },
    {
      "code": "+269",
      "name": "Comoros"
    },
    {
      "code": "+242",
      "name": "Congo"
    },
    {
      "code": "+243",
      "name": "Congo, Dem. Rep. of (Zaire)"
    },
    {
      "code": "+682",
      "name": "Cook Islands"
    },
    {
      "code": "+506",
      "name": "Costa Rica"
    },
    {
      "code": "+385",
      "name": "Croatia"
    },
    {
      "code": "+53",
      "name": "Cuba"
    },
    {
      "code": "+599",
      "name": "Curacao"
    },
    {
      "code": "+537",
      "name": "Cyprus"
    },
    {
      "code": "+420",
      "name": "Czech Republic"
    },
    {
      "code": "+45",
      "name": "Denmark"
    },
    {
      "code": "+246",
      "name": "Diego Garcia"
    },
    {
      "code": "+253",
      "name": "Djibouti"
    },
    {
      "code": "+1 767",
      "name": "Dominica"
    },
    {
      "code": "+1 809",
      "name": "Dominican Republic"
    },
    {
      "code": "+670",
      "name": "East Timor"
    },
    {
      "code": "+56",
      "name": "Easter Island"
    },
    {
      "code": "+593",
      "name": "Ecuador"
    },
    {
      "code": "+20",
      "name": "Egypt"
    },
    {
      "code": "+503",
      "name": "El Salvador"
    },
    {
      "code": "+240",
      "name": "Equatorial Guinea"
    },
    {
      "code": "+291",
      "name": "Eritrea"
    },
    {
      "code": "+372",
      "name": "Estonia"
    },
    {
      "code": "+251",
      "name": "Ethiopia"
    },
    {
      "code": "+500",
      "name": "Falkland Islands"
    },
    {
      "code": "+298",
      "name": "Faroe Islands"
    },
    {
      "code": "+679",
      "name": "Fiji"
    },
    {
      "code": "+358",
      "name": "Finland"
    },
    {
      "code": "+33",
      "name": "France"
    },
    {
      "code": "+596",
      "name": "French Antilles"
    },
    {
      "code": "+594",
      "name": "French Guiana"
    },
    {
      "code": "+689",
      "name": "French Polynesia"
    },
    {
      "code": "+241",
      "name": "Gabon"
    },
    {
      "code": "+220",
      "name": "Gambia"
    },
    {
      "code": "+995",
      "name": "Georgia"
    },
    {
      "code": "+49",
      "name": "Germany"
    },
    {
      "code": "+233",
      "name": "Ghana"
    },
    {
      "code": "+350",
      "name": "Gibraltar"
    },
    {
      "code": "+30",
      "name": "Greece"
    },
    {
      "code": "+299",
      "name": "Greenland"
    },
    {
      "code": "+1 473",
      "name": "Grenada"
    },
    {
      "code": "+590",
      "name": "Guadeloupe"
    },
    {
      "code": "+1 671",
      "name": "Guam"
    },
    {
      "code": "+502",
      "name": "Guatemala"
    },
    {
      "code": "+224",
      "name": "Guinea"
    },
    {
      "code": "+245",
      "name": "Guinea-Bissau"
    },
    {
      "code": "+595",
      "name": "Guyana"
    },
    {
      "code": "+509",
      "name": "Haiti"
    },
    {
      "code": "+504",
      "name": "Honduras"
    },
    {
      "code": "+852",
      "name": "Hong Kong SAR China"
    },
    {
      "code": "+36",
      "name": "Hungary"
    },
    {
      "code": "+354",
      "name": "Iceland"
    },
    {
      "code": "+91",
      "name": "India"
    },
    {
      "code": "+62",
      "name": "Indonesia"
    },
    {
      "code": "+98",
      "name": "Iran"
    },
    {
      "code": "+964",
      "name": "Iraq"
    },
    {
      "code": "+353",
      "name": "Ireland"
    },
    {
      "code": "+972",
      "name": "Israel"
    },
    {
      "code": "+39",
      "name": "Italy"
    },
    {
      "code": "+225",
      "name": "Ivory Coast"
    },
    {
      "code": "+1 876",
      "name": "Jamaica"
    },
    {
      "code": "+81",
      "name": "Japan"
    },
    {
      "code": "+962",
      "name": "Jordan"
    },
    {
      "code": "+7 7",
      "name": "Kazakhstan"
    },
    {
      "code": "+254",
      "name": "Kenya"
    },
    {
      "code": "+686",
      "name": "Kiribati"
    },
    {
      "code": "+965",
      "name": "Kuwait"
    },
    {
      "code": "+996",
      "name": "Kyrgyzstan"
    },
    {
      "code": "+856",
      "name": "Laos"
    },
    {
      "code": "+371",
      "name": "Latvia"
    },
    {
      "code": "+961",
      "name": "Lebanon"
    },
    {
      "code": "+266",
      "name": "Lesotho"
    },
    {
      "code": "+231",
      "name": "Liberia"
    },
    {
      "code": "+218",
      "name": "Libya"
    },
    {
      "code": "+423",
      "name": "Liechtenstein"
    },
    {
      "code": "+370",
      "name": "Lithuania"
    },
    {
      "code": "+352",
      "name": "Luxembourg"
    },
    {
      "code": "+853",
      "name": "Macau SAR China"
    },
    {
      "code": "+389",
      "name": "Macedonia"
    },
    {
      "code": "+261",
      "name": "Madagascar"
    },
    {
      "code": "+265",
      "name": "Malawi"
    },
    {
      "code": "+60",
      "name": "Malaysia"
    },
    {
      "code": "+960",
      "name": "Maldives"
    },
    {
      "code": "+223",
      "name": "Mali"
    },
    {
      "code": "+356",
      "name": "Malta"
    },
    {
      "code": "+692",
      "name": "Marshall Islands"
    },
    {
      "code": "+596",
      "name": "Martinique"
    },
    {
      "code": "+222",
      "name": "Mauritania"
    },
    {
      "code": "+230",
      "name": "Mauritius"
    },
    {
      "code": "+262",
      "name": "Mayotte"
    },
    {
      "code": "+52",
      "name": "Mexico"
    },
    {
      "code": "+691",
      "name": "Micronesia"
    },
    {
      "code": "+1 808",
      "name": "Midway Island"
    },
    {
      "code": "+373",
      "name": "Moldova"
    },
    {
      "code": "+377",
      "name": "Monaco"
    },
    {
      "code": "+976",
      "name": "Mongolia"
    },
    {
      "code": "+382",
      "name": "Montenegro"
    },
    {
      "code": "+1664",
      "name": "Montserrat"
    },
    {
      "code": "+212",
      "name": "Morocco"
    },
    {
      "code": "+95",
      "name": "Myanmar"
    },
    {
      "code": "+264",
      "name": "Namibia"
    },
    {
      "code": "+674",
      "name": "Nauru"
    },
    {
      "code": "+977",
      "name": "Nepal"
    },
    {
      "code": "+31",
      "name": "Netherlands"
    },
    {
      "code": "+599",
      "name": "Netherlands Antilles"
    },
    {
      "code": "+1 869",
      "name": "Nevis"
    },
    {
      "code": "+687",
      "name": "New Caledonia"
    },
    {
      "code": "+64",
      "name": "New Zealand"
    },
    {
      "code": "+505",
      "name": "Nicaragua"
    },
    {
      "code": "+227",
      "name": "Niger"
    },
    {
      "code": "+234",
      "name": "Nigeria"
    },
    {
      "code": "+683",
      "name": "Niue"
    },
    {
      "code": "+672",
      "name": "Norfolk Island"
    },
    {
      "code": "+850",
      "name": "North Korea"
    },
    {
      "code": "+1 670",
      "name": "Northern Mariana Islands"
    },
    {
      "code": "+47",
      "name": "Norway"
    },
    {
      "code": "+968",
      "name": "Oman"
    },
    {
      "code": "+92",
      "name": "Pakistan"
    },
    {
      "code": "+680",
      "name": "Palau"
    },
    {
      "code": "+970",
      "name": "Palestinian Territory"
    },
    {
      "code": "+507",
      "name": "Panama"
    },
    {
      "code": "+675",
      "name": "Papua New Guinea"
    },
    {
      "code": "+595",
      "name": "Paraguay"
    },
    {
      "code": "+51",
      "name": "Peru"
    },
    {
      "code": "+63",
      "name": "Philippines"
    },
    {
      "code": "+48",
      "name": "Poland"
    },
    {
      "code": "+351",
      "name": "Portugal"
    },
    {
      "code": "+1 787",
      "name": "Puerto Rico"
    },
    {
      "code": "+974",
      "name": "Qatar"
    },
    {
      "code": "+262",
      "name": "Reunion"
    },
    {
      "code": "+40",
      "name": "Romania"
    },
    {
      "code": "+7",
      "name": "Russia"
    },
    {
      "code": "+250",
      "name": "Rwanda"
    },
    {
      "code": "+685",
      "name": "Samoa"
    },
    {
      "code": "+378",
      "name": "San Marino"
    },
    {
      "code": "+966",
      "name": "Saudi Arabia"
    },
    {
      "code": "+221",
      "name": "Senegal"
    },
    {
      "code": "+381",
      "name": "Serbia"
    },
    {
      "code": "+248",
      "name": "Seychelles"
    },
    {
      "code": "+232",
      "name": "Sierra Leone"
    },
    {
      "code": "+65",
      "name": "Singapore"
    },
    {
      "code": "+421",
      "name": "Slovakia"
    },
    {
      "code": "+386",
      "name": "Slovenia"
    },
    {
      "code": "+677",
      "name": "Solomon Islands"
    },
    {
      "code": "+27",
      "name": "South Africa"
    },
    {
      "code": "+500",
      "name": "South Georgia and the South Sandwich Islands"
    },
    {
      "code": "+82",
      "name": "South Korea"
    },
    {
      "code": "+34",
      "name": "Spain"
    },
    {
      "code": "+94",
      "name": "Sri Lanka"
    },
    {
      "code": "+249",
      "name": "Sudan"
    },
    {
      "code": "+597",
      "name": "Suriname"
    },
    {
      "code": "+268",
      "name": "Swaziland"
    },
    {
      "code": "+46",
      "name": "Sweden"
    },
    {
      "code": "+41",
      "name": "Switzerland"
    },
    {
      "code": "+963",
      "name": "Syria"
    },
    {
      "code": "+886",
      "name": "Taiwan"
    },
    {
      "code": "+992",
      "name": "Tajikistan"
    },
    {
      "code": "+255",
      "name": "Tanzania"
    },
    {
      "code": "+66",
      "name": "Thailand"
    },
    {
      "code": "+670",
      "name": "Timor Leste"
    },
    {
      "code": "+228",
      "name": "Togo"
    },
    {
      "code": "+690",
      "name": "Tokelau"
    },
    {
      "code": "+676",
      "name": "Tonga"
    },
    {
      "code": "+1 868",
      "name": "Trinidad and Tobago"
    },
    {
      "code": "+216",
      "name": "Tunisia"
    },
    {
      "code": "+90",
      "name": "Turkey"
    },
    {
      "code": "+993",
      "name": "Turkmenistan"
    },
    {
      "code": "+1 649",
      "name": "Turks and Caicos Islands"
    },
    {
      "code": "+688",
      "name": "Tuvalu"
    },
    {
      "code": "+1 340",
      "name": "U.S. Virgin Islands"
    },
    {
      "code": "+256",
      "name": "Uganda"
    },
    {
      "code": "+380",
      "name": "Ukraine"
    },
    {
      "code": "+971",
      "name": "United Arab Emirates"
    },
    {
      "code": "+44",
      "name": "United Kingdom"
    },
    {
      "code": "+1",
      "name": "United States"
    },
    {
      "code": "+598",
      "name": "Uruguay"
    },
    {
      "code": "+998",
      "name": "Uzbekistan"
    },
    {
      "code": "+678",
      "name": "Vanuatu"
    },
    {
      "code": "+58",
      "name": "Venezuela"
    },
    {
      "code": "+84",
      "name": "Vietnam"
    },
    {
      "code": "+1 808",
      "name": "Wake Island"
    },
    {
      "code": "+681",
      "name": "Wallis and Futuna"
    },
    {
      "code": "+967",
      "name": "Yemen"
    },
    {
      "code": "+260",
      "name": "Zambia"
    },
    {
      "code": "+255",
      "name": "Zanzibar"
    },
    {
      "code": "+263",
      "name": "Zimbabwe"
    }
  ]



  const Months = [
    {
      name:"Jan"
    },
    {
      name:"Feb"
    },
    {
      name:"Mar"
    },
    {
      name:"Apr"
    },
    {
      name:"May"
    },
    {
      name:"Jun"
    },
    {
      name:"Jul"
    },
    {
      name:"Aug"
    },
    {
      name:"Sep"
    },
    {
      name:"Oct"
    },
    {
      name:"Nov"
    },
    {
      name:"Dec"
    },
  ]


  let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]



const CheckOutPage = () => {

  const [productimage, setProductIamge] = useState(arr[Math.floor(Math.random()*arr.length)])


  const navigate = useNavigate()

  //  redux state and dispatch functions
  const travellerData = useSelector((state) => state.travelDetails)
  const memberPresentState = useSelector((state) => state.addTravelMembers)
  const booking_dateDetails = useSelector((state) => state.booking_date_day)
  const fullBookingDetails = useSelector((state) => state.travelDetails)
  const singleTourDetails = useSelector((state) => state.singleProductReducer)
  const currentUserDetails = useSelector((state) => state.currentUserReducer)
  const [SnakBarOpen, setSnakBarOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = useState("")
  const [alertMessageColor, setAlertMessageColor] = useState("warning")

  const item = singleTourDetails
  const [description, setDescription] = useState(item.city == "Turkey" ? item.description.substr(150,120) : item.description.substr(75,125))
     const [productImage1, setProductImage1] = useState(item.name == "Harry Potter Tour of Warner Bros. Studio with Transport from London" ? London1 : item.name == "Stonehenge, Windsor Castle, and Bath from London" ? London2 : item.name == "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock" ? London3 : item.name == "Westminster to Greenwich Sightseeing Thames Cruise in London" ? London4 : item.name == "Stonehenge and Bath Day Trip from London" ? London5 : item.name == "Buckingham Palace Tour Including Changing of the Guard Ceremony" ? London6 : item.name == "Windsor Castle, Stonehenge and Bath Tour from London with Admission" ? London7 : item.name == "Best of London Including Tower of London, Changing of the Guard, with a Cream Tea or London Eye Upgrade" ? London8 : item.name == "Skip-the-Line Vatican Museums & Sistine Chapel Group Tour" ? Rome1 : item.name == "Skip the Line: Colosseum Small Group Tour with Roman Forum & Palatine Hill" ? Rome2 : item.name == "Skip-the-Line: Vatican Museums & Sistine Chapel Guided Small-Group Tour" ? Rome3 : item.name == "Small-Group Tour of Colosseum Underground, Arena and Forum" ? Rome4 : item.name == "Pompeii, Amalfi Coast and Positano Guided Day Trip from Rome" ? Rome5 : item.name == "Colosseum VIP Gladiators access with Arena & Ancient Rome small group tour" ? Rome6 : item.name == "Tuscany Day Trip from Rome including 3-Course Lunch and Wine Tasting" ? Rome7 : item.name == "The Original Entire Vatican Tour & St. Peter's Dome Climb" ? Rome8 : item.name == "Auschwitz & Birkenau: Live-Guided Tour with Transportation and Hotel Pickup" ? Krakow1 : item.name == "Auschwitz-Birkenau Museum and Memorial Guided Tour from Krakow" ? Krakow2 : item.name == "Wieliczka Salt Mine Guided Tour from Krakow" ? Krakow3 : item.name == "Auschwitz-Birkenau and Wieliczka Salt Mine Guided One Day Tour" ? Krakow4 : item.name == "Zakopane Tour with Hot Bath Pools and Hotel Pickup" ? Krakow5 : item.name == "Krakow: Extreme Shooting Range with Hotel Pick-Up" ? Krakow6 : item.name == "From Krakow: Auschwitz-Birkenau Guided Tour, Pickup & Transfers" ? Krakow7 : item.name == "Wieliczka Salt Mine Guided Tour from Krakow with pick-up from Selected Hotels" ? Krakow8 :  null)
  
  

  const [productImage2, setProductImage2] = useState(item.name == "Pisa, Siena and San Gimignano Day Trip from Florence Including Lunch" ? Florence1 : item.name == "Small-Group Wine Tasting Experience in the Tuscan Countryside" ? Florence2 : item.name == "Tuscany in One Day Sightseeing Tour from Florence" ? Florence3 : item.name == "Cinque Terre Day Trip with Transport from Florence" ? Florence4 : item.name == "David & Accademia Gallery Tour - Florence (Reserved Entrance)" ? Florence5 : item.name == "Skip-the-Line Florence Highlights and David Walking Tour" ? Florence6 :  item.name == "Uffizi Gallery Small Group Tour with Guide" ? Florence7 : item.name == "Loch Ness, Glencoe and the Highlands Small-Group Day Tour from Edinburgh" ? Edenburgh1 : item.name == "Loch Ness, Scottish Highlands, Glencoe & Hairy Coos Tour from Edinburgh" ? Edenburgh2 : item.name == "Loch Ness, Glencoe & The Highlands Day Trip from Edinburgh" ? Edenburgh3 : item.name == "Edinburgh Castle Tour - Skip The Line Tickets Included" ? Edenburgh4 : item.name == "Underground Walking Tour in Edinburgh" ? Edenburgh5 : item.name == "Edinburgh Castle Guided Walking Tour - Tickets Incluided" ? Edenburgh6 :  item.name == "Isle of Skye, The Highlands and Loch Ness- 3 Day Group Tour from Edinburgh" ? Edenburgh7 : item.name == "Loch Lomond, Stirling Castle and the Kelpies from Edinburgh" ? Edenburgh8 : item.name == "Legendary Venice St. Mark's Basilica with Terrace Access & Doge's Palace" ? Venice1 : item.name == "Skip the Line Venice Doge's Palace and St. Mark's Basilica Tour - T23" ? Venice2 : item.name == "Murano, Burano and Torcello Half-Day Sightseeing Tour" ? Venice3 : item.name == "Venice Marco Polo Airport Link Arrival Transfer" ? Venice4 : item.name == "Venice: Grand Canal by Gondola with commentary" ? Venice5 : item.name == "Dolomite Mountains and Cortina Semi Private Day Trip from Venice" ? Venice6 :  item.name == "Venice Marco Polo Airport Private Arrival Transfer" ? Venice7 : null)


  const [productImage3, setProductImage3] = useState(item.name == "Golden Circle, Blue Lagoon Including Admission & Kerid Volcanic Crater" ? Raykjavik1 : item.name == "South Coast Full Day Tour by Minibus from Reykjavik" ? Raykjavik2 : item.name == "Whale Watching Cruise on a Superyacht in Reykjavik" ? Raykjavik3 : item.name == "Golden Circle Classic Day Trip from Reykjavik" ? Raykjavik4 : item.name == "Golden Circle & Glacier Snowmobiling Day Trip from Reykjavik" ? Raykjavik5 : item.name == "Snorkeling Between Continents in Silfra with Photos Included" ? Raykjavik6 : item.name == "Reykjavik Food Walk - Local Foodie Adventure in Iceland"? Raykjavik7 : item.name == "Golden Circle, Volcano Crater & Blue Lagoon Small Group Tour" ? Raykjavik8 : item.name == "Amsterdam Canal Cruise in Classic River Boat With Drinks & Dutch Cheese" ? Amsterdam1 : item.name == "Amsterdam Open Boat Canal Cruise - Live Guide - from Anne Frank House" ? Amsterdam2 : item.name == "All inclusive Canal Tour by Captain Jack (Traveller's Choice Award 2021)" ? Amsterdam3 : item.name == "Amsterdam Open Boat Tour With Live Guide and Unlimited Drinks" ? Amsterdam4 : item.name == "Volendam, Marken and Windmills Day Trip from Amsterdam" ? Amsterdam5 : item.name == "Giethoorn and Zaanse Schans Windmills Day Trip from Amsterdam" ? Amsterdam6 : item.name == "Day Trip to Zaanse Schans, Edam, Volendam and Marken from Amsterdam"? Amsterdam7 : item.name == "Amsterdam 1-Hour Canal Cruise from Central Station"  ? Amsterdam8 :  item.name == "Amsterdam Guided Evening Canal Cruise with Bar on Board" ? Amsterdam9 : null )


  const [productimage4, setProductimage4] = useState(item.name == "Best of Istanbul: 1, 2 or 3-Day Private Guided Istanbul Tour" ? Istanbul1 : item.name == "Bosphorus Sunset Cruise on Luxury Yacht" ? Istanbul2 : item.name == "Taste of Two Continents Food Tour" ? Istanbul3 : item.name == "Small Group Tour: Essential Istanbul" ? Istanbul4 : item.name == "Private Guided Istanbul Day Tour" ? Istanbul5 : item.name == "Dubai Marina Yacht Tour with Breakfast or BBQ Tour" ? Dubai1 : item.name == "Dubai Marina Dinner Cruise with Live Music" ? Dubai2 : item.name == "Dubai Luxury Canal Dinner Cruise" ? Dubai3 : item.name == "Inside Burj Al Arab - Experience a unique guided tour" ? Dubai4 : Dubai5)



  const date = booking_dateDetails.BookDate +"/ "+booking_dateDetails.BookMonth+ "/"+ booking_dateDetails.BookYear
  const dispatch = useDispatch(0)

  
  
  const [todayDate, setTodayDate] = useState(new Date().toLocaleDateString());
  const [currency, setCurrency] = React.useState("EUR");
  const [countryState, setCountryState] = useState("India")

    const [showPromoCode, setShowPromoCode] = useState(false)
  const [cardEexpiryMonth, setCardExpiryMonth] = useState("")


  const handleSnakBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnakBarOpen(false);
  };
  
  
    const handleChange = (event) => {
      dispatch(countryCode(event.target.value))
    setCurrency(event.target.value);
  };


  const handleCountryChange = (event) => {
    dispatch(Country(event.target.value))
  setCountryState(event.target.value);
};

const handleExpiryMonth = (e) => {
  dispatch(ExpirationMonth(e.target.value))
  setCardExpiryMonth(e.target.value)
} 



const submitHandler = async () => {

  if(fullBookingDetails.LeadTravelerFirstName == ""){
    setAlertMessage("Please Enter Traveler First Name")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.LeadTravelerLastName ==  ""){
    setAlertMessage("Please Enter Traveler Last Name")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.specialRequirements == ""){
    setAlertMessage("Please Enter Traveler Special Requirements")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.CardholderName== ""){
    setAlertMessage("Please Enter Card Holder Name")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.CreditCardNumber == ""){
    setAlertMessage("Please Enter Card Number")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.ExpirationMonth == ""){
    setAlertMessage("Please Enter Expiray Month")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.Expirayyear == ""){
    setAlertMessage("Please Enter Expiry Year")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.SecurityCode == ""){
    setAlertMessage("Please Enter Security Code")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.EmailAddress == ""){
    setAlertMessage("Please Enter Email Id")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.PhoneNumber == ""){
    setAlertMessage("Please Enter Phone Number")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.countryCode == ""){
    setAlertMessage("Please Enter Ciuntry Code")
    setSnakBarOpen(true)
  }else{

  

  let date = new Date();
  date.setDate(date.getDate()+2)


  let expirayMon = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(`${fullBookingDetails.ExpirationMonth}`) / 3 + 1

  let expiryYear =  `${fullBookingDetails.Expirayyear}`.slice(2)

  let amount = travellerData.currencyCode == "GBP" ? (memberPresentState.adult*singleTourDetails.price)+(memberPresentState.child*singleTourDetails.price) : (memberPresentState.adult*singleTourDetails.price*travellerData.currencyValue+memberPresentState.child*singleTourDetails.price*travellerData.currencyValue).toFixed(2)

  let options = {
    url:`${Base_url}/order/create`,
    method:"POST",
    headers:{
      "content-type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
    },
    data:{
      quantity:1,
      currency:`${travellerData.currencyCode}`,
      token:`${localStorage.getItem("accessToken")}`,
      userId:currentUserDetails.id,
      productId:singleTourDetails.id,
      amount,
      cardNumber:fullBookingDetails.CreditCardNumber.toString(),
      cardHolderName:fullBookingDetails.CardholderName,
      cardExpiry:`${expirayMon}/${expiryYear}`,
      cardCvv:fullBookingDetails.SecurityCode,
      fromDate:new Date().toLocaleDateString('en-CA'),
      toDate: date.toLocaleDateString('en-CA'),
      adultQty:memberPresentState.adult,
      childQty:memberPresentState.child
    }
  }
    try{
      setAlertMessageColor("success")
      let {data} = await axios(options)
      if(data.message == "Error processing order"){
        setAlertMessageColor("warning")
        setAlertMessage(data.message)
      }else{
        setAlertMessage(data.message)
      }
      setSnakBarOpen(true)
    }catch(error){
        console.log(error)
    }
    setTimeout(()=>{
      navigate("/")
    },4000)
  }
}





  return (
    <Box>
      <Header />
      <Box
        className="mainBody"
        sx={{
          width: { xs: "100%", md: "88%" },
          padding: { xs: "0%", md: "0% 6% 0% 6%" },
        }}
      >
        <Box className="1stPart">
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
            }}
          >
            Secure Checkout
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            Checkout securely — it takes only a few minutes
          </Typography>
        </Box>
        <Box
          className="2nd Part"
          sx={{
            width: { xs: "100%", md: "100%" },
            display:"flex",
            flexDirection:"row",
            columnGap:1,
            alignItems:"flex-start",
          }}
        >
          <Box
            className="leftPart"
            sx={{
              width: { xs: "100%", md: "65%" },
              padding: { xs: "1%", md: "1%" },
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            <Box className="1stLeftPart" 
            sx={{
                border: "2px solid #edebeb",
                padding:{xs:"2%",md:"2%"},
                display:"flex",
                flexDirection:"column",
                rowGap:2
            }}>

            
            <Box
              className="tourImage&Descriptions"
              sx={{
                display: "flex",
                flexDirection: {xs:"row-reverse",md:"row"},
                columnGap: 2,
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                component={"img"}
                 src={singleTourDetails.imageUrl }
                alt="tour image"
                sx={{
                  width: { xs: "120px", md: "200px" },
                  height:{xs:"100px"},
                  borderRadius: "20px",
                }}
              />
              <Box className="tourDescriptions"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  {!booking_dateDetails.BookDate ? todayDate : date }
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: "bold",
                  }}
                >
                  {singleTourDetails.name}
                </Typography>
                <Box className="time&Experience">
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    {description}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    This experience is hosted by a business.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider />

            <Box className="traveler Details" 
            sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:3
            }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16pxpx", md: "20px" },
                  fontWeight: "bold",
                }}
              >
                Traveler Details
              </Typography>
              <Typography
              sx={{
                fontSize:{xs:"14px",md:"16px"}
              }}
              >
                Information we need to confirm your tour or activity
              </Typography>
              <Box className="LeadTraveler" sx={{
                width:{xs:"100%",md:"100%"},
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}>
              <Typography
                  sx={{
                    fontSize:{xs:"16px",md:"20px"}
                  }}
                  >Lead Traveler (Adult)</Typography>
                <Box className="travelerDetails" sx={{
                    width:{xs:"100%",md:"100%"},
                    display:"flex",
                    flexDirection:{xs:"column",md:"row"},
                    justifyContent:"space-between",
                    rowGap:1
                }}>
                 
                  <Box className="firstName"
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-start",
                    justifyContent:"center",
                    rowGap:1,
                    width:{xs:"100%",md:"40%"},
                  }}
                  >
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"}
                      }}
                    >FirstName</Typography>
                    <TextField type={"text"} placeholder={"Enter FirstName"} fullWidth   onChange={(e) => dispatch(addFirstName(e.target.value))}  />
                  </Box>
                  <Box className="LastName"
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-start",
                    justifyContent:"center",
                    rowGap:1,
                    width:{xs:"100%",md:"40%"}
                  }}
                  >
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"}
                      }}
                    >                        
                        LastName</Typography>
                    <TextField type={"text"} placeholder={"Enter LastName"}  fullWidth   onChange={(e) => dispatch(addLastName(e.target.value))}  />
                  </Box>
                </Box>

              </Box>

              {/* tour Details */}
              <Box className="TourDetails"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}
              >
                <Typography
                sx={{
                    fontSize:{xs:"16px",md:"20px"},
                    fontWeight:"bold"
                }}
                >Tour Details</Typography>
                <Typography sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}>Special Requirements</Typography>
                <textarea rows={4} cols={40}  onChange={(e) => dispatch(specialRequirements(e.target.value))} />
              </Box>
            </Box>

            <Divider />
            </Box>

            <Box className="2ndLeftpart"
             sx={{
                border: "2px solid #edebeb",
                padding:{xs:"0%",md:"2%"}
            }}
            >

                {/* payment methods */}

            <Box className="paymentDetails"
            sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:2,
                alignItems:"flex-start",
                justifyContent:"center"
            }}
            >
                <Typography
                sx={{
                    fontSize:{xs:"16px",md:"20px"},
                    fontWeight:"bold"
                }}
                >Payment Details</Typography>
              <Typography
              sx={{
                fontSize:{xs:"14px",md:"16px"}
              }}
              >
                Pay securely—we use SSL encryption to keep your data safe
              </Typography>
              <Box className="radios&creditCardIcons"
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"flex-start",
                columnGap:1
              }}
              >
                <input type={"radio"} checked/>
                <Typography>Creadit Card</Typography>
                <RiVisaLine style={{ color: "blue" }} />
                <SiAmericanexpress style={{ color: "blue" }} />
                <SiMastercard style={{ color: "red" }} />
              </Box>
              <Box className="cardHolderName" sx={{
                width:"100%",
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}>
                <Typography>Cardholder Name</Typography>
                <TextField type={"text"}  placeholder="Enter CardHolder Name"   fullWidth   onChange={(e) => dispatch(CardholderName(e.target.value))}  />
              </Box>
              <Box className="creditCradNumber" sx={{
                width:"100%",
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}>
                <Typography>Credit Card Number</Typography>
                <TextField  fullWidth 
                placeholder="Enter Card Number"
                  onChange={(e) => dispatch(CreditCardNumber(e.target.value))}  
                inputProps={{ maxLength: 16, className:'digitsOnly' }}
                />
              </Box>
              <Box className="expirayDate&SecurityCode"
              sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:{xs:"flex-start",md:"space-around"},
                alignItems:"flex-end",
                width:{xs:"100%",md:"100%"},
                flexWrap:{xs:"wrap",md:"nowrap"},
                rowGap:2
              }}
              >
                <Box className="expirayMonth"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}>
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >Expiration Month</Typography>
                <TextField
                    id="outlined-select-currency"
                    select
                    value={cardEexpiryMonth}
                    onChange={handleExpiryMonth}
                  >
                    {Months.map((option,index) => (
                      <MenuItem key={index} value={option.name}  >
                         {option.name}
                      </MenuItem>
                    ))}
                  </TextField>


                </Box>
                <Box className="expirayYear"
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"}
                    }}
                    >Expiray year</Typography>
                  <TextField type={"year"}  onChange={(e) => dispatch(Expirayyear(e.target.value))}     />
                </Box>
                <Box className="securityCode"
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >Security Code</Typography>
                  <TextField type={"text"} placeholder="3 or 4 digit code usually found near the signature strip."  onChange={(e) => dispatch(SecurityCode(e.target.value))}  
                  inputProps={{ maxLength: 3 }}
                  />
                </Box>
                </Box>


                <Box  className="country&checkBox"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1,
                    alignItems:"flex-start",
                    justifyContent:"flex-start"
                }}
                >
                <Box className="country" 
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography 
                  sx={{
                    fontSize:{xs:"16px",md:"20px"},
                    fontWeight:"bold"
                  }}
                  >Country</Typography>
                  <TextField
                    id="outlined-select-currency"
                    select
                    value={countryState}
                    onChange={handleCountryChange}
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.name+ ","+option.code} value={option.name}  >
                         {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                {/* <Box className="saveCreditCardDetails" 
                sx={{
                    display:"flex",
                    flexDirection:"row",
                    columnGap:1,
                    alignItems:"center",
                }}
                >
                  <input type={"checkbox"}  onChange={(e) => dispatch(SaveCreditCard(e.target.checked))}  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >Save my credit card for future use</Typography>
                </Box> */}
              </Box>
            </Box>

            </Box>

            <Box className="3rdLeftPart"
             sx={{
                border: "2px solid #edebeb",
                padding:{xs:"0%",md:"2%"}
            }}
            >
            <Box className="contactInformation"
            sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1,
            }}
            >
              <Typography 
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >Contact Information</Typography>
              <Typography  
              sx={{
                fontSize:{xs:"14px",md:"16px"}
              }}
              >
                We’ll contact you with key updates on your tour or activity
              </Typography>

              <Box className="Email&PhoneNumber"
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                flexWrap:{xs:"wrap",md:"nowrap"},
                rowGap:2
              }}
              >

              {/*email box  */}
                <Box className="Email"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1,
                    alignItems:"flex-start"
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >Email Address</Typography>
                  <TextField type={"text"} placeholder="Enter Email Id"  onChange={(e) => dispatch(EmailAddress(e.target.value))}   />
                </Box>

                {/* phone Number Box */}
                <Box className="phoneNumber"  
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1,
                    alignItems:"flex-start",
                    justifyContent:"flex-start"
                }}
                >
                  <Typography
                   sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >PhoneNumber</Typography>
                  <Box className="phoneNumberBox"
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    columnGap:1,
                    alignItems:"center",
                    justifyContent:"flex-start"
                  }}
                  >
                  <TextField
                    id="outlined-select-currency"
                    select
                    value={currency}
                    onChange={handleChange}
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.name+ ","+option.code} value={option.name+ ","+option.code}  >
                        {option.code} {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField type={"text"} placeholder="Enter Phone Number"  onChange={(e) => dispatch(PhoneNumber(e.target.value))}  />
                  </Box>
                </Box>
              </Box>
              <Typography>
                The tour operator will call this number if they need to reach
                you.
              </Typography>
            </Box>
          
          </Box>
          <Button variant="contained" color="success"
         onClick={submitHandler}
          >
                        Book Now
           </Button>
          </Box>
        



                        {/* right part */}
          <Box className="rightPart"
          sx={{
            border:"2px solid #edf0ee",
            width:{xs:"100%",md:"30%"},
            height:"fit-content",
            display:{xs:"none",md:"flex"},
            flexDirection:"column",
            rowGap:4,
            padding:{xs:"0%",md:"1%"},
            position:"sticky",
            top:"0px"
          }}
          >

            {/* first right half */}
            <Box className="1stHalf"
            sx={{
                border:"1px solid #ebf0ec",
                padding:{xs:"0%",md:"3% 4% 5% 4%"},
                display:"flex",
                flexDirection:"column",
                rowGap:3,
                borderRadius:"10px",
                backgroundColor:"#f2f5f3"
            }}
            >
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >Review Order Details</Typography>
              {/* ticket details */}
              <Box className="tiicketDetails"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}
              >
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                }}
                >{singleTourDetails.name}</Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >{!booking_dateDetails.BookDate ? todayDate : date }</Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >{description}</Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >{memberPresentState.adult} Adult, {memberPresentState.child} Child</Typography>
              </Box>

              {/* nonrefundable */}
              <Box className="nonRefundable"
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                columnGap:1,

              }}
              >
                <RiRefund2Line />
                <Typography
                sx={{
                    fontSize:{xs:"14px",md:";16px"}
                }}
                >Non-refundable</Typography>
              </Box>

              {/* total amount and promo code details */}
              <Box className="totalAmount&PromoCode"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:2
              }}
              >

                {/* amount details */}
                <Box className="amount"
                sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between"
                  }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"16px",md:"20px"},
                    fontWeight:"bold"
                  }}
                  >Total</Typography>
                  <Box className="amountWithSymbol"
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    columnGap:1
                  }}
                  >
                   <Typography>{travellerData.currencyCode}</Typography>
                   <Typography
                         sx={{
                          display:travellerData.currencyCode == "GBP" ? "flex" : "none"
                         }}
                         >{(memberPresentState.adult*singleTourDetails.price)+(memberPresentState.child*singleTourDetails.price)}</Typography>
                         <Typography
                         sx={{
                          display:travellerData.currencyCode != "GBP" ? "flex":"none"
                         }}
                         >
                        {(memberPresentState.adult*singleTourDetails.price*travellerData.currencyValue+memberPresentState.child*singleTourDetails.price*travellerData.currencyValue).toFixed(2)}
                         </Typography>
                  </Box>
                  </Box>

                  {/* promo code text */}
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    color:"green",
                    textDecoration:"underLine",
                    "&:hover":{
                        cursor:"pointer",
                        color:"black"
                    }
                  }}
                  onClick={()=>setShowPromoCode(true)}
                  >Enter Promo Code</Typography>

                {/* promo code box */}
                  <Box className="promoCode"
                  sx={{
                    display:showPromoCode ? "flex" : "none",
                    flexDirection:"column",
                    rowGap:1
                  }}
                  >
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"},
                    }}
                    >Promo Code</Typography>
                    <Box className="promoCodebox"
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }}
                    >
                      <TextField type={"text"} placeholder="Add Promo Code"  onChange={(e) => dispatch(PromoCode(e.target.value))}  sx={{backgroundColor:"white"}}/>
                      <Button variant="contained" color="success">
                        Apply
                      </Button>
                    </Box>
                  
                </Box>
              </Box>

              {/* book button */}
              <Button variant="contained" color="success"
              onClick={submitHandler}
              >
                Book Now
              </Button>
            </Box>

            {/* second right half */}
            <Box className="2ndHalf"
            sx={{
                padding:{xs:"0%",md:"3% 4% 5% 4%"},
                display:"flex",
                flexDirection:"column",
                rowGap:2,
                alignItems:"flex-start",
            }}
            >
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >Book with Confidence</Typography>

              <Divider />

              <Box className="price,Support&Security"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}
              >
                <Box className="lowestPrice"
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                  }}
                  >Lowest Price Guarantee</Typography>
                  <Typography
                   sx={{
                    fontSize:{xs:"14px",md:"16px"},
                  }}
                  >
                    Find it cheaper? We'll refund the difference
                  </Typography>
                </Box>
                <Box className="support"
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                  }}
                  >24/7 Global Support</Typography>
                  <Typography
                   sx={{
                    fontSize:{xs:"14px",md:"16px"},
                  }}
                  >
                    Get the answers you need, when you need them
                  </Typography>
                </Box>
                <Box className="security"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                  }}
                  >Book Securely</Typography>
                  <Box className="securityDetails&LockIcon"
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"flex-start",
                    columnGap:1
                }}
                  >
                    <LockOpenIcon />
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"}
                    }}
                    >
                      We use SSL encryption to keep your data secure
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        </Box>
        <Footer />
        <Snackbar open={SnakBarOpen} autoHideDuration={4000} onClose={handleSnakBarClose}>
        <Alert onClose={handleSnakBarClose} severity={alertMessageColor} sx={{ width: '150%' }}>
        {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CheckOutPage;
