import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Card sx={{ width: 200 }}>
      <CardMedia
        sx={{ height: 180, width: "100%" }}
        image={img}
        title="indumentaria"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="outlined">
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
