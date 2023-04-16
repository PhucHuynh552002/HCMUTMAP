import { Box } from '@mui/material';
import Header from '../components/Header';
import a2 from '../data/pic/A2/A2.jpg';
import tv1 from '../data/pic/A2/TV1.jpg';
import tv2 from '../data/pic/A2/TV2.jpg';
import tv3 from '../data/pic/A2/TV3.jpg';

const A2 = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="A2"
          subtitle="Thư viện"
        />
      </Box>
      <Box
        display="flex">
        <Box
        display="flex"
        justifyContent= 'center'
        alignItems="center"
          gridColumn="span 10"
          gridRow="span 10">
          <div class="main-map" style={{ textAlign: 'center', alignItems: 'center'}}>
            <Header title= "Ảnh toà nhà"></Header>
            <Box>
              <img src={a2}  alt="a2" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              </Box>
              <br></br>
              <Header title= "Ảnh bên trong"></Header>
              <img src={tv1}  alt="a2" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              <br></br>
              <img src={tv2}  alt="a2" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              <br></br>
              <img src={tv3}  alt="a2" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
          </div>     
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default A2;
