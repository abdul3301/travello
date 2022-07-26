import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js';
import mapStyles from './mapStyles';

function Map(props) {
 const {setCoordinates, setBounds, coordinates, places, setChildClicked} = props;
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  // const [childClicked, setChildClicked] = useState(null);
  return (
    <>
     <div className={classes.mapContainer}>
      <GoogleMapReact 
      bootstrapURLKeys={{ key: "AIzaSyBDl48on6IGMrKbCK8L-KnTtpV2wPJiV7w"}}
       defaultCenter={coordinates}
       center={coordinates}
       defaultZoom={14}
       margin={[50, 50, 50, 50]}
       options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
       onChange={(e)=>{
        //  console.log(e);
         setCoordinates({ lat: e.center.lat, lng: e.center.lng });
         setBounds({ne: e.marginBounds.ne, sw: e. marginBounds.sw});
       }}
       onChildClick={(child) => setChildClicked(child)}
      >
     {
     places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}
      </GoogleMapReact>
      </div>
      </>
  )
}

export default Map;
