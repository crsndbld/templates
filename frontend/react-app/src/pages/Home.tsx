import React, { useState, VFC } from "react";
import Layout from "../components/Layout";
import NumericInput from "react-numeric-input";
import { number } from "zod";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
registerLocale('ja', ja)
import { Calendar } from 'react-bootstrap-icons';
import DatePicker from 'tailwind-react-datepicker'

export interface Home {}
type Props = {};
const Home: VFC<Props> = () => {
  const inset = { inset: "0px" };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Layout>
        <p>Home</p>
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} locale={ja} 
        dateFormat="yyyy/MM/dd"
         popperModifiers={[
        {
          name: "offset",
          options: {
            offset: [300, 0],
          },
        },
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "viewport",
            tether: false,
            altAxis: true,
          },
        },
      ]}><Calendar/></DatePicker>
        <NumericInput
          mobile
          min={0} max={10} value={0}
          strict
          className='w-[100px] m-[2px] focus:outline-none'
        />
      </Layout>
    </>
  );
};

export default Home;
