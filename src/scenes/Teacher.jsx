import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { mockDataContacts } from '../data/mockData';
import Header from '../components/Header';
import { useTheme } from '@mui/material';

const Teach = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    } 
  ];

  return (
    <Box m="10px">
      <Header
        title="Teachers"
      />
     
    </Box>
  );
};

export default Teach;
