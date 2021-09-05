import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";
import "./styles.css";
const About = () => {
  const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
  return(
    <div className="user-container">
      <Card className={makeStyles.root}>
        <CardActionArea>
          <CardMedia
            className={makeStyles.media}
            image="/images/IMG_8142.jpg"
            title="Nicholas Santiago"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Nicholas Santiago
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nick is a ten year veteran and a Sofware Developer.
              </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card className={makeStyles.root}>
        <CardActionArea>
          <CardMedia
            className={makeStyles.media}
            image="/images/IMG_8142.jpg"
            title="Nicholas Santiago"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Kofa Freeman
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Kofa is a ten year veteran and a Business Professional.
              </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
export default About;
