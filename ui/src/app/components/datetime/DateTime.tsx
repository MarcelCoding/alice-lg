import { FC } from "react";

const FORMATTER = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "medium",
});

export interface DateTimeProps {
  value: Date,
}

const DateTime: FC<DateTimeProps> = props => {
  return (<>{FORMATTER.format(props.value)}</>);
}

export default DateTime;
