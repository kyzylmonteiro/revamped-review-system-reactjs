import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import CollectionsBookmarkSharpIcon from "@material-ui/icons/CollectionsBookmarkSharp";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function TheProjectIdea() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        // style={{ top: "10px", left: "10px", position: "fixed" }}
        style={{ float: "right", marginBottom: "20px" }}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Concept <CollectionsBookmarkSharpIcon />
      </Button>
      <Dialog
        fullScreen="true"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          The Idea
        </DialogTitle>
        <DialogContent style={{ textAlign: "center" }} dividers>
          <img
            width="1000"
            alt="description of the idea"
            src={require("./img1.png")}
          />
          <img
            width="1000"
            alt="description of the idea"
            style={{ paddingTop: "50px" }}
            src={require("./img2.png")}
          />
          <img
            width="1000"
            alt="description of the idea"
            style={{ paddingTop: "50px" }}
            src={require("./img3.png")}
          />
          <img
            width="1000"
            alt="description of the idea"
            style={{ paddingTop: "50px" }}
            src={require("./img4.gif")}
          />
          <img
            width="1000"
            alt="description of the idea"
            style={{ paddingTop: "50px" }}
            src={require("./img5.png")}
          />
          <img
            width="1000"
            alt="description of the idea"
            style={{ paddingTop: "50px" }}
            src={require("./img6.png")}
          />
          <img
            width="1000"
            alt="description of the idea"
            style={{ paddingTop: "50px" }}
            src={require("./img7.png")}
          />
        </DialogContent>
        <DialogActions style={{ position: "static", bottom: "10px" }}>
          <Button
            autoFocus
            variant="contained"
            onClick={handleClose}
            color="primary"
          >
            Back To the Demo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
