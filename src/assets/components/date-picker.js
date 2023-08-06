import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const DP_Day = ({ startDate, setStartDate }) => {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      wrapperClassName="datePicker" 
      selected={startDate}
      onChange={(date) => setStartDate(date)} 
      dateFormat="dd/MM/yyyy"
    />
  );
};

export const DP_DayTime_Range_Start = ({ startTime, setStartTime }) => {
  return (
    <DatePicker
      selected={startTime}
      onChange={(date) => setStartTime(date)}
      showTimeSelect
      dateFormat="yyyy/MM/dd - hh:mm aa"
    />
  );
};
export const DP_DayTime_Range_End = ({ endTime, setEndTime }) => {
  return (
    <DatePicker
      selected={endTime}
      onChange={(date) => setEndTime(date)}
      showTimeSelect
      dateFormat="yyyy/MM/dd - hh:mm aa"
    />
  );
};
