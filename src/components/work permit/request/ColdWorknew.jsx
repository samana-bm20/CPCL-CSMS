/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Tabs, Tab, TextField, Select, MenuItem, Button, IconButton, Divider,
} from "@mui/material";
import { AcUnitRounded, AddLocationAltRounded } from "@mui/icons-material";
import MapModal from "../../../mapModal";

export const ColdWork = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [formData, setFormData] = useState({
    prNo: "",
    name: "",
    department: "",
    designation: "",
    entryDate: "",
    entryTime: "",
    permitCategory: "",
    notificationNo:"",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    dept_section_contractor:"",
    maintenanceTechnician:"",
    location: "",
    area: "",
    subArea: "",
    description: "",
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAreaSelection = (selectedArea) => {
    debugger
    // setFormData((prev) => ({ ...prev, area: selectedArea.area }));
    formData.area = selectedArea.area
    console.log(`For data is : ${formData}`)
    // formData.area = selectedArea.area
  };

  //#region Form HTML
  const renderTabContent = (tab) => {
    switch (tab) {
      case 0:
        return (
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">PR No.</p>
              <TextField
                size="small"
                color="secondary"
                fullWidth
                name="prNo"
                value={formData.prNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Name</p>
              <TextField
                size="small"
                color="secondary"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Department</p>
              <TextField
                size="small"
                color="secondary"
                fullWidth
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Designation</p>
              <TextField
                size="small"
                color="secondary"
                fullWidth
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Entry Date</p>
              <TextField
                size="small"
                color="secondary"
                type="date"
                fullWidth
                name="entryDate"
                value={formData.entryDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Entry Time</p>
              <TextField
                size="small"
                color="secondary"
                type="time"
                fullWidth
                name="entryTime"
                value={formData.entryTime}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Permit Category</p>
              <TextField
                size="small"
                color="secondary"
                fullWidth
                name="prNo"
                value={formData.prNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Notification No.</p>
              <TextField
                size="small"
                color="secondary"
                fullWidth
                name="notificationNo"
                value={formData.notificationNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div className="w-full flex justify-between items-center">
                <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Area</p>
                <MapModal setSelectedArea={handleAreaSelection}/>
              </div>
              <Select
                size="small"
                color="secondary"
                fullWidth
                name="area"
                value={formData.area}
                onChange={handleInputChange}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={10}>Refinery-I</MenuItem>
                <MenuItem value={20}>Refinery-II</MenuItem>
                <MenuItem value={30}>Refinery-III</MenuItem>
              </Select>
            </div>
            <div>
                <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Sub Area</p>
              <Select
                size="small"
                color="secondary"
                fullWidth
                name="area"
                value={formData.area}
                onChange={handleInputChange}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={10}>Crude-I</MenuItem>
                <MenuItem value={20}>Crude-II</MenuItem>
                <MenuItem value={30}>Crude-III</MenuItem>
              </Select>
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Start Date</p>
              <TextField
                size="small"
                color="secondary"
                type="date"
                fullWidth
                name="entryDate"
                value={formData.entryDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">End Date</p>
              <TextField
                size="small"
                color="secondary"
                type="date"
                fullWidth
                name="entryDate"
                value={formData.entryDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Start Time</p>
              <TextField
                size="small"
                color="secondary"
                type="time"
                fullWidth
                name="entryTime"
                value={formData.entryTime}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">End Time</p>
              <TextField
                size="small"
                color="secondary"
                type="time"
                fullWidth
                name="entryTime"
                value={formData.entryTime}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Name of Dept /Section/ Contractor</p>
              <TextField
                size="small"
                color="secondary"
                fullWidth
                name="dept_section_contractor"
                value={formData.dept_section_contractor}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Maintenance Technician</p>
              <TextField
                size="small"
                color="secondary"
                fullWidth
                name="maintenanceTechnician"
                value={formData.maintenanceTechnician}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Exact Location of Work</p>
              <TextField
                multiline
                rows={4}
                size="small"
                color="secondary"
                fullWidth
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-sm text-contrast font-medium font-inter">Description of Work</p>
              <TextField
                multiline
                rows={4}
                size="small"
                color="secondary"
                fullWidth
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          // <Grid container spacing={2}>
          //   <Grid item xs={6}>
          //     <TextField
          //       fullWidth
          //       label="Permit Category"
          //       name="permitCategory"
          //       value={formData.permitCategory}
          //       onChange={handleInputChange}
          //     />
          //   </Grid>
          //   <Grid item xs={6}>
          //     <TextField
          //       fullWidth
          //       label="Start Date"
          //       type="date"
          //       name="startDate"
          //       value={formData.startDate}
          //       onChange={handleInputChange}
          //       InputLabelProps={{ shrink: true }}
          //     />
          //   </Grid>
          //   <Grid item xs={6}>
          //     <TextField
          //       fullWidth
          //       label="End Date"
          //       type="date"
          //       name="endDate"
          //       value={formData.endDate}
          //       onChange={handleInputChange}
          //       InputLabelProps={{ shrink: true }}
          //     />
          //   </Grid>
          //   <Grid item xs={6}>
          //     <TextField
          //       fullWidth
          //       label="Exact Location of Work"
          //       name="location"
          //       value={formData.location}
          //       onChange={handleInputChange}
          //     />
          //   </Grid>
          // </Grid>
        );
      case 2:
        return (
          <div>
            <p className="font-xs font-inter text-contrast">General Safety Checklist for Performer :- The following points shall be checked and compiled before requesting the permit</p>
            <div className="py-4">
            <table className="w-full border-collapse border border-gray-300 shadow-md text-left rounded-xl">
  <thead className="bg-gray-100">
    <tr>
      <th className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">S.No.</th>
      <th className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">General Points</th>
      <th className="border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">Checklist</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2 text-sm">1.</td>
      <td className="border border-gray-300 px-4 py-2 text-sm">JSA conducted for the job communicated</td>
      <td className="border border-gray-300 px-4 py-2 text-sm">Yes No N/A</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2 text-sm">2.</td>
      <td className="border border-gray-300 px-4 py-2 text-sm">Tool box talk given by site engineer before start of job</td>
      <td className="border border-gray-300 px-4 py-2 text-sm">Yes No N/A</td>
    </tr>
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2 text-sm">3.</td>
      <td className="border border-gray-300 px-4 py-2 text-sm">Proper means of access and exit provided in work area</td>
      <td className="border border-gray-300 px-4 py-2 text-sm">Yes No N/A</td>
    </tr>
  </tbody>
</table>

            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-20 px-32 h-max bg-secondary-bg">
      <div className="rounded-xl bg-white shadow-card min-h-[35rem]">
        <div className="p-5 flex items-center justify-center">
          <AcUnitRounded color="contrast" fontSize="large" />
          <p className="pl-2 font-bold text-2xl text-contrast text-center font-inter">Cold Work Permit Application</p>
        </div>
        <Divider />
        <div className="p-5">
          <div>
            <Tabs value={activeTab} onChange={handleTabChange}
              TabIndicatorProps={{
                style: { display: 'none' },
              }}
              sx={{
                bgcolor: 'primary.light',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                px: 1,
              }}>
              <Tab label="Requester Details" sx={{
                bgcolor: 'primary.main', mt: 1, mr: 1,
                minHeight: '40px',
                color: 'primary.contrastText',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                '&.Mui-selected': {
                  bgcolor: 'primary.contrastText',
                  color: 'secondary.main',
                },
              }} />
              <Tab label="Cold Work Details" sx={{
                bgcolor: 'primary.main', mt: 1, mr: 1,
                minHeight: '40px',
                color: 'primary.contrastText',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                '&.Mui-selected': {
                  bgcolor: 'primary.contrastText',
                  color: 'secondary.main',
                },
              }} />
              <Tab label="General Safety" sx={{
                bgcolor: 'primary.main', mt: 1, mr: 1,
                minHeight: '40px',
                color: 'primary.contrastText',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                '&.Mui-selected': {
                  bgcolor: 'primary.contrastText',
                  color: 'secondary.main',
                },
              }} />
            </Tabs>
          </div>
          <div className="py-10 px-20">
            {renderTabContent(activeTab)}
            <div className="flex justify-end pt-10">
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  setActiveTab((prev) => (prev < 2 ? prev + 1 : prev))
                }
              >
                {activeTab === 2 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColdWork;
