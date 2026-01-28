import { useState } from "react";
import { Box, Paper, Tabs, Tab, useMediaQuery, useTheme, Select, MenuItem, FormControl } from "@mui/material";
import { WorkExperienceSection } from "./sections/work-experience";
import { EducationSection } from "./sections/education";
import { VolunteeringSection } from "./sections/volunteering";
import { SkillsSection } from "./sections/skills";
import { ProjectsSection } from "./sections/projects";
import { CertificationsSection } from "./sections/certifications";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`content-tabpanel-${index}`}
      aria-labelledby={`content-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: { xs: 2, sm: 3 } }}>{children}</Box>}
    </div>
  );
}

const tabLabels = [
  "Work Experience",
  "Education",
  "Certifications",
  "Volunteering",
  "Skills",
  "Side Projects"
];

export const ContentSection = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: { target: { value: string } }) => {
    setValue(Number(event.target.value));
  };

  return (
    <Box sx={{ padding: { xs: 1, sm: 2 }, height: "100%" }}>
      <Paper sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {isMobile ? (
            <FormControl fullWidth sx={{ padding: 2 }}>
              <Select
                value={value.toString()}
                onChange={handleSelectChange}
                displayEmpty
                sx={{
                  '& .MuiSelect-select': {
                    padding: 1.5,
                  }
                }}
              >
                {tabLabels.map((label, index) => (
                  <MenuItem key={index} value={index.toString()}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="CV content tabs"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  minWidth: { xs: 80, sm: 120 },
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  padding: { xs: '8px 12px', sm: '12px 16px' },
                }
              }}
            >
              {tabLabels.map((label, index) => (
                <Tab key={index} label={label} />
              ))}
            </Tabs>
          )}
        </Box>
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          <TabPanel value={value} index={0}>
            <WorkExperienceSection />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <EducationSection />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CertificationsSection />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <VolunteeringSection />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <SkillsSection />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <ProjectsSection />
          </TabPanel>
        </Box>
      </Paper>
    </Box>
  );
};

