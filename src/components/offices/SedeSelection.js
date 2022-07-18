import React, {useState} from "react";
import { makeStyles } from "@mui/styles";
import iconSearch from "../../assets/img/icon-search.svg";

const useStyles = makeStyles({
  containerIcon: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },

  input: {
    padding: "6px 20px",
    border: "1px solid #EFEFEF",
    backgroundColor: "#EFEFEF",
    borderRadius: "",
    marginTop: "20px",
    borderRadius: "9999px",
    "&:focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
  },
  icon: {
    width: "30px",
    paddingTop: "20px",
    marginLeft: "-40px",
  },

  containerSede: {
    marginTop: "40px",
    display: "flex",
    borderBottom: "1px solid #A7A7A7",
    paddingBottom: "20px",
  },

  radio: {
    content: "",
    width: "16px",
    height: "16px",
    float: "left",
    margin: "0.5em 0.5em 0 0",
    border: "2px solid #cccccc",
    background: "#fff",
    borderRadius: "100%",
  },

  containerText: {
    marginLeft: "15px",
  },

  textTitle: {
    fontSize: "13px",
    margin: "0 auto",
    color: "#3F3F41",
    fontWeight: "900",
  },
  textSub1: {
    fontSize: "10px",
    margin: "10px auto 0px",
    color: "#A5A5A5",
  },

  textSub2: {
    fontSize: "10px",
    margin: "2px auto",
    color: "#A5A5A5",
  },
});

const SedeSelection = ({selectSede, setSelectSede}) => {
  const classes = useStyles();

  return (
    <form>
      <div className={classes.containerIcon}>
        <input className={classes.input} type="text" placeholder="Búsqueda" />
        <img className={classes.icon} src={iconSearch} alt="icono buscar" />
      </div>
      <div className={classes.containerSede}>
        <input className={classes.radio} type="radio" value="Sede 1" checked={selectSede === 'Sede 1'}  onChange={() => setSelectSede('Sede 1')}  />
        <div className={classes.containerText}>
          <p className={classes.textTitle}>Sede 1</p>
          <p className={classes.textSub1}>Calle 1 # 87 - 78, Lorem Ipsum</p>
          <p className={classes.textSub2}>Horario: Lorem Ipsum</p>
        </div>
      </div>
      <div className={classes.containerSede}>
        <input className={classes.radio} type="radio" value="Sede 2" checked={selectSede === 'Sede 2'} onChange={() => setSelectSede('Sede 2')}  />
        <div className={classes.containerText}>
          <p className={classes.textTitle}>Sede 2</p>
          <p className={classes.textSub1}>Calle 1 # 87 - 78, Lorem Ipsum</p>
          <p className={classes.textSub2}>Horario: Lorem Ipsum</p>
        </div>
      </div>
      <div className={classes.containerSede}>
        <input className={classes.radio} type="radio" value="Sede 3" checked={selectSede === 'Sede 3'} onChange={() => setSelectSede('Sede 3')}  />
        <div className={classes.containerText}>
          <p className={classes.textTitle}>Sede 3</p>
          <p className={classes.textSub1}>Calle 1 # 87 - 78, Lorem Ipsum</p>
          <p className={classes.textSub2}>Horario: Lorem Ipsum</p>
        </div>
      </div>
      <div className={classes.containerSede}>
        <input className={classes.radio} type="radio" value="Sede 4" checked={selectSede === 'Sede 4'} onChange={() => setSelectSede('Sede 4')}  />
        <div className={classes.containerText}>
          <p className={classes.textTitle}>Sede 4</p>
          <p className={classes.textSub1}>Calle 1 # 87 - 78, Lorem Ipsum</p>
          <p className={classes.textSub2}>Horario: Lorem Ipsum</p>
        </div>
      </div>
    </form>
  );
};

export default SedeSelection;
