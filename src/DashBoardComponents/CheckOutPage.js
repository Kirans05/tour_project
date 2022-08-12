import {
  Box,
  Button,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import Imgae2 from "../images/img2.jpg";
import { RiVisaLine, RiRefund2Line } from "react-icons/ri";
import { SiAmericanexpress, SiMastercard } from "react-icons/si";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const CheckOutPage = () => {
  const [todayDate, setTodayDate] = useState(new Date().toLocaleDateString());
  const [currency, setCurrency] = React.useState("EUR");

    const [showPromoCode, setShowPromoCode] = useState(false)

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
              padding: { xs: "0%", md: "1%" },
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            <Box className="1stLeftPart" 
            sx={{
                border: "2px solid #edebeb",
                padding:{xs:"0%",md:"2%"}
            }}>

            
            <Box
              className="tourImage&Descriptions"
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 2,
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                component={"img"}
                src={Imgae2}
                alt="tour image"
                sx={{
                  width: { xs: "100px", md: "200px" },
                  borderRadius: "20px",
                }}
              />
              <Box className="tourDescriptions">
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  {todayDate}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: "bold",
                  }}
                >
                  Jazz Notes - Jazz Jam Ticket
                </Typography>
                <Box className="time&Experience">
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    Jazz Notes - Jazz Jam Ticket 14:00
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
                    flexDirection:"row",
                    justifyContent:"space-between"
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
                    <TextField type={"text"} placeholder={"Enter FirstName"} fullWidth/>
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
                    <TextField type={"text"} placeholder={"Enter LastName"}  fullWidth />
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
                <textarea rows={4} cols={50} />
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
                <input type={"radio"} />
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
                <TextField type={"text"} fullWidth/>
              </Box>
              <Box className="creditCradNumber" sx={{
                width:"100%",
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}>
                <Typography>Credit Card Number</Typography>
                <TextField type={"text"} fullWidth/>
              </Box>
              <Box className="expirayDate&SecurityCode"
              sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"flex-end",
                width:{xs:"100%",md:"100%"},
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
                  <TextField type={"month"} />
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
                  <TextField type={"year"} />
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
                  <TextField type={"text"} />
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
                  <TextField type={"text"} value={"India"}/>
                </Box>
                <Box className="saveCreditCardDetails" 
                sx={{
                    display:"flex",
                    flexDirection:"row",
                    columnGap:1,
                    alignItems:"center",
                }}
                >
                  <input type={"checkbox"} />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >Save my credit card for future use</Typography>
                </Box>
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
                justifyContent:"space-between"
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
                  <TextField type={"text"} />
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
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField type={"text"} />
                  </Box>
                </Box>
              </Box>
              <Typography>
                The tour operator will call this number if they need to reach
                you.
              </Typography>
            </Box>
          
          </Box>
          <Button variant="contained" color="success">
                        Book Now
           </Button>
          </Box>
        



                        {/* right part */}
          <Box className="rightPart"
          sx={{
            border:"2px solid #edf0ee",
            width:{xs:"100%",md:"30%"},
            height:"fit-content",
            display:"flex",
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
              <Box className="tiicketDetails">
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                }}
                >Jazz Notes - Jazz Jam Ticket</Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >{todayDate}</Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >Jazz Notes - Jazz Jam Ticket 14:00</Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >2 Adults</Typography>
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
                    alignItems:"center"
                  }}
                  >
                    <CurrencyRupeeIcon />
                    <Typography
                    sx={{
                        fontSize:{xs:"16px",md:"20px"},
                        fontWeight:"bold"
                    }}
                    >986.54</Typography>
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
                      <TextField type={"text"} placeholder="Add Promo Code" />
                      <Button variant="contained" color="success">
                        Apply
                      </Button>
                    </Box>
                  
                </Box>
              </Box>

              {/* book button */}
              <Button variant="contained" color="success">
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
    </Box>
  );
};

export default CheckOutPage;
