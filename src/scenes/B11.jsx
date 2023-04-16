import { Box } from '@mui/material';
import Header from '../components/Header';
import b11 from '../data/pic/B11/toa-b11.jpg';
import b11a from '../data/pic/B11/toa-b11a.jpg';
import sa4 from '../data/pic/B11/b11.png';
const B11 = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="B11"
          subtitle="Chương trình Quốc tế/Phòng hội nghị"
        />
      </Box>
      <Box
        display="flex">
        <Box
        display="flex"
        justifyContent= 'center'
        alignItems="center"
          gridColumn="span 15"
          gridRow="span 15">
          <div class="main-map" style={{ textAlign: 'center', alignItems: 'center' }}>
            <Header title= "Ảnh toà nhà"></Header>
            <Box style={{display: 'flex'}}>
              <img src={b11}  alt="A3" style={{width: "45%", height: "50%", marginLeft:"0%"}}/>
              <img src={b11a}  alt="A3" style={{width: "45%", height: "50%", marginLeft:"5%"}}/>
              </Box>
              <br></br>
              <Header title= "Sơ đồ B11"></Header>
              <Box>
              <img src={sa4}  alt="A3" style={{width: "100%", height: "100%"}}/>
              </Box>
          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default B11;
