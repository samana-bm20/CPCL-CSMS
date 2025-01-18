/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Tabs, Tab, TextField, Select, MenuItem, Button, IconButton, Divider, FormControl, FormControlLabel, FormGroup,
  RadioGroup, Radio, Checkbox
} from "@mui/material";
import { AcUnitRounded, AddLocationAltRounded } from "@mui/icons-material";
import MapModal from "../MapModal";

export const ColdWork = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openMapModal, setOpenMapModal] = useState(false);

  const checklistData = [
    { id: 1, question: "JSA conducted for the job and communicated" },
    { id: 2, question: "Tool box talk given by site engineer before start of job" },
    { id: 3, question: "Proper means of access and exit provided in work area" },
    { id: 4, question: "Work area is clear of unwanted material and site is fit to carry out the job" },
    { id: 5, question: "All the appropriate tools and equipment identified, available, and inspected" },
    { id: 6, question: "Illumination requirements are identified and provided" },
    { id: 7, question: "Usage of non-sparking tools identified and provided" },
  ];
  const ppeOptions = [
    "Helmet", "Safety Shoes", "Hand Gloves", "Boiler Suit", "Face Shield",
    "Apron", "Compressed BA Set", "Goggles", "Dust Respirator",
    "Safety Net", "Fresh Air Mask", "Life Line", "Safety Harness", "Airline", "Gas Respirator", "Ear Muff"
  ];
  const [formData, setFormData] = useState({
    prNo: "",
    name: "",
    department: "",
    designation: "",
    entryDate: "",
    entryTime: "",
    permitCategory: "",
    notificationNo: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    dept_section_contractor: "",
    maintenanceTechnician: "",
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
    setFormData((prev) => ({ ...prev, area: selectedArea.area }));
    setOpenMapModal(false);
  };

  //#region Form HTML
  const renderTabContent = (tab) => {
    switch (tab) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">PR No.</p>
              <TextField
                size="small"
                color="primary"
                fullWidth
                name="prNo"
                value={formData.prNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Name</p>
              <TextField
                size="small"
                color="primary"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Department</p>
              <TextField
                size="small"
                color="primary"
                fullWidth
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Designation</p>
              <TextField
                size="small"
                color="primary"
                fullWidth
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Entry Date</p>
              <TextField
                size="small"
                color="primary"
                type="date"
                fullWidth
                name="entryDate"
                value={formData.entryDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Entry Time</p>
              <TextField
                size="small"
                color="primary"
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
          <>
            {/* <p className="text-xs text-contrast font-inter italic pb-2 text-right"><span className="text-secondary text-sm font-medium">* </span>fields are required</p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Permit Category<span className="text-secondary">*</span></p>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  name="prNo"
                  value={formData.prNo}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Notification No.</p>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <div className="w-full flex justify-between items-center">
                  <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Area<span className="text-secondary">*</span></p>
                  <div className="flex items-center justify-center">
                    <p className="text-[0.6rem] md:text-xs text-contrast italic font-inter">(locate on map)</p>
                    <MapModal openMapModal={openMapModal} setOpenMapModal={setOpenMapModal} setSelectedArea={handleAreaSelection} />
                  </div>
                </div>
                <Select
                  size="small"
                  color="primary"
                  fullWidth
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        '& .MuiMenuItem-root': {
                          fontSize: {
                            xs: '0.9rem',
                            md: '1rem'
                          },
                          padding: '0.4rem',
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value='Refinery 1'>Refinery-I</MenuItem>
                  <MenuItem value='Refinery 2'>Refinery-II</MenuItem>
                  <MenuItem value='Refinery 3'>Refinery-III</MenuItem>
                </Select>
              </div>
              <div>
                <p className="p-1 md:pt-1 md:pb-2.5 text-xs md:text-sm text-contrast font-medium font-inter">Sub Area<span className="text-secondary">*</span></p>
                <Select
                  size="small"
                  color="primary"
                  fullWidth
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        '& .MuiMenuItem-root': {
                          fontSize: {
                            xs: '0.9rem',
                            md: '1rem'
                          },
                          padding: '0.4rem',
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>Crude-I</MenuItem>
                  <MenuItem value={20}>Crude-II</MenuItem>
                  <MenuItem value={30}>Crude-III</MenuItem>
                </Select>
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Start Date<span className="text-secondary">*</span></p>
                <TextField
                  size="small"
                  color="primary"
                  type="date"
                  fullWidth
                  name="entryDate"
                  value={formData.entryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">End Date<span className="text-secondary">*</span></p>
                <TextField
                  size="small"
                  color="primary"
                  type="date"
                  fullWidth
                  name="entryDate"
                  value={formData.entryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Start Time<span className="text-secondary">*</span></p>
                <TextField
                  size="small"
                  color="primary"
                  type="time"
                  fullWidth
                  name="entryTime"
                  value={formData.entryTime}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">End Time<span className="text-secondary">*</span></p>
                <TextField
                  size="small"
                  color="primary"
                  type="time"
                  fullWidth
                  name="entryTime"
                  value={formData.entryTime}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Name of Dept./Section/Contractor<span className="text-secondary">*</span></p>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Maintenance Technician</p>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Exact Location of Work<span className="text-secondary">*</span></p>
                <TextField
                  multiline
                  rows={4}
                  size="small"
                  color="primary"
                  fullWidth
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p className="py-1 px-1 text-xs md:text-sm text-contrast font-medium font-inter">Description of Work<span className="text-secondary">*</span></p>
                <TextField
                  multiline
                  rows={4}
                  size="small"
                  color="primary"
                  fullWidth
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <div>
            <p className="text-[0.6rem] md:text-xs font-inter text-contrast">General Safety Checklist for Performer :- The following points shall be checked and compiled before requesting the permit</p>
            <div className="py-4">
              <table className="w-full table-auto shadow-card text-left rounded-lg overflow-hidden">
                <thead className="bg-primary-bg">
                  <tr className="text-xs md:text-sm text-contrast font-inter">
                    <th className="px-2 md:px-4 py-2 font-semibold">S.No.</th>
                    <th className="px-2 md:px-4 py-2 font-semibold">General Points</th>
                    <th className="px-2 md:px-4 py-2 font-semibold">Checklist</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {checklistData.map((item, index) => (
                    <tr key={item.id} className="border-b-2 border-primary-bg text-xs md:text-sm text-contrast font-inter">
                      <td className="px-2 md:px-4">{index + 1}.</td>
                      <td className="px-2 md:px-4">{item.question}</td>
                      <td className="px-2 md:px-4">
                        <FormControl>
                          <RadioGroup row name={`checklist-${item.id}`}>
                            {["Yes", "No", "N/A"].map((option) => (
                              <FormControlLabel
                                key={option}
                                value={option}
                                control={<Radio size="small" />}
                                label={<span className="text-xs md:text-sm">{option}</span>}
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b-2 border-primary-bg text-xs md:text-sm text-contrast font-inter">
                    <td className="px-2 md:px-4 py-2">8.</td>
                    <td className="px-2 md:px-4 py-2" colSpan={2}>
                      PPE requirement identified, available at location, and inspected
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {ppeOptions.map((item) => (
                          <FormControlLabel
                            key={item}
                            control={<Checkbox name={item.toLowerCase()} size="small" />}
                            label={<span className="text-xs md:text-sm">{item}</span>}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className="text-xs md:text-sm text-contrast font-inter">
                    <td className="px-2 md:px-4 pt-2 pb-4 flex">9.</td>
                    <td className="px-2 md:px-4 pt-2 pb-4" colSpan={2}>
                      <p className="pb-2">Additional Precautions (if any)</p>
                      <TextField
                        multiline
                        rows={4}
                        size="small"
                        color="primary"
                        fullWidth
                        name="additional-precautions"
                      />
                    </td>
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
    <div className="p-8 md:py-12 md:px-16 h-max w-full bg-secondary-bg">
      <div className="rounded-xl bg-white shadow-card">
        <div className="p-3 md:p-5 flex items-center justify-center">
          <AcUnitRounded color="contrast"
            sx={{
              fontSize: {
                xs: '1.5rem',
                md: '2.5rem',
              },
            }} />
          <p className="pl-1 md:pl-2 font-bold text-sm md:text-2xl text-contrast text-center font-inter">Cold Work Permit Application</p>
        </div>
        <Divider />
        <div className="p-0 md:p-3">
          <div className="bg-primary-bg md:rounded-xl">
            <Tabs value={activeTab} onChange={handleTabChange}
              TabIndicatorProps={{
                style: { display: 'none' },
              }}
              variant="scrollable"
              sx={{
                bgcolor: 'primary.bg',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                px: 1,
                overflow: 'hidden'
              }}>
              <Tab label="Requester Details" sx={{
                bgcolor: 'primary.main', mt: 1, mr: 1,
                minHeight: '40px',
                color: 'primary.contrastText',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                fontSize: {
                  xs: '0.6rem',
                  md: '0.8rem',
                },
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
                fontSize: {
                  xs: '0.6rem',
                  md: '0.8rem',
                },
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
                fontSize: {
                  xs: '0.6rem',
                  md: '0.8rem',
                },
                '&.Mui-selected': {
                  bgcolor: 'primary.contrastText',
                  color: 'secondary.main',
                },
              }} />
            </Tabs>
          </div>
          <div className="p-4 md:py-10 md:px-20">
            {renderTabContent(activeTab)}
            <div className="flex justify-end pt-10">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  bgcolor: 'primary.main',
                  transition: 'all 0.3s ease 0.1s',
                  '&:hover': {
                    bgcolor: 'secondary.main',
                    transform: 'translateY(-3px)',
                  },
                }}
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
