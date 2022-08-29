import { Box, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image1 from "../../assets/images/img1.webp";
import Image2 from "../../assets/images/img2.jpg";
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  singleProductReducer,
  cratItemReducer,
  productImageReducer
} from "../../redux/reducer/reducer";
import {
  individualProductAction,
  cartItemAction,
  london,
  rome,
} from "../../redux/action/index";

// amsterdam images
// import Amsterdam1 from "../../assets/amsterdam/amsterdam1.jpg"
// import Amsterdam2 from "../../assets/amsterdam/amsterdam2.jpg"
// import Amsterdam3 from "../../assets/amsterdam/amsterdam3.jpg"
// import Amsterdam4 from "../../assets/amsterdam/amsterdam4.jpg"
// import Amsterdam5 from "../../assets/amsterdam/amsterdam5.jpg"
// import Amsterdam6 from "../../assets/amsterdam/amsterdam6.jpg"
// import Amsterdam7 from "../../assets/amsterdam/amsterdam7.jpg"
// import Amsterdam8 from "../../assets/amsterdam/amsterdam8.jpg"
// import Amsterdam9 from "../../assets/amsterdam/amsterdam9.jpg"

// // dubai images
// import Dubai1 from "../../assets/dubai/dubai1.jpg"
// import Dubai2 from "../../assets/dubai/dubai2.jpg"
// import Dubai3 from "../../assets/dubai/dubai3.jpg"
// import Dubai4 from "../../assets/dubai/dubai4.jpg"
// import Dubai5 from "../../assets/dubai/dubai5.jpg"

// // edenburgh images
// import Edenburgh1 from "../../assets/edenburgh/edenburgh1.jpg"
// import Edenburgh2 from "../../assets/edenburgh/edenburgh2.jpg"
// import Edenburgh3 from "../../assets/edenburgh/edenburgh3.jpg"
// import Edenburgh4 from "../../assets/edenburgh/edenburgh4.jpg"
// import Edenburgh5 from "../../assets/edenburgh/edenburgh5.jpg"
// import Edenburgh6 from "../../assets/edenburgh/edenburgh6.jpg"
// import Edenburgh7 from "../../assets/edenburgh/edenburgh7.jpg"
// import Edenburgh8 from "../../assets/edenburgh/edenburgh8.jpg"

// // florence images
// import Florence1 from "../../assets/florence/florence1.jpg"
// import Florence2 from "../../assets/florence/florence2.jpg"
// import Florence3 from "../../assets/florence/florence3.jpg"
// import Florence4 from "../../assets/florence/florence4.jpg"
// import Florence5 from "../../assets/florence/florence5.jpg"
// import Florence6 from "../../assets/florence/florence6.jpg"
// import Florence7 from "../../assets/florence/florence7.jpg"


// // istanbul images
// import Istanbul1 from "../../assets/istanbul/istanbul1.jpg"
// import Istanbul2 from "../../assets/istanbul/istanbul2.jpg"
// import Istanbul3 from "../../assets/istanbul/istanbul3.jpg"
// import Istanbul4 from "../../assets/istanbul/istanbul4.jpg"
// import Istanbul5 from "../../assets/istanbul/istanbul5.jpg"

// // krakow
// //  krakow imamges
// import Krakow1 from "../../assets/krakow/krakow1.jpg"
// import Krakow2 from "../../assets/krakow/krakow2.jpg"
// import Krakow3 from "../../assets/krakow/krakow3.jpg"
// import Krakow4 from "../../assets/krakow/krakow4.jpg"
// import Krakow5 from "../../assets/krakow/krakow5.jpg"
// import Krakow6 from "../../assets/krakow/krakow6.jpg"
// import Krakow7 from "../../assets/krakow/krakow7.jpg"
// import Krakow8 from "../../assets/krakow/krakow8.jpg"


// // london images
// import London1 from "../../assets/london/london1.jpg"
// import London2 from "../../assets/london/london2.jpg"
// import London3 from "../../assets/london/london3.jpg"
// import London4 from "../../assets/london/london4.jpg"
// import London5 from "../../assets/london/london5.jpg"
// import London6 from "../../assets/london/london6.jpg"
// import London7 from "../../assets/london/london7.jpg"
// import London8 from "../../assets/london/london8.jpg"

// // raykjavik images
// import Raykjavik1 from "../../assets/raykjavik/raykjavik1.jpg"
// import Raykjavik2 from "../../assets/raykjavik/raykjavik2.jpg"
// import Raykjavik3 from "../../assets/raykjavik/raykjavik3.jpg"
// import Raykjavik4 from "../../assets/raykjavik/raykjavik4.jpg"
// import Raykjavik5 from "../../assets/raykjavik/raykjavik5.jpg"
// import Raykjavik6 from "../../assets/raykjavik/raykjavik6.jpg"
// import Raykjavik7 from "../../assets/raykjavik/raykjavik7.jpg"
// import Raykjavik8 from "../../assets/raykjavik/raykjavik8.jpg"

// //  rome images
// import Rome1 from "../../assets/rome/romeImage1.jpg"
// import Rome2 from "../../assets/rome/romeImage2.jpg"
// import Rome3 from "../../assets/rome/romeImage3.jpg"
// import Rome4 from "../../assets/rome/romeImage4.jpg"
// import Rome5 from "../../assets/rome/romeImage5.jpg"
// import Rome6 from "../../assets/rome/romeImage6.jpg"
// import Rome7 from "../../assets/rome/romeImage7.jpg"
// import Rome8 from "../../assets/rome/romeImage8.jpg"

// // venice images
// import Venice1 from "../../assets/venice/venice1.jpg"
// import Venice2 from "../../assets/venice/venice2.jpg"
// import Venice3 from "../../assets/venice/venice3.jpg"
// import Venice4 from "../../assets/venice/venice4.jpg"
// import Venice5 from "../../assets/venice/venice5.jpg"
// import Venice6 from "../../assets/venice/venice6.jpg"
// import Venice7 from "../../assets/venice/venice7.jpg"




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



let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]

let AmsertdamArr = [Amsterdam1, Amsterdam2, Amsterdam3, Amsterdam4, Amsterdam5, Amsterdam6, Amsterdam7, Amsterdam8, Amsterdam9]

let DubaiArr = [Dubai1, Dubai2, Dubai3, Dubai4, Dubai5]

let EdenBurghArr = [Edenburgh1, Edenburgh2, Edenburgh3, Edenburgh4, Edenburgh5, Edenburgh6, Edenburgh7, Edenburgh8]

let FlorenceArr = [Florence1, Florence2, Florence3, Florence4, Florence5, Florence6, Florence7]

let IstanBulArr = [Istanbul1, Istanbul2, Istanbul3, Istanbul4, Istanbul5]

let KrakowArr = [Krakow1, Krakow2, Krakow3, Krakow4, Krakow5, Krakow6, Krakow7, Krakow8]

let LondonArr = [London1, London2, London3, London4, London5, London6, London7, London8]

let raykjavikArr = [Raykjavik1, Raykjavik2, Raykjavik3, Raykjavik4, Raykjavik5, Raykjavik6, Raykjavik7, Raykjavik8]

let RomeArr = [Rome1, Rome2, Rome3, Rome4, Rome5, Rome6, Rome7, Rome8]
let VeniceArr = [Venice1, Venice2, Venice3, Venice4, Venice5, Venice6, Venice7]


const ProductCards = ({ item }) => {


  // console.log(item.city)
  const [productImage, setProductImage] = useState() 
  const [description, setDescription] = useState(item.description.substr(75,125))

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myCartItems = useSelector((state) => state.cratItemReducer);
  const reduxProductimage = useSelector((state) => state.productImageReducer);
  // console.log(reduxProductimage)

  const [reRender, setRerender] = useState(true);

  const [productList, setProductList] = useState(
    localStorage.getItem("tourProduct")
  );
  const [wishListItem, setWishListItem] = useState(false);

  const checkWishList = () => {
    if (myCartItems.length) {
      let filterItems = myCartItems.filter((product) => product.id == item.id);
      if (filterItems.length) {
        setWishListItem(true);
      } else {
        setWishListItem(false);
      }
    } else {
      setWishListItem(false);
    }
  };

  useEffect(() => {
    checkWishList();
  }, [reRender]);

  const wishListAddHandler = () => {
    if (myCartItems.length == 0) {
      //  adding cart item for first time
      dispatch(cartItemAction([item]));
    } else {
      //  checking cartItem if it is present or not
      let filterProduct = myCartItems.filter(
        (product) => product.id == item.id
      );
      if (filterProduct.length == 0) {
        //  if it is not present we are adding it
        dispatch(cartItemAction([...myCartItems, item]));
      } else {
        //  if it is present we are removing it
        let filterCurrentItem = myCartItems.filter(
          (product) => product.id != item.id
        );
        dispatch(cartItemAction(filterCurrentItem));
      }
    }
    setRerender(!reRender);
  };


  if(item.city == "London"){
    return  <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Harry Potter Tour of Warner Bros. Studio with Transport from London" ? London1 : item.name == "Stonehenge, Windsor Castle, and Bath from London" ? London2 : item.name == "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock" ? London3 : item.name == "Westminster to Greenwich Sightseeing Thames Cruise in London" ? London4 : item.name == "Stonehenge and Bath Day Trip from London" ? London5 : item.name == "Buckingham Palace Tour Including Changing of the Guard Ceremony" ? London6 : item.name == "Windsor Castle, Stonehenge and Bath Tour from London with Admission" ? London7 : London8}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }


  if(item.city == "Rome"){
  return <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Skip-the-Line Vatican Museums & Sistine Chapel Group Tour" ? Rome1 : item.name == "Skip the Line: Colosseum Small Group Tour with Roman Forum & Palatine Hill" ? Rome2 : item.name == "Skip-the-Line: Vatican Museums & Sistine Chapel Guided Small-Group Tour" ? Rome3 : item.name == "Small-Group Tour of Colosseum Underground, Arena and Forum" ? Rome4 : item.name == "Pompeii, Amalfi Coast and Positano Guided Day Trip from Rome" ? Rome5 : item.name == "Colosseum VIP Gladiators access with Arena & Ancient Rome small group tour" ? Rome6 : item.name == "Tuscany Day Trip from Rome including 3-Course Lunch and Wine Tasting" ? Rome7 : Rome8}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }


  if(item.city == "Krakow"){
   return  <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Auschwitz & Birkenau: Live-Guided Tour with Transportation and Hotel Pickup" ? Krakow1 : item.name == "Auschwitz-Birkenau Museum and Memorial Guided Tour from Krakow" ? Krakow2 : item.name == "Wieliczka Salt Mine Guided Tour from Krakow" ? Krakow3 : item.name == "Auschwitz-Birkenau and Wieliczka Salt Mine Guided One Day Tour" ? Krakow4 : item.name == "Zakopane Tour with Hot Bath Pools and Hotel Pickup" ? Krakow5 : item.name == "Krakow: Extreme Shooting Range with Hotel Pick-Up" ? Krakow6 : item.name == "From Krakow: Auschwitz-Birkenau Guided Tour, Pickup & Transfers" ? Krakow7 : Krakow8}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }



  if(item.city == "Florence"){
        return   <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Pisa, Siena and San Gimignano Day Trip from Florence Including Lunch" ? Florence1 : item.name == "Small-Group Wine Tasting Experience in the Tuscan Countryside" ? Florence2 : item.name == "Tuscany in One Day Sightseeing Tour from Florence" ? Florence3 : item.name == "Cinque Terre Day Trip with Transport from Florence" ? Florence4 : item.name == "David & Accademia Gallery Tour - Florence (Reserved Entrance)" ? Florence5 : item.name == "Skip-the-Line Florence Highlights and David Walking Tour" ? Florence6 :  Florence7}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }



  if(item.city == "Edinburgh"){
    return<Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Loch Ness, Glencoe and the Highlands Small-Group Day Tour from Edinburgh" ? Edenburgh1 : item.name == "Loch Ness, Scottish Highlands, Glencoe & Hairy Coos Tour from Edinburgh" ? Edenburgh2 : item.name == "Loch Ness, Glencoe & The Highlands Day Trip from Edinburgh" ? Edenburgh3 : item.name == "Edinburgh Castle Tour - Skip The Line Tickets Included" ? Edenburgh4 : item.name == "Underground Walking Tour in Edinburgh" ? Edenburgh5 : item.name == "Edinburgh Castle Guided Walking Tour - Tickets Incluided" ? Edenburgh6 :  item.name == "Isle of Skye, The Highlands and Loch Ness- 3 Day Group Tour from Edinburgh" ? Edenburgh7 : Edenburgh8}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }



  if(item.city == "venice"){
    return<Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Legendary Venice St. Mark's Basilica with Terrace Access & Doge's Palace" ? Venice1 : item.name == "Skip the Line Venice Doge's Palace and St. Mark's Basilica Tour - T23" ? Venice2 : item.name == "Murano, Burano and Torcello Half-Day Sightseeing Tour" ? Venice3 : item.name == "Venice Marco Polo Airport Link Arrival Transfer" ? Venice4 : item.name == "Venice: Grand Canal by Gondola with commentary" ? Venice5 : item.name == "Dolomite Mountains and Cortina Semi Private Day Trip from Venice" ? Venice6 :  Venice7}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }




  if(item.city == "raykjavik"){
    return <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Golden Circle, Blue Lagoon Including Admission & Kerid Volcanic Crater" ? Raykjavik1 : item.name == "South Coast Full Day Tour by Minibus from Reykjavik" ? Raykjavik2 : item.name == "Whale Watching Cruise on a Superyacht in Reykjavik" ? Raykjavik3 : item.name == "Golden Circle Classic Day Trip from Reykjavik" ? Raykjavik4 : item.name == "Golden Circle & Glacier Snowmobiling Day Trip from Reykjavik" ? Raykjavik5 : item.name == "Snorkeling Between Continents in Silfra with Photos Included" ? Raykjavik6 : item.name == "Reykjavik Food Walk - Local Foodie Adventure in Iceland"? Raykjavik7 : Raykjavik8}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }





  if(item.city == "Amsterdam"){
    return <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Amsterdam Canal Cruise in Classic River Boat With Drinks & Dutch Cheese" ? Amsterdam1 : item.name == "Amsterdam Open Boat Canal Cruise - Live Guide - from Anne Frank House" ? Amsterdam2 : item.name == "All inclusive Canal Tour by Captain Jack (Traveller's Choice Award 2021)" ? Amsterdam3 : item.name == "Amsterdam Open Boat Tour With Live Guide and Unlimited Drinks" ? Amsterdam4 : item.name == "Volendam, Marken and Windmills Day Trip from Amsterdam" ? Amsterdam5 : item.name == "Giethoorn and Zaanse Schans Windmills Day Trip from Amsterdam" ? Amsterdam6 : item.name == "Day Trip to Zaanse Schans, Edam, Volendam and Marken from Amsterdam"? Amsterdam7 : item.name == "Amsterdam 1-Hour Canal Cruise from Central Station"  ? Amsterdam8 :  Amsterdam9}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }



  if(item.city == "istanbul"){
   return <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Best of Istanbul: 1, 2 or 3-Day Private Guided Istanbul Tour" ? Istanbul1 : item.name == "Bosphorus Sunset Cruise on Luxury Yacht" ? Istanbul2 : item.name == "Taste of Two Continents Food Tour" ? Istanbul3 : item.name == "Small Group Tour: Essential Istanbul" ? Istanbul4 : Istanbul5}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }







  if(item.city == "Dubai"){
   return  <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      width:{xs:"98%",md:"96%"},
      border:"1px solid #c4c4c2",
      borderRadius:"10px",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
      },
    }}
  >
    <Box
      className="imgBox"
      sx={{
        maxWidth: { xs: "50%", md: "30%" },
        minWidth: { xs: "50%", md: "30%" },
        maxHeight: { xs: "150px", md: "250px" },
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={item.name == "Dubai Marina Yacht Tour with Breakfast or BBQ Tour" ? Dubai1 : item.name == "Dubai Marina Dinner Cruise with Live Music" ? Dubai2 : item.name == "Dubai Luxury Canal Dinner Cruise" ? Dubai3 : item.name == "Inside Burj Al Arab - Experience a unique guided tour" ? Dubai4 : Dubai5}
        alt="place image"
        sx={{
          width:"100%",
          height:"100%",
          borderRadius: "20px",
        }}
      />
      <Box
        className="wishlistIcon"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
        onClick={() => {
          if (localStorage.getItem("accessToken") == null) {
            navigate("/login");
          } else {
            wishListAddHandler();
          }
        }}
      >
        <FavoriteIcon
          sx={{
            color: "red",
            display: wishListItem ? "flex" : "none",
          }}
        />
        <FavoriteBorderIcon
          sx={{
            display: !wishListItem ? "flex" : "none",
          }}
        />
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: {xs:"50%",md:"67%"},
        columnGap: 2,
        rowGap:2,
        justifyContent:{xs:"flex-start",md:"space-between"},
      }}
      onClick={() => {
        if (localStorage.getItem("accessToken") != null) {
          dispatch(individualProductAction(item));
          navigate("/TourDeatils");
        } else {
          navigate("/signup");
        }
      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 1, md: 1 },
          width:{xs:"100%",md:"80%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
          
        <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
          <Rating
            name="read-only"
            value={item.stars}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "18px" } }}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
            3047
          </Typography>
        </Box>
        
       <Box className="placeDescription&Cancellation"
       sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        width:{xs:"100%",md:"100%"}
       }}
       >
        {/* place description */}
       <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
        >
          <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
            {description}
            <span className="more">&nbsp; more</span>
          </Typography>
        </Box>

        {/* cacellation and access time and  */}
        <Box className="concellationAndAccesTime">
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            12 hours 30 minutes
          </Typography>
        </Box>

        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
          <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
            Free Cancellation
          </Typography>
        </Box>
        </Box>

       </Box>

       {/* price description */}
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
            {item.currency}
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  }


  // return (
  //   <Box
  //     className="firstImage"
  //     sx={{
  //       display: "flex",
  //       flexDirection: "row",
  //       columnGap: { xs: 2, md: 3 },
  //       padding: { xs: "1%", md: "2%" },
  //       width:{xs:"98%",md:"96%"},
  //       border:"1px solid #c4c4c2",
  //       borderRadius:"10px",
  //       "&:hover": {
  //         cursor: "pointer",
  //         boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
  //       },
  //     }}
  //   >
  //     <Box
  //       className="imgBox"
  //       sx={{
  //         maxWidth: { xs: "50%", md: "30%" },
  //         minWidth: { xs: "50%", md: "30%" },
  //         maxHeight: { xs: "150px", md: "250px" },
  //         borderRadius: "20px",
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "flex-start",
  //         position: "relative",
  //       }}
  //     >
  //       <Box
  //         component={"img"}
  //         src={productImage}
  //         alt="place image"
  //         sx={{
  //           width:"100%",
  //           height:"100%",
  //           borderRadius: "20px",
  //         }}
  //       />
  //       <Box
  //         className="wishlistIcon"
  //         sx={{
  //           display: "flex",
  //           flexDirection: "row",
  //           position: "absolute",
  //           right: "10px",
  //           top: "10px",
  //         }}
  //         onClick={() => {
  //           if (localStorage.getItem("accessToken") == null) {
  //             navigate("/login");
  //           } else {
  //             wishListAddHandler();
  //           }
  //         }}
  //       >
  //         <FavoriteIcon
  //           sx={{
  //             color: "red",
  //             display: wishListItem ? "flex" : "none",
  //           }}
  //         />
  //         <FavoriteBorderIcon
  //           sx={{
  //             display: !wishListItem ? "flex" : "none",
  //           }}
  //         />
  //       </Box>
  //     </Box>
  //     <Box
  //       className="placeDetails"
  //       sx={{
  //         display: "flex",
  //         flexDirection: { xs: "column", md: "row" },
  //         padding: { xs: "0", md: "1%" },
  //         width: {xs:"50%",md:"67%"},
  //         columnGap: 2,
  //         rowGap:2,
  //         justifyContent:{xs:"flex-start",md:"space-between"},
  //       }}
  //       // onClick={() => {
  //       //   if (localStorage.getItem("accessToken") != null) {
  //       //     dispatch(individualProductAction(item));
  //       //     navigate("/TourDeatils");
  //       //   } else {
  //       //     navigate("/signup");
  //       //   }
  //       // }}
        // onClick={()=>productClicked("item")}
  //     >
  //       <Box
  //         className="placeDescriptions"
  //         sx={{
  //           display: "flex",
  //           flexDirection: "column",
  //           alignItems: "flex-start",
  //           rowGap: { xs: 1, md: 1 },
  //           width:{xs:"100%",md:"80%"},
  //         }}
  //       >
  //         <Typography
  //           sx={{
  //             fontSize: { xs: "14px", md: "16px" },
  //             fontWeight: "bold",
  //           }}
  //         >
  //           {item.name}
  //         </Typography>
            
  //         <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
  //           <Rating
  //             name="read-only"
  //             value={item.stars}
  //             readOnly
  //             sx={{ fontSize: { xs: "15px", md: "18px" } }}
  //           />
  //           <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
  //             3047
  //           </Typography>
  //         </Box>
          
  //        <Box className="placeDescription&Cancellation"
  //        sx={{
  //         display:"flex",
  //         flexDirection:"column",
  //         rowGap:3,
  //         width:{xs:"100%",md:"100%"}
  //        }}
  //        >
  //         {/* place description */}
  //        <Box
  //           className="aboutPlace"
  //           sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
  //         >
  //           <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
  //             {description}
  //             <span className="more">&nbsp; more</span>
  //           </Typography>
  //         </Box>

  //         {/* cacellation and access time and  */}
  //         <Box className="concellationAndAccesTime">
  //         <Box
  //           className="AccessTime"
  //           sx={{
  //             display: "flex",
  //             flexDirection: "row",
  //             columnGap: 1,
  //             alignItems: "center",
  //           }}
  //         >
  //           <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
  //           <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
  //             12 hours 30 minutes
  //           </Typography>
  //         </Box>

  //         <Box
  //           className="concellationBox"
  //           sx={{
  //             display: "flex",
  //             flexDirection: "row",
  //             columnGap: 1,
  //             alignItems: "center",
  //           }}
  //         >
  //           <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
  //           <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
  //             Free Cancellation
  //           </Typography>
  //         </Box>
  //         </Box>

  //        </Box>

  //        {/* price description */}
  //       </Box>
  //       <Box
  //         className="PriceDetails"
  //         sx={{
  //           display: { xs: "flex", md: "flex" },
  //           flexDirection: { xs: "row", md: "column" },
  //           justifyContent: { xs: "flex-start", md: "flex-start" },
  //           alignItems: { xs: "center", md: "flex-end" },
  //           columnGap: 1,
  //         }}
  //       >
  //         <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
  //           from
  //         </Typography>
  //         <Box
  //           sx={{
  //             display: "flex",
  //             flexDirection: "row",
  //             alignItems: "center",
  //           }}
  //         >
  //           {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
  //           <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
  //             {item.currency}
  //           </Typography>
  //           <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
  //             {item.price}
  //           </Typography>
  //         </Box>
  //       </Box>
  //     </Box>
  //   </Box>
  // );
};

export default ProductCards;
