import { Box } from '@mui/material';
import Header from '../components/Header';
import a3 from '../data/pic/TBI/TBI3.jpg';
import a4 from '../data/pic/TBI/TBI4.jpg';
import a5 from '../data/pic/TBI/TBI5.jpg';
const TBI = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="HCMUT-TBI"
          subtitle="Trung tâm Ươm tạo doanh nghiệp công nghệ"
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
              <img src={a5}  alt="A3" style={{width: "60%", height: "60%"}}/>
              </Box>
              <br></br>
              <Header title= "Ảnh văn phòng"></Header>
              <Box display={'flex'}>
              <img src={a3}  alt="A3" style={{width: "40%", height: "60%", marginLeft:"10%"}}/>
              <img src={a4}  alt="A3" style={{width: "40%", height: "60%", marginLeft:"5%", marginBottom:"10%"}}/>

              </Box>
          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default TBI;
