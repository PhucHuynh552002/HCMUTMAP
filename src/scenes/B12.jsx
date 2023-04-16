import { Box } from '@mui/material';
import Header from '../components/Header';
import b12 from '../data/pic/B12/b12.jpg';
import b12a from '../data/pic/B12/b12a.jpg';
import b12b from '../data/pic/B12/b12b.jpg';
const B12 = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="B12"
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
            <Box>
              <img src={b12}  alt="A3" style={{width: "80%", height: "80%", marginLeft:"10%", marginBottom:"10%"}}/>
              </Box>
            <Box style={{display: 'flex'}}>
              <img src={b12a}  alt="A3" style={{width: "45%", height: "50%", marginLeft:"0%"}}/>
              <img src={b12b}  alt="A3" style={{width: "45%", height: "50%", marginLeft:"5%"}}/>
              </Box>
              <br></br>
              
          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default B12;
