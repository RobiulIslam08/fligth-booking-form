// import React, { useState } from "react";
// import { Container, Paper, Box, Tabs, Tab, Typography, TextField, Select, MenuItem, Button } from "@mui/material";
// import PropTypes from "prop-types";

// // CustomTabPanel Component
// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// // a11yProps Function
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// // FlightBookingForm Component
// const FlightBookingForm = () => {
//   const [tabValue, setTabValue] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <Container
//       style={{
//         padding: '20px',
//         marginTop: '20px',
//         background: 'url("https://i.ibb.co/X4wYGp5/pexels-fotios-photos-1107717.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: 'white'
//       }}
//     >
//       {/* Tabs Section */}
//       <Box className="bg-white" sx={{ width: '100%', mb: 2 }}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
//           <Tabs
//             value={tabValue}
//             onChange={handleTabChange}
//             aria-label="basic tabs example"
//             variant="fullWidth"
//           >
//             <Tab label="FLIGHT" {...a11yProps(0)} />
//             <Tab label="HOTEL" {...a11yProps(1)} />
//             <Tab label="TOUR" {...a11yProps(2)} />
//             <Tab label="VISA" {...a11yProps(3)} />
//           </Tabs>
//         </Box>
//       </Box>

//       {/* Content Section */}
//       <Paper
//         elevation={3}
//         style={{
//           padding: '20px',
//           backgroundColor: 'white',
//           color: 'black',
//           borderRadius: '10px'

//         }}
//       >
//         <CustomTabPanel value={tabValue} index={0}>
//           <Typography variant="h6">FLIGHT BOOKING</Typography>
//           <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
//             <TextField label="FROM" variant="outlined" fullWidth />
//             <TextField label="TO" variant="outlined" fullWidth />
//           </Box>
//           <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
//             <TextField label="DATE" variant="outlined" fullWidth />
//             <Select variant="outlined" fullWidth>
//               <MenuItem value="economy">Economy</MenuItem>
//               <MenuItem value="business">Business</MenuItem>
//             </Select>
//           </Box>
//           <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>SEARCH FOR FLIGHT</Button>
//         </CustomTabPanel>
//         <CustomTabPanel value={tabValue} index={1}>
//           <Typography variant="h6">HOTEL BOOKING</Typography>
//           {/* Hotel Booking Form */}
//         </CustomTabPanel>
//         <CustomTabPanel value={tabValue} index={2}>
//           <Typography variant="h6">TOUR BOOKING</Typography>
//           {/* Tour Booking Form */}
//         </CustomTabPanel>
//         <CustomTabPanel value={tabValue} index={3}>
//           <Typography variant="h6">VISA APPLICATION</Typography>
//           {/* Visa Application Form */}
//         </CustomTabPanel>
//       </Paper>
//     </Container>
//   );
// };

// export default FlightBookingForm;
import { Button } from "@mui/material";
import React, { useState } from "react";

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
      className="p-5  rounded-lg mt-5 max-w-[90%] mx-auto"
      style={{
        background: 'url("https://i.ibb.co/X4wYGp5/pexels-fotios-photos-1107717.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
       
      }}
    >
      {/* Tabs Section */}
      <div className="w-2/3 mx-auto rounded-full mb-4 bg-white">
        <div className="  mb-4">
          <div className="flex justify-between">
          <Button
  className={`w-full m-10 py-2  ${tabValue === 0 ? "!bg-[#32d095] border-b-2 border-blue-500 !text-white" : "!text-[#32d095]"}`}
  onClick={() => handleTabChange(null, 0)}
  {...a11yProps(0)}
>
  FLIGHT
</Button>
<Button
  className={`w-full m-10 py-2 ${tabValue === 1 ? "!bg-[#32d095] border-b-2 border-blue-500 !text-white" : "!text-[#32d095]"}`}
  onClick={() => handleTabChange(null, 1)}
  {...a11yProps(1)}
>
  HOTEL
</Button>
<Button
  className={`w-full m-10 py-2 ${tabValue === 2 ? "!bg-[#32d095] border-b-2 border-blue-500 !text-white" : "!text-[#32d095]"}`}
  onClick={() => handleTabChange(null, 2)}
  {...a11yProps(2)}
>
  TOUR
</Button>
<Button
  className={`w-full m-10 py-2 ${tabValue === 3 ? "!bg-[#32d095] border-b-2 border-blue-500 !text-white" : "!text-[#32d095]"}`}
  onClick={() => handleTabChange(null, 3)}
  {...a11yProps(3)}
>
  VISA
</Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 bg-white text-black rounded-lg shadow-lg">
        <CustomTabPanel value={tabValue} index={0}>
          <h6 className="text-lg font-semibold">FLIGHT BOOKING</h6>
          <div className="flex gap-4 mt-4">
            <input type="text" placeholder="FROM" className="w-full px-4 py-2 border rounded-lg" />
            <input type="text" placeholder="TO" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="flex gap-4 mt-4">
            <input type="text" placeholder="DATE" className="w-full px-4 py-2 border rounded-lg" />
            <select className="w-full px-4 py-2 border rounded-lg">
              <option value="economy">Economy</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
            SEARCH FOR FLIGHT
          </button>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <h6 className="text-lg font-semibold">HOTEL BOOKING</h6>
          {/* Hotel Booking Form */}
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          <h6 className="text-lg font-semibold">TOUR BOOKING</h6>
          {/* Tour Booking Form */}
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={3}>
          <h6 className="text-lg font-semibold">VISA APPLICATION</h6>
          {/* Visa Application Form */}
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default FlightBookingForm;
