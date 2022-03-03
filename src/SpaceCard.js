import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';

export function SpaceCard({ title, img }) {
  return (
    <Card sx={{ maxWidth: 345,backgroundColor:'black',color:'white'}}>
    <CardMedia
      component="img"
      height="140"
      image={img}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
    </CardContent>
    
  </Card>
  );
}
