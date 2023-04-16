import { Box } from '@mui/material';
import Header from '../components/Header';
import out from '../data/pic/NPKL/NPKL1.jpg';
import out2 from '../data/pic/NPKL/NPKL2.jpg';
const NPKL = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="National Polime Key Lab"
          subtitle="Phòng thí nghiệm trọng điểm Quốc gia về Vật liệu Polyme & Compozit"
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
          <div class="main-map" style={{ textAlign: 'center', alignItems: 'center'}}>
            <Header title= "Ảnh toà nhà"></Header>
            <Box style={{display: 'flex'}}>
              <img src={out}  alt="A3" style={{width: "40%", height: "100%", marginLeft:"10%"}}/>
              <img src={out2}  alt="A3" style={{width: "40%", height: "100%", marginLeft:"5%"}}/>
              </Box>
              <br></br>
          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default NPKL;
