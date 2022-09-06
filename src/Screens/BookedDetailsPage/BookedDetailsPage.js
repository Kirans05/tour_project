import { Rating, Typography } from '@mui/material'
import { Box, minWidth, padding } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectedBookedProductReducer, currentUserReducer } from '../../redux/reducer/reducer'
import Header from '../HeaderComponents/Header'
import London1 from "../../assets/london/london1.jpg"
import { Parser } from 'html-to-react'
import Footer from '../FooterComponents/Footer'


const Base_url = process.env.REACT_APP_Axios_Base_urls


const BookedDetailsPage = () => {

    const bookedDetails = useSelector((state) => state.selectedBookedProductReducer) 
    console.log(bookedDetails)
    const userDetails = useSelector((state) => state.currentUserReducer) 
    const [productDetails, setProductdetails] = useState(null)
    
    const fetchProduct = async () => {
        let options = {
            url:`${Base_url}/tour/product?id=${bookedDetails.productId}`,
            method:"GET",
            headers:{
              "content-type":"application/json",
              "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
            }
          }
          try {
            let {data} = await axios(options)
            setProductdetails(data)
          } catch (error) {
            
          }
    } 



    useEffect(() => {
        fetchProduct()
    },[])


  return (
    <Box>
        <Header />
        <Box
        sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"flex-start",
          justifyContent:{xs:"flex-start",md:"flex-start"},
          padding:{xs:"2% 3% 2% 3%",md:"2% 5% 2% 5%"},
          width:{xs:"92%",md:"90%"},
          rowGap:bookedDetails.price == undefined ? 2 : 5,
          height:bookedDetails.price == undefined ? "75vh" : "fit-content"
        }}
        >
                <Box classname="image&Details"
            sx={{
              display:"flex",
              flexDirection:"row",
              alignItems:"flex-start",
              width:{xs:"100%",md:"100%"},
              columnGap:3,
            }}
          >
          <Box 
          component={"img"}
          src={productDetails == null ?London1 : productDetails.imageUrl}
          alt="bookedTourImage"
          sx={{
            maxWidth:{xs:"150px",md:"500px"},
            minWidth:{xs:"150px",md:"500px"}
          }}
          />
          <Box classname="productDescription"
          sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
            justifyContent:"space-between",
            height:"40vh"
          }}
          >
            <Typography sx={{ fontSize: { xs: "14px", md: "20px" },fontWeight:"bold"}}>{productDetails == null ? "Tour Name" : productDetails.name}</Typography>
            <Typography sx={{ fontSize: { xs: "14px", md: "18px" }}}>{productDetails == null ? "Tour City" : productDetails.city}</Typography>
            <Rating name="read-only" value={productDetails == null ? 4 : productDetails.stars} readOnly />
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }}}>Traveller Name - {userDetails.firstName+" "+userDetails.lastName}</Typography>
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }}}>Adults - {bookedDetails.adultQty}</Typography>
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }}}>Child - {bookedDetails.childQty}</Typography>
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }}}>Price - {productDetails == null ? "GBP": productDetails.currency+" "+bookedDetails.price}</Typography>
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }}}>Date - {bookedDetails.fromDate == undefined ? "No Date" : bookedDetails.fromDate.substr(0,10)}</Typography>
        </Box>
                 </Box>

                   <Box classname="overView">
          {
            productDetails == null ?
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }}}>No Details Available</Typography>
            : <Box>
            {Parser().parse(productDetails.description)}
          </Box>
          }

                  </Box>
        </Box>
        <Footer />
    </Box>
)
}

export default BookedDetailsPage