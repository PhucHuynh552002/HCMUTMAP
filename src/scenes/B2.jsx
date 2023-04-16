import { Box } from '@mui/material';
import Header from '../components/Header';
import b2 from '../data/pic/B2/B2.jpg';
import sa4 from '../data/pic/B2/Sơ đồ B2 (1).png';
const B2 = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="B2"
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
          <div class="main-map" style={{ textAlign: 'center', alignItems: 'center'}}>
            <Header title= "Ảnh toà nhà"></Header>
            <Box>
              <img src={b2}  alt="A3" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              </Box>
              <br></br>
              <Header title= "Sơ đồ B2"></Header>
              <Box>
              <img src={sa4}  alt="A3" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              </Box>
          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default B2;
