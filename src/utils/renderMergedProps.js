import { createElement } from "react";

export const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return createElement(component, finalProps);
};
