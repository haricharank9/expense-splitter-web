import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { useEffect } from "react";

const FormikContextBase = ({ formSubscription }) => {
  const { isValid, values } = useFormikContext();
  useEffect(() => {
    isValid ? formSubscription(values) : formSubscription(null);
  }, [isValid, values]);
  return null;
};

FormikContextBase.propTypes = {
  formSubscription: PropTypes.func.isRequired,
};
export default FormikContextBase;
