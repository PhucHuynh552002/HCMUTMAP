import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import { mockTempHistory } from '../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import Header from '../components/Header';
import StatBox from '../components/StatBox';
import ProgressCircle from '../components/ProgressCircle';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import MAP from '../data/pic/MAP.png'
import BIGMAP from '../data/pic/big-map.png'
const A2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="HCMUT MAP"
          subtitle="Welcome"

        />
      </Box>
      {/* MAP */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px">
        {/* so nguoi truy cap */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title="32,441"
            subtitle="người"
            progress="0.30"
            increase="+10%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '20px' }}
              />
            }
          />
        </Box>
            {/* map */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}>
          
                       
            {/* <img src={MAP} alt="Logo" style={{ width: "115.5%",height:"600px" }} /> */}
          <div class="main-map">
      <img src={BIGMAP} alt="hcmut-map" />
      <div class="building onetwo"></div>
      <div class="building eight"></div>
      <div class="building b1"></div>
      <div class="building b2"></div>
      <div class="building b3"></div>
      <div class="building b4"></div>
      <div class="building b6"></div>
      <div class="building b7"></div>
      <div class="building b8"></div>
      <div class="building b9"></div>
      <div class="building b10"></div>
      <div class="building b11"></div>
      <div class="building b12"></div>
      <div class="building a5"></div>
      <div class="building a1"></div>
      <div class="building a2"></div>
      <div class="building a4"></div>
      <div class="building a3"></div>
      <div class="building c1"></div>
      <div class="building c2"></div>
      <div class="building c3"></div>
      <div class="building c4"></div>
      <div class="building c5"></div>
      <div class="building c6"></div>
      <div class="building c7"></div>
      <div class="building c8"></div>
      <div class="building c9"></div>
      <div class="building c10"></div>
      <div class="building c11"></div>
      <div class="building kios"></div>
    </div>
                
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px">
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight="600">
              Building
            </Typography>
          </Box>
          {mockTempHistory.map((temperature, i) => (
            <Box
              key={`${temperature.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px">
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600">
                  {temperature.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {temperature.name}
                </Typography>
              </Box>
              
            </Box>
          ))}
        </Box>
        
      
      </Box>
    </Box>
    
  );
};

export default A2;
