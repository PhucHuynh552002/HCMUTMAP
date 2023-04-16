import { Box } from '@mui/material';
import Header from '../components/Header';
import out from '../data/pic/KIOS/KIOS.jpg';
const Kios = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="KIOS"
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
              <img src={out}  alt="A3" style={{width: "100%", height: "100%"}}/>
              </Box>
              <br></br>
          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default Kios;
