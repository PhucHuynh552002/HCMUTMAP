import { Box } from '@mui/material';
import Header from '../components/Header';
import b8 from '../data/pic/B8/toa-b8.jpg';
import sa4 from '../data/pic/B8/b8.png';
const B8 = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="B8"
          subtitle="Khoa Kỹ thuật Địa chất và Dầu khí" />
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
              <img src={b8}  alt="A3" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              </Box>
              <br></br>
              <Header title= "Sơ đồ B8"></Header>
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

export default B8;
