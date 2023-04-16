import { Box } from '@mui/material';
import Header from '../components/Header';
import b4 from '../data/pic/B4/toa-b4.jpg';
import sa4 from '../data/pic/B4/b4.jpg';
const B4 = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="b4"
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
              <img src={b4}  alt="A3" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              </Box>
              <br></br>
              <Header title= "Sơ đồ B4"></Header>
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

export default B4;
