import './Sidebar.css';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <Typography variant="subtitle1" className="section-title">
        Cost of car
      </Typography>
      <div className="cost-inputs">
        <TextField size="small" label="from" variant="outlined" fullWidth />
        <TextField size="small" label="to" variant="outlined" fullWidth />
      </div>

      <Accordion defaultExpanded className="filter-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails className="filter-options">
          <FormControlLabel control={<Checkbox />} label="Aidal" />
          <FormControlLabel control={<Checkbox />} label="Knai" />
          <FormControlLabel control={<Checkbox />} label="escape" />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className="filter-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Company</Typography>
        </AccordionSummary>
        <AccordionDetails className="filter-options">
          <FormControlLabel control={<Checkbox />} label="escape" />
          <FormControlLabel control={<Checkbox />} label="Aidal" />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className="filter-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>License type</Typography>
        </AccordionSummary>
        <AccordionDetails className="filter-options">
          <FormControlLabel control={<Checkbox />} label="1 year" />
          <FormControlLabel control={<Checkbox />} label="2 year" />
          <FormControlLabel control={<Checkbox />} label="1.5 year" />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className="filter-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Number of travelers</Typography>
        </AccordionSummary>
        <AccordionDetails className="filter-options">
          <FormControlLabel control={<Checkbox />} label="2" />
          <FormControlLabel control={<Checkbox />} label="3–4" />
          <FormControlLabel control={<Checkbox />} label="5+" />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className="filter-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails className="filter-options">
          <FormControlLabel control={<Checkbox />} label="Seoul" />
          <FormControlLabel control={<Checkbox />} label="Korea" />
          <FormControlLabel control={<Checkbox />} label="Pusan" />
        </AccordionDetails>
      </Accordion>

      <div className="sidebar-buttons">
        <Button
          variant="contained"
          sx={{ borderRadius: '20px' }}
          color="warning"
          fullWidth
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: '20px' }}
          color="primary"
          fullWidth
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
