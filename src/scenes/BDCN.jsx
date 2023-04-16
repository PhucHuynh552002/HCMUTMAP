import { Box } from '@mui/material';
import Header from '../components/Header';
import a from '../data/pic/BDCN/BDCN.jpg';

const BDCN = () => {

  return (
    <div>
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="Xưởng thực tập Bảo dưỡng Công nghiệp"
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
            <Header title= "Ảnh trong xưởng"></Header>
            <Box>
              <img src={a}  alt="A3" style={{width: "100%", height: "100%", marginLeft: "0%"}}/>
              </Box>
              <br></br>

          </div>    
        </Box>

      </Box>

    </Box>
        </div>
  );
};

export default BDCN;
