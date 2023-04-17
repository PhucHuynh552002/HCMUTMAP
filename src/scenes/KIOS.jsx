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
            <Box>
              <img src={out}  alt="a1" style={{width: "50%", height: "50%", marginLeft:"25%"}}/>
              <p style={{ color: 'white', fontSize: '20px', textAlign: 'center'}}>Giờ làm việc (Thứ 2 - Thứ 6): <br />Sáng: 7h30 - 10h45. <br />Chiều: 13h - 16h15.</p>
              </Box>
          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default Kios;
