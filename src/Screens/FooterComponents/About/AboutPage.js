import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../../HeaderComponents/Header'
import Footer from "../../FooterComponents/Footer"
import { useTranslation } from 'react-i18next'

const AboutPage = () => {

  const {t} = useTranslation()

  return (
    <Box>
        <Header />
        <Box className='mainBody'
        sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"flex-start",
          justifyContent:"flex-start",
          padding:{xs:"2% 3% 2% 3%",md:"2% 5% 2% 5%"},
          width:{xs:"90%",md:"60%"},
          rowGap:1,
          height:{xs:"fit-content",md:"fit-content"}
        }}
        >
          <Typography
          sx={{
            fontSize:{xs:"18px",md:"20px"},
            fontWeight:"bold"
          }}
          >
            {t("About Us")}
          </Typography>
          <Typography
          sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >
            {t("MekoTourizm makes it easy to find and book something you'll love to do. With access to the world's largest selection of high-quality experiences, there's always something new to discover, both near and far from home. From must-do moments to who-knew discoveries, see the familiar in a new way, or the unknown for the first time!")}
            </Typography>
          <Typography
          sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >
            {t("With industry-leading flexibility and last-minute availability, it's never too late to make any day extraordinary. Plan ahead, or decide that morning. Change your dates. Or change your mind entirely! This is your time off, your way, and we're here to help.")}
            </Typography>
          <Typography
          sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >
            {t("We also know that your time off is precious. So we ruthlessly focus on quality, and we specialise in experiences so incredible, you'll want to tell your friends. Spend less time searching, and more time making memories. Discover story-worthy experiences, anytime, anywhere.")}
          </Typography>
          <Typography
          sx={{
            fontSize:{xs:"18px",md:"20px"},
            fontWeight:"bold"
          }}
          >
            {t("Why choose MekoTourizm?")}
          </Typography>
          <Box>
            <ul style={{fontSize:"18px"}}>
              <li>
                {t("Exceptional flexibility You???re in control, with free cancellation and payment options to satisfy any plan or budget.")}
              </li>
              <li>
                {t("Quality you can trust Our experiences meet high quality standards and are backed by millions of reviews, so you know you???re getting the best.")}
              </li>
              <li>
                {t("Experiences to remember Browse and book tours and activities so incredible, you???ll want to tell your friends.")}
              </li>
              <li>
                {t("Award-winning support Find a lower price? Have a change in plans? No problem. We???re here to help, 24/7.")}
              </li>
            </ul>
          </Box>
          <br />
          {/* business name and address */}
          <Box>
            <Typography  sx={{
            fontSize:{xs:"16px",md:"20px"}
          }}>Business Name - MEKOSOFT TEKNOLOJ?? ??THALAT ??HRACAT SANAY?? VE T??CARET L??M??TED ????RKET??</Typography>
            <Typography  sx={{
            fontSize:{xs:"16px",md:"20px"}
          }}>Address - ??HSAN??YE MAH. KUVA?? M??LL??YE CAD. SAMAN ????H. NO: 169 ???? KAPI NO: 5 AKDEN??Z/ MERS??N</Typography>
          </Box>
        </Box>
        <Footer />
    </Box>
  )
}

export default AboutPage