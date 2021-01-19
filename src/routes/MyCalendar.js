import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  WorkWeek,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";

/*const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="US"
        className="react-calendar"
      />
    </div>
  );
};*/

class MyCalendar extends React.Component {
  localData: EventSettingsModel = {
    dataSource: [
      {
        EndTime: new Date(2021, 0, 5, 6, 30),
        StartTime: new Date(2021, 0, 5, 4, 0),
      },
    ],
  };
  render() {
    return (
      <>
        <link
          href="https://cdn.syncfusion.com/ej2/material.css"
          rel="stylesheet"
          type="text/css"
        />
        <ScheduleComponent currentView="Month" eventSettings={this.localData}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </>
    );
  }
}
export default MyCalendar;
