// CampLocation.jsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CampLocation = ({ image, title, location }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        height: 300,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: '100%',
            aspectRatio: '16 / 9',
            objectFit: 'cover',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CampLocation;
