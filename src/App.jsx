import { Button, ButtonGroup, Divider, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import React, { useState } from "react";
import { PiAirplaneTiltFill } from "react-icons/pi"
import { GiHouse, GiJourney } from "react-icons/gi";
import { RiVisaFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ImAirplane } from "react-icons/im";
import { BiSolidPlaneAlt } from "react-icons/bi";
// CustomTabPanel Component
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="pb-8 pr-6 pl-6">
          {children}
        </div>
      )}
    </div>
  );
}

// a11yProps Function
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// FlightBookingForm Component
const FlightBookingForm = () => {
  const [tabValue, setTabValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };



  return (
    <div
      className="p-[3px] rounded-lg my-10 max-w-[85%] mx-auto"
      style={{
        background: 'url("https://i.ibb.co/X4wYGp5/pexels-fotios-photos-1107717.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      {/* Tabs Section */}
      <div className="lg:w-[50%] w-[85%] mx-auto rounded-full  bg-white">
        <div className="mt-7 md:mt-10 md:mb-4 mb-3">
          <div className="flex justify-between px-2 py-1">
            <Button
              size="small"
              sx={{ borderRadius: '1.5rem', width: '400px' }}
              className={`w-full m-10 py-2 rounded-3xl ${tabValue === 0 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
              onClick={() => handleTabChange(null, 0)}
              {...a11yProps(0)}
            >
              <div className="flex flex-col lg:flex-row justify-center  items-center lg:gap-2">
                <PiAirplaneTiltFill className="text-lg  " />
                <p>FLIGHT</p>
              </div>
            </Button>
            <Button
              size="small"
              sx={{ borderRadius: '1.5rem', width: '400px' }}
              className={`w-full rounded-3xl m-10 py-2 ${tabValue === 1 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
              onClick={() => handleTabChange(null, 1)}
              {...a11yProps(1)}
            >
              <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                <GiHouse className="text-lg" />
                <p>HOTEL</p>
              </div>
            </Button>
            <Button
              size="small"
              sx={{ borderRadius: '1.5rem', width: '400px' }}
              className={`w-full rounded-3xl m-10 py-2 ${tabValue === 2 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
              onClick={() => handleTabChange(null, 2)}
              {...a11yProps(2)}
            >
              <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                <GiJourney className="text-lg" />
                <p>TOUR</p>
              </div>
            </Button>
            <Button
              size="small"
              sx={{ borderRadius: '1.5rem', width: '400px' }}
              className={`w-full rounded-3xl m-10 py-2 ${tabValue === 3 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
              onClick={() => handleTabChange(null, 3)}
              {...a11yProps(3)}
            >
              <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                <RiVisaFill className="text-lg" />
                <p>VISA</p>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-black rounded-lg shadow-lg">
        <CustomTabPanel value={tabValue} index={0}>
          <div className="md:flex">
            <div className="flex-1 p-4 rounded-lg bg-white">

              {/* radio button */}

              <FormControl className="text-[#32d095]">
                <RadioGroup
                  row
                  aria-labelledby="flight-type-radio-group"
                  name="flight-type-radio-group"
                >
                  <FormControlLabel
                    value="round-way"
                    control={
                      <Radio
                        size="small" // Makes the radio button smaller
                        sx={{
                          '&.Mui-checked': {
                            color: '#32d095',
                          },
                          // Custom size for the radio button
                          '& svg': {
                            width: '18px', // Adjust the size of the radio button
                            height: '18px',
                          },
                        }}
                      />
                    }
                    label={<span style={{ fontSize: '0.875rem' }}>ROUND-WAY</span>} // Smaller label text
                  />
                  <FormControlLabel
                    value="one-way"
                    control={
                      <Radio
                        size="small"
                        sx={{
                          '&.Mui-checked': {
                            color: '#32d095',
                          },
                          '& svg': {
                            width: '18px',
                            height: '18px',
                          },
                        }}
                      />
                    }
                    label={<span style={{ fontSize: '0.875rem' }}>ONE-WAY</span>} // Smaller label text
                  />
                  <FormControlLabel
                    value="multi-city"
                    control={
                      <Radio
                        size="small"
                        sx={{
                          '&.Mui-checked': {
                            color: '#32d095',
                          },
                          '& svg': {
                            width: '18px',
                            height: '18px',
                          },
                        }}
                      />
                    }
                    label={<span style={{ fontSize: '0.875rem' }}>MULTI-CITY</span>} // Smaller label text
                  />
                </RadioGroup>
              </FormControl>


              {/* from, plan, to */}
              <div className="md:flex mt-2 justify-between">
                <div className=" flex-1 ">
                  <div className="text-center">
                    <p className="text-[#525371] text-xs md:text-base">FROM</p>
                    <h1 className="text-[#32d095] text-xl md:text-[40px] font-medium mt-3">DXB</h1>

                    {/* input */}
                    <div className="flex items-center mt-7 w-full justify-center">

                      <div className="px-2 py-1  rounded-l-md  bg-[#32d095]">
                        <MdLocationOn className="text-white  text-2xl" />
                      </div>

                      <div >
                        <input className="bg-[#d7e7f4] p-1  rounded-r-md border-none outline-none" type="text" placeholder="Dubai Intl Airport ( DXB )" />
                      </div>
                    </div>
                    {/* date */}
                    <div className="flex mt-2 items-center justify-center">

                      <div className="px-2 py-1  rounded-l-md  bg-[#32d095]">
                        <SlCalender className="text-white  text-2xl" />
                      </div>

                      <div>
                        {/* <input className="bg-[#d7e7f4] p-1  border-none outline-none" type="text" placeholder="Dubai Intl Airport ( DXB )" /> */}
                        <DatePicker selected={startDate} className="bg-[#d7e7f4] p-1 rounded-r-md  border-none outline-none" onChange={(date) => setStartDate(date)} />

                      </div>
                    </div>
                  </div>
                </div>

                {/* Plane */}
                <div className="hidden mt-10 md:block  px-10">
                  <ImAirplane className="text-5xl text-[#32d095]" />
                  <BiSolidPlaneAlt className="text-6xl text-gray-500  outline-green-500" />
                </div>
                <div className=" flex-1 mt-10 lg:mt-0">
                  <div className="text-center">
                    <p className="text-[#525371] text-xs md:text-base">TO</p>
                    <h1 className="text-[#32d095] text-xl md:text-[40px] font-medium mt-3">DXC</h1>
                    {/* input */}
                    <div className="flex w-full items-center mt-7 justify-center">

                      <div className="px-2 py-1  rounded-l-md  bg-[#32d095]">
                        <MdLocationOn className="text-white  text-2xl" />
                      </div>

                      <div>
                        <input className="bg-[#d7e7f4] p-1 rounded-r-md border-none outline-none" type="text" placeholder="Dubai Intl Airport ( DXB )" />
                      </div>
                    </div>
                    {/* date */}
                    <div className="flex mt-2 items-center justify-center">

                      <div className="px-2 py-1  rounded-l-md  bg-[#32d095]">
                        <SlCalender className="text-white  text-2xl" />
                      </div>

                      <div>
                        {/* <input className="bg-[#d7e7f4] p-1  border-none outline-none" type="text" placeholder="Dubai Intl Airport ( DXB )" /> */}
                        <DatePicker selected={endDate} className="bg-[#d7e7f4] p-1 rounded-r-md  border-none outline-none" onChange={(date) => setEndDate(date)} />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Divider orientation="vertical" flexItem sx={{ height: 'auto', mx: 0, borderColor: 'grey.400', borderRadius: "20px" }} />
            <div className="lg:w-[30%] w-full p-4 rounded-lg bg-white ">
              {/* select */}
              {/* <ButtonGroup aria-label="number of adults, children, and infants" className="gap-2">
                
              </ButtonGroup> */}
              <div className="flex justify-between">
                <FormControl variant="standard" className="m-2">
                  <Select
                    value={adult}
                    onChange={(e) => setAdult(e.target.value)}
                    displayEmpty
                    inputProps={{
                      'aria-label': 'Adult',
                      style: { padding: '4px', fontSize: '14px' },
                    }}
                    sx={{
                      fontSize: '14px',
                      backgroundColor: '#d7e7f4',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      '&:before': { borderBottom: 'none' },
                      '&:after': { borderBottom: 'none' },
                      '& .MuiSelect-select:focus': {
                        backgroundColor: '#d7e7f4',
                      },
                    }}
                  >
                    <MenuItem value={1}>1 Adult</MenuItem>
                    <MenuItem value={2}>2 Adults</MenuItem>
                    <MenuItem value={3}>3 Adults</MenuItem>
                    <MenuItem value={4}>4 Adults</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" className="m-2">
                  <Select
                    value={child}
                    onChange={(e) => setChild(e.target.value)}
                    displayEmpty
                    inputProps={{
                      'aria-label': 'Child',
                      style: { padding: '4px', fontSize: '14px' },
                    }}
                    sx={{
                      fontSize: '14px',
                      backgroundColor: '#d7e7f4',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      '&:before': { borderBottom: 'none' },
                      '&:after': { borderBottom: 'none' },
                      '& .MuiSelect-select:focus': {
                        backgroundColor: '#d7e7f4',
                      },
                    }}
                  >
                    <MenuItem value={0}>0 Child</MenuItem>
                    <MenuItem value={1}>1 Child</MenuItem>
                    <MenuItem value={2}>2 Children</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" className="m-2">
                  <Select
                    value={infant}
                    onChange={(e) => setInfant(e.target.value)}
                    displayEmpty
                    inputProps={{
                      'aria-label': 'Infant',
                      style: { padding: '4px', fontSize: '14px' },
                    }}
                    sx={{
                      fontSize: '14px',
                      backgroundColor: '#d7e7f4',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      '&:before': { borderBottom: 'none' },
                      '&:after': { borderBottom: 'none' },
                      '& .MuiSelect-select:focus': {
                        backgroundColor: '#d7e7f4',
                      },
                    }}
                  >
                    <MenuItem value={0}>0 Infant</MenuItem>
                    <MenuItem value={1}>1 Infant</MenuItem>
                    <MenuItem value={2}>2 Infants</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* Economy */}
              <div className="lg:mt-5 mt-3">
                <FormControl className="w-full  " variant="standard" >
                  <Select
                    value={infant}
                    onChange={(e) => setInfant(e.target.value)}
                    displayEmpty
                    inputProps={{
                      'aria-label': 'Infant',
                      style: { padding: '4px', fontSize: '14px' },
                    }}
                    sx={{
                      fontSize: '14px',
                      backgroundColor: '#d7e7f4',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      '&:before': { borderBottom: 'none' },
                      '&:after': { borderBottom: 'none' },
                      '& .MuiSelect-select:focus': {
                        backgroundColor: '#d7e7f4',
                      },
                    }}
                  >
                    <MenuItem value={0}>Economy</MenuItem>
                    <MenuItem value={1}>Premium Economy</MenuItem>
                    <MenuItem value={2}>Business</MenuItem>
                    <MenuItem value={2}>Premiun Business</MenuItem>
                    <MenuItem value={2}>First Class</MenuItem>
                    <MenuItem value={2}>Premium First Class</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/*Search Button  */}
              <div className="lg:mt-24 mt-16">
                <Button
                  size="small"

                  className={`w-full mb-2 py-2  ${tabValue === 0 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
                  onClick={() => handleTabChange(null, 0)}
                  {...a11yProps(0)}
                >Search For Flight</Button>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel className="bg-white rounded-lg" value={tabValue} index={1}>
          <h6 className="text-lg font-semibold">HOTEL BOOKING</h6>
          {/* Hotel Booking Form */}
        </CustomTabPanel>
        <CustomTabPanel className="bg-white rounded-lg" value={tabValue} index={2}>
          <h6 className="text-lg font-semibold">TOUR BOOKING</h6>
          {/* Tour Booking Form */}
        </CustomTabPanel>
        <CustomTabPanel className="bg-white rounded-lg" value={tabValue} index={3}>
          <h6 className="text-lg font-semibold">VISA APPLICATION</h6>
          {/* Visa Application Form */}
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default FlightBookingForm;
