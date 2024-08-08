import { Button, ButtonGroup, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { PiAirplaneTiltFill } from "react-icons/pi"
import { GiHouse, GiJourney } from "react-icons/gi";
import { RiVisaFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
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
        <div className="p-6">
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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div
      className="p-[3px] rounded-lg mt-5 max-w-[90%] mx-auto"
      style={{
        background: 'url("https://i.ibb.co/X4wYGp5/pexels-fotios-photos-1107717.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      {/* Tabs Section */}
      <div className="lg:w-2/3 w-full  mx-auto rounded-full mb-4 bg-white">
        <div className="mt-7 md:mt-10 md:mb-4 mb-3">
          <div className="flex justify-between px-2 py-1">
            <Button
              size="small"
              sx={{ borderRadius: '1.5rem' }} 
              className={`w-full m-10 py-2 rounded-3xl ${tabValue === 0 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
              onClick={() => handleTabChange(null, 0)}
              {...a11yProps(0)}
            >
              <div className="flex justify-center items-center gap-2">
                <PiAirplaneTiltFill className="text-lg" />
                <p>FLIGHT</p>
              </div>
            </Button>
            <Button
              size="small"
              sx={{ borderRadius: '1.5rem' }} 
              className={`w-full rounded-3xl m-10 py-2 ${tabValue === 1 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
              onClick={() => handleTabChange(null, 1)}
              {...a11yProps(1)}
            >
              <div className="flex justify-center items-center gap-2">
                <GiHouse className="text-lg" />
                <p>HOTEL</p>
              </div>
            </Button>
            <Button
              size="small"
              sx={{ borderRadius: '1.5rem' }} 
              className={`w-full rounded-3xl m-10 py-2 ${tabValue === 2 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
              onClick={() => handleTabChange(null, 2)}
              {...a11yProps(2)}
            >
              <div className="flex justify-center items-center gap-2">
                <GiJourney className="text-lg" />
                <p>TOUR</p>
              </div>
            </Button>
            <Button
              size="small"
              sx={{ borderRadius: '1.5rem' }} 
              className={`w-full rounded-3xl m-10 py-2 ${tabValue === 3 ? "!bg-[#32d095] border border-blue-500 !text-white" : "!text-[#32d095]"}`}
              onClick={() => handleTabChange(null, 3)}
              {...a11yProps(3)}
            >
              <div className="flex justify-center items-center gap-2">
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
                    control={<Radio sx={{
                      '&.Mui-checked': {
                        color: '#32d095',
                      },
                    }} />}
                    label="ROUND-WAY"
                  />
                  <FormControlLabel
                    value="one-way"
                    control={<Radio sx={{
                      '&.Mui-checked': {
                        color: '#32d095',
                      },
                    }} />}
                    label="ONE-WAY"
                  />
                  <FormControlLabel
                    value="multi-city"
                    control={<Radio sx={{
                      '&.Mui-checked': {
                        color: '#32d095',
                      },
                    }} />}
                    label="MULTI-CITY"
                  />
                </RadioGroup>
              </FormControl>

              {/* from, plan, to */}
              <div className="md:flex mt-2 justify-between">
                <div className="border flex-1">
                  <div className="text-center">
                  <p>From</p>
                  <h1 className="text-[#32d095] text-lg md:text-4xl">DXB</h1>
                  
                  {/* input */}
                  <div className="flex items-center mt-7 justify-center">
                   
                    <div className="p-1 bg-[#32d095]">
                    <MdLocationOn className="text-white  text-2xl" />
                    </div>
                    
                    <div>
                      <input className="bg-[#d7e7f4] p-1  border-none outline-none" type="text" placeholder="Dubai Intl Airport ( DXB )" />
                    </div>
                  </div>
                  {/* date */}
                  <div className="flex mt-2 items-center justify-center">
                   
                    <div className="p-1 bg-[#32d095]">
                    <SlCalender className="text-white  text-2xl" />
                    </div>
                    
                    <div>
                      <input className="bg-[#d7e7f4] p-1  border-none outline-none" type="text" placeholder="Dubai Intl Airport ( DXB )" />
                    </div>
                  </div>
                  </div>
                </div>
                <div className="hidden md:block border">plan</div>
                <div className="border flex-1">
                <div className="text-center">
                  <p>To</p>
                  <h1 className="text-[#32d095] text-lg md:text-4xl">DXC</h1>
                  </div>
                </div>
              </div>
            </div>

            <Divider orientation="vertical" flexItem sx={{ height: 'auto', mx: 0, borderColor: 'grey.400', borderRadius: "20px" }} />
            <div className="w-1/4 p-4 rounded-lg bg-white">
              India
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
