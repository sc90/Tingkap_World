import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  widget: {
    width: "250px",
    height: "100vh",
    background: "#ffc04c",
    position: "absolute",
    right: "0px",
    zIndex: 1
  }
});

const Widget = () => {
  const classes = useStyles();
  return <div className={classes.widget} />;
};

export default Widget;
