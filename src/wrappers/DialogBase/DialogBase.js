import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const DialogBase = ({ dialogTitle, dialogOpener, ...props }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Dialog fullScreen={fullScreen} open={dialogOpener} fullWidth>
      <DialogTitle id="responsive-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
};

DialogBase.propTypes = {
  dialogTitle: PropTypes.string.isRequired,
};
export default DialogBase;
