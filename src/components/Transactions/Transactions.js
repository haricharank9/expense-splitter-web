import { Timeline } from "@material-ui/lab";
import React from "react";
import TimelineCard from "../TimelineItem/TimelineCard";

const Transactions = props => {
  const { transactions } = props;
  const transactionCards = transactions.map((tran, index) => (
    <TimelineCard
      key={index}
      iconName={tran.iconName}
      title={tran.title}
      description={tran.description}
    />
  ));

  return <Timeline align="left">{transactionCards}</Timeline>;
};

export default Transactions;
