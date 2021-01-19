import { dbService } from "fbase";
import React, { useState } from "react";
import MyCalendar from "./MyCalendar";
import styles from "./Home.module.css";

const Home = ({ userObj }) => {
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "text") {
      setReason(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "starttime") {
      setStartTime(value);
    } else if (name === "finishtime") {
      setFinishTime(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(document.myform.date.value);
    dbService.collection("reservations").add({
      reason: reason,
      date: date,
      startTime: startTime,
      finishTime: finishTime,
      user: userObj.uid,
    });
    setReason("");
    setDate("");
    setStartTime("");
    setFinishTime("");
  };
  return (
    <div className={styles.Container}>
      <MyCalendar />
      <br />
      <br />
      <form onSubmit={onSubmit} name="myform" class={styles.MyForm}>
        <span>예약 사유:</span>
        <input
          name="text"
          type="text"
          placeholder="예약 사유"
          required
          value={reason}
          onChange={onChange}
        />
        <span>예약 날짜:</span>
        <input
          name="date"
          type="date"
          required
          value={date}
          onChange={onChange}
        />
        <span>시작 시간:</span>
        <input
          name="starttime"
          type="time"
          required
          value={startTime}
          onChange={onChange}
        />
        <span>종료 시간:</span>
        <input
          name="finishtime"
          type="time"
          required
          value={finishTime}
          onChange={onChange}
        />
        <input type="submit" value="완료" />
      </form>
    </div>
  );
};
export default Home;
