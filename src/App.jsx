

import React, { useState } from "react";
import { Container, Paper, Grid, Typography, TextField, RadioGroup, FormControlLabel, Radio, Button, Select, MenuItem, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PiAirplaneTiltFill } from "react-icons/pi";

const FlightBookingForm = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  

  return (
    <Container style={{ padding: '20px', marginTop: '20px', background: 'url("https://i.ibb.co/X4wYGp5/pexels-fotios-photos-1107717.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }} >
      {/* tabs implement */}
     <div>

     </div>
    </Container>
  );
};

export default FlightBookingForm;
