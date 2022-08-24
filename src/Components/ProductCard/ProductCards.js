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
} from "../../redux/reducer/reducer";
import {
  individualProductAction,
  cartItemAction,
} from "../../redux/action/index";


let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]

const ProductCards = ({ item }) => {

  const [productImage, setProductImage] = useState(arr[Math.floor(Math.random() * arr.length)]) 


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myCartItems = useSelector((state) => state.cratItemReducer);

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

  return (
    <Box
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
          src={productImage}
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
          width: {xs:"50%",md:"70%"},
          columnGap: 2,
          rowGap:2
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
              value={4}
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
          rowGap:3
         }}
         >
          {/* place description */}
         <Box
            className="aboutPlace"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
              {item.description}
              <span className="more">more</span>
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
  );
};

export default ProductCards;
