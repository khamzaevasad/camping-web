import { Box, Typography, Select, MenuItem, IconButton } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

const CarControls = ({ sortValue, setSortValue, viewType, setViewType }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ddd',
        paddingBottom: 2,
        marginBottom: 3,
      }}
    >
      <Typography fontSize={14}>
        Item{' '}
        <Typography component="span" fontWeight={600} color="#1a73e8">
          25,156
        </Typography>
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography fontSize={14}>Sort by</Typography>

        <Select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          size="small"
          sx={{ minWidth: 100 }}
        >
          <MenuItem value="default">Select</MenuItem>
          <MenuItem value="price-low">Price Low to High</MenuItem>
          <MenuItem value="price-high">Price High to Low</MenuItem>
        </Select>

        <Select size="small" defaultValue={60}>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={90}>90</MenuItem>
        </Select>

        <IconButton
          onClick={() => setViewType('grid')}
          color={viewType === 'grid' ? 'primary' : 'default'}
        >
          <GridViewIcon />
        </IconButton>

        <IconButton
          onClick={() => setViewType('list')}
          color={viewType === 'list' ? 'primary' : 'default'}
        >
          <ViewListIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CarControls;
