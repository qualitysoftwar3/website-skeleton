import { PropsWithChildren } from "react";
import Styles from "./Button.module.css";

interface Props {
  onClick: () => void;
  primary: boolean;
}

function Button(props: PropsWithChildren<Props>) {
  const classes = [Styles.button];
  if (!props.primary) {
    classes.push(Styles.buttonSecondary);
  }
  return (
    <button className={classes.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
Button.defaultProps = {
  primary: true,
};

export default Button;
