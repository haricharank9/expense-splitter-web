import React, { Component } from "react";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import Transactions from "../../components/Transactions/Transactions";
import { AuthContext } from "../../context/AuthContextProvider";
import DialogBase from "../../wrappers/DialogBase/DialogBase";
import Template from "../Template/Template";
import styles from "./Home.module.scss";

class Home extends Component {
  state = {
    openDialog: false,
  };

  transactions = [
    {
      iconName: "fastfood",
      title: "Food",
      description: "Because you need strength",
    },
  ];

  addButtonClicked = () => {
    this.setState({ openDialog: true });
  };
  render() {
    return (
      <>
        <AuthContext.Consumer>
          {authContext => <Template onLogout={authContext?.logout}></Template>}
        </AuthContext.Consumer>
        <div className={styles.Button_Container}>
          <FloatingButton
            className={styles.Floating_Button}
            onClicked={this.addButtonClicked}
          />
          <DialogBase
            dialogTitle="Enter Expense"
            dialogOpener={this.state.openDialog}
          >
            <ExpenseForm></ExpenseForm>
          </DialogBase>
        </div>
        <Transactions transactions={this.transactions} />
      </>
    );
  }
}
export default Home;
