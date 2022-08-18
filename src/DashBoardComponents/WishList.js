import { Typography, Box, Button, Rating, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Image2 from "../images/img2.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const WishList = () => {

  const [cartItem, setCartItem] = useState(true)


  const fetchData = async () => {
    // let options = {
    //   url:"",
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   data:{

    //   }
    // }

    // let result = await axios(options)
  }


  useEffect(()=>{
    // fetchData()
  },[])



  return (
    <Box>
        <Header />
        {/* <Box className='wishListDetails'
        sx={{
            height:"90vh",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            rowGap:2
        }}
        >
            <Typography sx={{fontSize:"30px",fontWeight:"bold"}}>Your wishlist is empty</Typography>
            <Typography>The world is waiting for you. Fill up on amazing things to do from Paris to Sydney.</Typography>
            <Button variant='contained' color='success'>Continue Shopping</Button>
        </Box> */}
        <Box
        sx={{
        padding:{xs:"2% 0% 2% 0%",md:"2% 6% 3% 6%"},
        width:{xs:"100%",md:"88%"},
        display:"flex",
        flexDirection:"column",
        rowGap:2,
        alignItems:"flex-start",
        justifyContent:"flex-start"
        }}
        >
          <Box className='1stPart'>
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >My WishList</Typography>
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"18px"}
              }}
              >Your list of tours and activities that you saved for your travel research</Typography>
          </Box>
        
        <Box className='AllWishListProducts'
        sx={{
          display:"flex",
          flexDirection:{xs:"column",md:"row"},
          alignItems:{xs:"flex-start",md:"center"},
          justifyContent:{xs:"flex-start",md:"space-between"},
          flexWrap:{xs:"nowrap",md:"wrap"},
          width:{xs:"100%",md:"100%"},
          rowGap:3,
        }}
        >

          <Box className='individualProduct'
          sx={{
            width:{xs:"100%",md:"400px"},
            border:"2px solid #f0efed",
            "&:hover":{
              boxShadow:"0px 0px 10px 3px #d9d8d7",
              cursor:"pointer"
            },
            display:"flex",
            flexDirection:{xs:"row",md:"column"},
            columnGap:{xs:2,md:0}
          }}
          >
            <Box className='images&AddToWishList'
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"flex-start",
              position:"relative",
              width:{xs:"170px",md:"400px"},
              height:{xs:"170px",md:"250px"}
            }}
            >
                <Box 
                component={"img"}
                src={Image2}
                alt={"wishListImages"}
                sx={{
                  width:{xs:"170px",md:"400px"},
                  height:{xs:"170px",md:"250px"}
                }}
                />
                <Box className='favoriteIcons'
                sx={{
                  position:"absolute",
                  right:"10px",
                  top:"10px",
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  "&:hover":{
                    cursor:"pointer"
                  }
                }}
                onClick={()=>setCartItem(!cartItem)}
                >
                  <FavoriteIcon 
                  sx={{
                    color:"red",
                    display:cartItem ? "flex" : "none"
                  }}
                  />
                  <FavoriteBorderIcon  
                  sx={{
                    display:!cartItem ? "flex" : "none"
                  }}
                  />
                </Box>
            </Box>
            <Box className='tourDescriptions'
            sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                justifyContent:"flex-start",
                rowGap:1,
                padding:{xs:"1%",md:"2%"}
            }}
            >
                <Typography
                sx={{
                  fontSize:{xs:"16px",md:"16px"}
                }}
                >Harry Potter Tour of Warner Bros. Studio with Transport from London</Typography>
                <Box className='rating&Reviews'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <Rating name="read-only" value={4} readOnly 
                  sx={{
                    fontSize:{xs:"16px",md:"18px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >1877</Typography>
                </Box>
                <Box className='hoursTime'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <AccessTimeIcon 
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >7 hours</Typography>
                </Box>
                <Box className='priceDetails'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"12px",md:"14px"}
                  }}
                  >from </Typography>
                  <Box className='price'
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"flex-start"
                  }}
                  >
                    <CurrencyRupeeIcon 
                    sx={{
                      fontSize:{xs:"16px",md:"18px"}
                    }}
                    />
                    <Typography
                    sx={{
                      fontSize:{xs:"14px",md:"16px"},
                      fontWeight:"bold"
                    }}
                    >9275.88</Typography>
                  </Box>  
                </Box>
          </Box>
        </Box>
        <Divider />
        <Box className='individualProduct'
          sx={{
            width:{xs:"100%",md:"400px"},
            border:"2px solid #f0efed",
            "&:hover":{
              boxShadow:"0px 0px 10px 3px #d9d8d7",
              cursor:"pointer"
            },
            display:"flex",
            flexDirection:{xs:"row",md:"column"},
            columnGap:{xs:2,md:0}
          }}
          >
            <Box className='images&AddToWishList'
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"flex-start",
              position:"relative",
              width:{xs:"170px",md:"400px"},
              height:{xs:"170px",md:"250px"}
            }}
            >
                <Box 
                component={"img"}
                src={Image2}
                alt={"wishListImages"}
                sx={{
                  width:{xs:"170px",md:"400px"},
                  height:{xs:"170px",md:"250px"}
                }}
                />
                <Box className='favoriteIcons'
                sx={{
                  position:"absolute",
                  right:"10px",
                  top:"10px",
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  "&:hover":{
                    cursor:"pointer"
                  }
                }}
                onClick={()=>setCartItem(!cartItem)}
                >
                  <FavoriteIcon 
                  sx={{
                    color:"red",
                    display:cartItem ? "flex" : "none"
                  }}
                  />
                  <FavoriteBorderIcon  
                  sx={{
                    display:!cartItem ? "flex" : "none"
                  }}
                  />
                </Box>
            </Box>
            <Box className='tourDescriptions'
            sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                justifyContent:"flex-start",
                rowGap:1,
                padding:{xs:"1%",md:"2%"}
            }}
            >
                <Typography
                sx={{
                  fontSize:{xs:"16px",md:"16px"}
                }}
                >Harry Potter Tour of Warner Bros. Studio with Transport from London</Typography>
                <Box className='rating&Reviews'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <Rating name="read-only" value={4} readOnly 
                  sx={{
                    fontSize:{xs:"16px",md:"18px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >1877</Typography>
                </Box>
                <Box className='hoursTime'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <AccessTimeIcon 
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >7 hours</Typography>
                </Box>
                <Box className='priceDetails'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"12px",md:"14px"}
                  }}
                  >from </Typography>
                  <Box className='price'
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"flex-start"
                  }}
                  >
                    <CurrencyRupeeIcon 
                    sx={{
                      fontSize:{xs:"16px",md:"18px"}
                    }}
                    />
                    <Typography
                    sx={{
                      fontSize:{xs:"14px",md:"16px"},
                      fontWeight:"bold"
                    }}
                    >9275.88</Typography>
                  </Box>  
                </Box>
          </Box>
        </Box>
        <Divider />
        <Box className='individualProduct'
          sx={{
            width:{xs:"100%",md:"400px"},
            border:"2px solid #f0efed",
            "&:hover":{
              boxShadow:"0px 0px 10px 3px #d9d8d7",
              cursor:"pointer"
            },
            display:"flex",
            flexDirection:{xs:"row",md:"column"},
            columnGap:{xs:2,md:0}
          }}
          >
            <Box className='images&AddToWishList'
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"flex-start",
              position:"relative",
              width:{xs:"170px",md:"400px"},
              height:{xs:"170px",md:"250px"}
            }}
            >
                <Box 
                component={"img"}
                src={Image2}
                alt={"wishListImages"}
                sx={{
                  width:{xs:"170px",md:"400px"},
                  height:{xs:"170px",md:"250px"}
                }}
                />
                <Box className='favoriteIcons'
                sx={{
                  position:"absolute",
                  right:"10px",
                  top:"10px",
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  "&:hover":{
                    cursor:"pointer"
                  }
                }}
                onClick={()=>setCartItem(!cartItem)}
                >
                  <FavoriteIcon 
                  sx={{
                    color:"red",
                    display:cartItem ? "flex" : "none"
                  }}
                  />
                  <FavoriteBorderIcon  
                  sx={{
                    display:!cartItem ? "flex" : "none"
                  }}
                  />
                </Box>
            </Box>
            <Box className='tourDescriptions'
            sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                justifyContent:"flex-start",
                rowGap:1,
                padding:{xs:"1%",md:"2%"}
            }}
            >
                <Typography
                sx={{
                  fontSize:{xs:"16px",md:"16px"}
                }}
                >Harry Potter Tour of Warner Bros. Studio with Transport from London</Typography>
                <Box className='rating&Reviews'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <Rating name="read-only" value={4} readOnly 
                  sx={{
                    fontSize:{xs:"16px",md:"18px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >1877</Typography>
                </Box>
                <Box className='hoursTime'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <AccessTimeIcon 
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >7 hours</Typography>
                </Box>
                <Box className='priceDetails'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"12px",md:"14px"}
                  }}
                  >from </Typography>
                  <Box className='price'
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"flex-start"
                  }}
                  >
                    <CurrencyRupeeIcon 
                    sx={{
                      fontSize:{xs:"16px",md:"18px"}
                    }}
                    />
                    <Typography
                    sx={{
                      fontSize:{xs:"14px",md:"16px"},
                      fontWeight:"bold"
                    }}
                    >9275.88</Typography>
                  </Box>  
                </Box>
          </Box>
        </Box>
        <Divider />
        <Box className='individualProduct'
          sx={{
            width:{xs:"100%",md:"400px"},
            border:"2px solid #f0efed",
            "&:hover":{
              boxShadow:"0px 0px 10px 3px #d9d8d7",
              cursor:"pointer"
            },
            display:"flex",
            flexDirection:{xs:"row",md:"column"},
            columnGap:{xs:2,md:0}
          }}
          >
            <Box className='images&AddToWishList'
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"flex-start",
              position:"relative",
              width:{xs:"170px",md:"400px"},
              height:{xs:"170px",md:"250px"}
            }}
            >
                <Box 
                component={"img"}
                src={Image2}
                alt={"wishListImages"}
                sx={{
                  width:{xs:"170px",md:"400px"},
                  height:{xs:"170px",md:"250px"}
                }}
                />
                <Box className='favoriteIcons'
                sx={{
                  position:"absolute",
                  right:"10px",
                  top:"10px",
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  "&:hover":{
                    cursor:"pointer"
                  }
                }}
                onClick={()=>setCartItem(!cartItem)}
                >
                  <FavoriteIcon 
                  sx={{
                    color:"red",
                    display:cartItem ? "flex" : "none"
                  }}
                  />
                  <FavoriteBorderIcon  
                  sx={{
                    display:!cartItem ? "flex" : "none"
                  }}
                  />
                </Box>
            </Box>
            <Box className='tourDescriptions'
            sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                justifyContent:"flex-start",
                rowGap:1,
                padding:{xs:"1%",md:"2%"}
            }}
            >
                <Typography
                sx={{
                  fontSize:{xs:"16px",md:"16px"}
                }}
                >Harry Potter Tour of Warner Bros. Studio with Transport from London</Typography>
                <Box className='rating&Reviews'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <Rating name="read-only" value={4} readOnly 
                  sx={{
                    fontSize:{xs:"16px",md:"18px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >1877</Typography>
                </Box>
                <Box className='hoursTime'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <AccessTimeIcon 
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >7 hours</Typography>
                </Box>
                <Box className='priceDetails'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"12px",md:"14px"}
                  }}
                  >from </Typography>
                  <Box className='price'
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"flex-start"
                  }}
                  >
                    <CurrencyRupeeIcon 
                    sx={{
                      fontSize:{xs:"16px",md:"18px"}
                    }}
                    />
                    <Typography
                    sx={{
                      fontSize:{xs:"14px",md:"16px"},
                      fontWeight:"bold"
                    }}
                    >9275.88</Typography>
                  </Box>  
                </Box>
          </Box>
        </Box>
        <Divider />
        <Box className='individualProduct'
          sx={{
            width:{xs:"100%",md:"400px"},
            border:"2px solid #f0efed",
            "&:hover":{
              boxShadow:"0px 0px 10px 3px #d9d8d7",
              cursor:"pointer"
            },
            display:"flex",
            flexDirection:{xs:"row",md:"column"},
            columnGap:{xs:2,md:0}
          }}
          >
            <Box className='images&AddToWishList'
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"flex-start",
              position:"relative",
              width:{xs:"170px",md:"400px"},
              height:{xs:"170px",md:"250px"}
            }}
            >
                <Box 
                component={"img"}
                src={Image2}
                alt={"wishListImages"}
                sx={{
                  width:{xs:"170px",md:"400px"},
                  height:{xs:"170px",md:"250px"}
                }}
                />
                <Box className='favoriteIcons'
                sx={{
                  position:"absolute",
                  right:"10px",
                  top:"10px",
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  "&:hover":{
                    cursor:"pointer"
                  }
                }}
                onClick={()=>setCartItem(!cartItem)}
                >
                  <FavoriteIcon 
                  sx={{
                    color:"red",
                    display:cartItem ? "flex" : "none"
                  }}
                  />
                  <FavoriteBorderIcon  
                  sx={{
                    display:!cartItem ? "flex" : "none"
                  }}
                  />
                </Box>
            </Box>
            <Box className='tourDescriptions'
            sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                justifyContent:"flex-start",
                rowGap:1,
                padding:{xs:"1%",md:"2%"}
            }}
            >
                <Typography
                sx={{
                  fontSize:{xs:"16px",md:"16px"}
                }}
                >Harry Potter Tour of Warner Bros. Studio with Transport from London</Typography>
                <Box className='rating&Reviews'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <Rating name="read-only" value={4} readOnly 
                  sx={{
                    fontSize:{xs:"16px",md:"18px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >1877</Typography>
                </Box>
                <Box className='hoursTime'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <AccessTimeIcon 
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >7 hours</Typography>
                </Box>
                <Box className='priceDetails'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"12px",md:"14px"}
                  }}
                  >from </Typography>
                  <Box className='price'
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"flex-start"
                  }}
                  >
                    <CurrencyRupeeIcon 
                    sx={{
                      fontSize:{xs:"16px",md:"18px"}
                    }}
                    />
                    <Typography
                    sx={{
                      fontSize:{xs:"14px",md:"16px"},
                      fontWeight:"bold"
                    }}
                    >9275.88</Typography>
                  </Box>  
                </Box>
          </Box>
        </Box>
        <Divider />
        <Box className='individualProduct'
          sx={{
            width:{xs:"100%",md:"400px"},
            border:"2px solid #f0efed",
            "&:hover":{
              boxShadow:"0px 0px 10px 3px #d9d8d7",
              cursor:"pointer"
            },
            display:"flex",
            flexDirection:{xs:"row",md:"column"},
            columnGap:{xs:2,md:0}
          }}
          >
            <Box className='images&AddToWishList'
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"flex-start",
              position:"relative",
              width:{xs:"170px",md:"400px"},
              height:{xs:"170px",md:"250px"}
            }}
            >
                <Box 
                component={"img"}
                src={Image2}
                alt={"wishListImages"}
                sx={{
                  width:{xs:"170px",md:"400px"},
                  height:{xs:"170px",md:"250px"}
                }}
                />
                <Box className='favoriteIcons'
                sx={{
                  position:"absolute",
                  right:"10px",
                  top:"10px",
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  "&:hover":{
                    cursor:"pointer"
                  }
                }}
                onClick={()=>setCartItem(!cartItem)}
                >
                  <FavoriteIcon 
                  sx={{
                    color:"red",
                    display:cartItem ? "flex" : "none"
                  }}
                  />
                  <FavoriteBorderIcon  
                  sx={{
                    display:!cartItem ? "flex" : "none"
                  }}
                  />
                </Box>
            </Box>
            <Box className='tourDescriptions'
            sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                justifyContent:"flex-start",
                rowGap:1,
                padding:{xs:"1%",md:"2%"}
            }}
            >
                <Typography
                sx={{
                  fontSize:{xs:"16px",md:"16px"}
                }}
                >Harry Potter Tour of Warner Bros. Studio with Transport from London</Typography>
                <Box className='rating&Reviews'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <Rating name="read-only" value={4} readOnly 
                  sx={{
                    fontSize:{xs:"16px",md:"18px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >1877</Typography>
                </Box>
                <Box className='hoursTime'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  columnGap:1
                }}
                >
                  <AccessTimeIcon 
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >7 hours</Typography>
                </Box>
                <Box className='priceDetails'
                sx={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"12px",md:"14px"}
                  }}
                  >from </Typography>
                  <Box className='price'
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"flex-start"
                  }}
                  >
                    <CurrencyRupeeIcon 
                    sx={{
                      fontSize:{xs:"16px",md:"18px"}
                    }}
                    />
                    <Typography
                    sx={{
                      fontSize:{xs:"14px",md:"16px"},
                      fontWeight:"bold"
                    }}
                    >9275.88</Typography>
                  </Box>  
                </Box>
          </Box>
        </Box>
        <Divider />

    </Box>
    </Box>
    {/* <Footer /> */}
    </Box>
  )
}

export default WishList