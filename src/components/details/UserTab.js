import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import About from "./About";
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
        <Box style={{ margin: "2px", padding: "0px" }}>{children}</Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function UserTab({ user }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Skills & Certifications" {...a11yProps(1)} />
          <Tab label="Post" {...a11yProps(2)} />
          <Tab label="Spaces" {...a11yProps(3)} />
        </Tabs>
      </Box>
      {/* passing user props from here */}
      <CustomTabPanel value={value} index={0}>
        <About user={user} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h1>Add your Skills </h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h1>Add Post</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h1>Add spaces..</h1>
      </CustomTabPanel>
    </Box>
  );
}
