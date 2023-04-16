import { Box } from '@mui/material';
import Header from '../components/Header';
import a from '../data/pic/RECTIE/RECTIE.jpg';

const RECTIE = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="Trung tâm ươm tạo doanh nghiệp công nghệ"
          subtitle="HCMUT-RECTIE"
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
          <div clasEACTECs="main-map" style={{ textAlign: 'center', alignItems: 'center'}}>
            <Header title= "Ảnh ngoài"></Header>
            <Box>
              <img src={a}  alt="A3" style={{width: "60%", height: "60%"}}/>
              </Box>
              <br></br>

          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default RECTIE;
