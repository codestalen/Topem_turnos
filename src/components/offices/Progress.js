import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  circle: {
    backgroundColor: "#1F9547",
    padding: "4px 10px",
    marginTop: "12px",
    width: 20,
    height: 30,
    borderRadius: "9999px",
    marginRight: 20,
    textAlign: "center",
  },

  progres: {
    width: "20px",
    height: "10px",
    fontWeight: "900",
  },
});

const Progress = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.circle}>
        <Typography
          color="white"
          sx={{
            fontSize: 13,
            fontWeight: 700,
            paddingTop: "5px",
          }}
        >
          1
        </Typography>
      </div>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <div className={classes.circle}>
        <Typography
          color="white"
          sx={{
            fontSize: 13,
            fontWeight: 700,
            paddingTop: "5px",
          }}
        >
          2
        </Typography>
      </div>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <div className={classes.circle}>
        <Typography
          color="white"
          sx={{
            fontSize: 13,
            fontWeight: 700,
            paddingTop: "5px",
          }}
        >
          3
        </Typography>
      </div>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <div className={classes.circle}>
        <Typography
          color="white"
          sx={{
            fontSize: 13,
            fontWeight: 700,
            paddingTop: "5px",
          }}
        >
          4
        </Typography>
      </div>
    </>
  );
};

export default Progress;
