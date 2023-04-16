import { Box } from '@mui/material';
import Header from '../components/Header';
import out from '../data/pic/C5/C51.jpg';
import out2 from '../data/pic/C5/C52.jpg';
import graph from '../data/pic/C5/C5N.png';
const C5 = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="C5"
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
            <Box style={{display: 'flex'}}>
              <img src={out}  alt="A3" style={{width: "30%", height: "50%", marginLeft:"13%"}}/>
              <img src={out2}  alt="A3" style={{width: "30%", height: "50%", marginLeft:"15%", marginTop:"15%"}}/>
              </Box>
              <br></br>
              <Header title= "Sơ đồ C5"></Header>
              <Box style={{display: 'flex'}}>
              <img src={graph}  alt="A3" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              </Box>
          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default C5;
