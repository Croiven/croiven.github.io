import { Box, Typography, Paper, Stack, Chip, Divider } from "@mui/material";
import type { WorkExperience } from "../../types/types";
import { getWorkExperience } from "../../utils/get-work-experience";

export const WorkExperienceSection = () => {
  const experiences = getWorkExperience();

  if (experiences.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No work experience listed.
      </Typography>
    );
  }

  return (
    <Stack spacing={3}>
      {experiences.map((exp: WorkExperience) => (
        <Paper key={exp.id} sx={{ padding: 3 }}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {exp.position}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {exp.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exp.location && `${exp.location} • `}
              {exp.startDate} - {exp.endDate || "Present"}
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ marginY: 2 }}>
            {exp.description}
          </Typography>

          {exp.achievements && exp.achievements.length > 0 && (
            <Box sx={{ marginY: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Key Achievements:
              </Typography>
              <Stack component="ul" spacing={0.5} sx={{ margin: 0, paddingLeft: 2 }}>
                {exp.achievements.map((achievement, idx) => (
                  <Typography key={idx} component="li" variant="body2">
                    {achievement}
                  </Typography>
                ))}
              </Stack>
            </Box>
          )}

          {exp.technologies && exp.technologies.length > 0 && (
            <Box sx={{ marginTop: 2 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {exp.technologies.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </Stack>
            </Box>
          )}

          <Divider sx={{ marginTop: 2 }} />
        </Paper>
      ))}
    </Stack>
  );
};

