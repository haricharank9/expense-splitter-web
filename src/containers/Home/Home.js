import React, { Component } from "react";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import Transactions from "../../components/Transactions/Transactions";
import Template from "../Template/Template";
import styles from "./Home.module.scss";

class Home extends Component {
  transactions = [
    {
      iconName: "fastfood",
      title: "Food",
      description: "Because you need strength",
    },
  ];

  render() {
    return (
      <div>
        <Template></Template>
        <div className={styles.Button_Container}>
          <FloatingButton className={styles.Floating_Button} />
        </div>
        <Transactions transactions={this.transactions} />
      </div>
    );
  }
}
export default Home;
