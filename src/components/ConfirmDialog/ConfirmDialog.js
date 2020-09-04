import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const ConfirmDialog = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const { confirmHandler, dialogOpener, dialogTitle, dialogText } = props;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={dialogOpener}
      fullWidth
      maxWidth={"sm"}
      onClose={confirmHandler}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={confirmHandler} color="secondary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  dialogOpener: PropTypes.bool.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogText: PropTypes.string.isRequired,
};

export default ConfirmDialog;
