import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Meeting with Collins Blessing",
    start: new Date(2025, 0, 27, 10, 0),
    end: new Date(2025, 0, 27, 11, 0),
  },
  {
    title: " A Lunch Break",
    start: new Date(2025, 0, 7, 12, 30),
    end: new Date(2025, 0, 7, 13, 30),
  },
];

const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "90vh", backgroundColor: "white" }}
    />
  </div>
);

export default MyCalendar;
