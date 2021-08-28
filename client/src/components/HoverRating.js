import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'Horrible',
  1: 'Horrible',
  1.5: 'Disappointing',
  2: 'Disappointing',
  2.5: 'Poor',
  3: 'Poor',
  3.5: 'Bad',
  4: 'Bad',
  4.5: 'Meh',
  5: 'Meh',
  5.5: 'Ok',
  6: 'Ok',
  6.5: 'Good',
  7: 'Good',
  7.5: 'Pretty Good',
  8: 'Pretty Good',
  8.5: 'Excellent',
  9: 'Excellent',
  9.5: 'Masterpiece',
  10: 'Marvelous MasterPiece',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
  },
});

export default function HoverRating({ value, onRatingChange }) {
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        max={10}
        onChange={(event, newValue) => {
          onRatingChange(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
