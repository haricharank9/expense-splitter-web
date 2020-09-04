import { Formik } from "formik";
import React, { Fragment } from "react";

const FormikBase = props => (
  <Formik validateOnMount={true} initialErrors={props.initialValues} {...props}>
    {formikProps => <Fragment>{props.children({ ...formikProps })}</Fragment>}
  </Formik>
);
export default FormikBase;
