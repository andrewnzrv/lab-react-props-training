import styles from "../styles/idCard.module.css";
import { format } from "date-fns";

function IdCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.picture} />
      <div className={styles.info}>
        <p>
          <b>First name:</b> {props.firstName}
        </p>
        <p>
          <b>Last name:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height / 100}m
        </p>
        <p>
          <b>Birth:</b> {format(props.birth, "yyy-MM-dd")}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
