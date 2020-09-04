import { Icon, makeStyles, Paper, Typography } from "@material-ui/core";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import styles from "./TimelineCard.module.scss";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "6px 16px",
  },

  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimelineCard = props => {
  const { iconName, title, description } = props;
  const classes = useStyles();
  return (
    <TimelineItem className={styles.Root}>
      <TimelineSeparator>
        <TimelineDot>
          <Icon>{iconName}</Icon>
        </TimelineDot>
        <TimelineConnector className={classes.secondaryTail} />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCard;
