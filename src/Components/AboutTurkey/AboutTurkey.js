import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Screens/FooterComponents/Footer";
import Header from "../../Screens/HeaderComponents/Header";

const AboutTurkey = () => {
  return (
    <Box>
      <Header />
      <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:5,
        padding:{xs:"2% 4% 2% 4%",md:"2% 6% 2% 6%"},
        width:{xs:"92%",md:"86%"}
      }}
      >
        <Typography sx={{fontSize:{xs:"18px",md:"20px"},fontWeight:"bold"}}>About Turkey</Typography>
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            rowGap:1
          }}
        >
          <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
            Turkey has been located in intersection point of Europe, Asia and
            Middle East. The country has an area of 780.000 km2. The tribes who
            had lived on that historical lands from North to South, from East to
            West had started to ride their horses since Neolithic ages (7000`s
            B.C.), therefore they have left traces of civilizations one of which
            have been following another.
          </Typography>
          <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
            This paradise country surrounded by sea from three sides has been
            known with its hot sun, long sandy coasts, blue sea, abundance of
            historical treasures and modern yacht seaports.
          </Typography>
          <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
            The peerles beauty of Istanbul and the Bosporus in Marmara Region,
            fascinating view of Hierapolis which creates wonders and the
            magnificence of Efes Ruins in Aegean Region; the fairy chimneys
            embellishing Cappadocia Region where four seasons are lived at the
            same time with worldwide famous sun, sea and rich cultural presence;
            Mount Ararat with its many legends such as Prophet Nuh and the
            second largest Mosaic Museum of the world in East and South-East
            Anatolian Regions, all of them exhibit so many different excellent
            beauties and richness.
          </Typography>
        </Box>
        <Box>
          <Typography  sx={{fontSize:{xs:"18px",md:"20px"},fontWeight:"bold"}}>Statistics:</Typography>
          <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            rowGap:1
          }}
          >
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>Average age of population is 28.5.</Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
              There are 166 universities, 104 of which are public universities.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>Internet access per household: %41.6.</Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
              There are 21 national, 14 regional and 229 local TV channels.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
              Turkey is a Non-permanent member of the United Nations Security
              Council 2009-2010.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
              On October 3rd, 2005 Turkey began negotiation process with the EU
              and become a candidate for the European Union since 2005.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
              Since 1945 Turkey is a member of United Nations and also a member
              of Unesco since.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
              Since 1949 become a member of Council of Europe.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>Turkey become a member of Nato since 1952.</Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
              Turkey’s Number of 3G mobile phone subscribers is 19.407.264
              Number of mobile internet users is above 1.448.020 and Number of
              internet subscribers is 8.672.376
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>
              The mobile phone users are more than 61.8 million people.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",md:"18px"}}}>A population of Turkey is above 73.722.988.</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutTurkey;
