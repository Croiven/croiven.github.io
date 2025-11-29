import { Box, Typography, Paper, Stack, Divider } from "@mui/material";
import type { Education } from "../../types/types";
import { getEducation } from "../../utils/get-education";

export const EducationSection = () => {
  const education = getEducation();

  if (education.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No education listed.
      </Typography>
    );
  }

  return (
    <Stack spacing={3}>
      {education.map((edu: Education) => (
        <Paper key={edu.id} sx={{ padding: 3 }}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {edu.degree}
              {edu.field && ` in ${edu.field}`}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {edu.institution}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {edu.location && `${edu.location} • `}
              {edu.startDate} - {edu.endDate || "Present"}
            </Typography>
            {edu.gpa && (
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                GPA: {edu.gpa}
              </Typography>
            )}
          </Box>

          {edu.description && (
            <Typography variant="body1" sx={{ marginY: 2 }}>
              {edu.description}
            </Typography>
          )}

          {edu.honors && edu.honors.length > 0 && (
            <Box sx={{ marginY: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Honors & Awards:
              </Typography>
              <Stack component="ul" spacing={0.5} sx={{ margin: 0, paddingLeft: 2 }}>
                {edu.honors.map((honor, idx) => (
                  <Typography key={idx} component="li" variant="body2">
                    {honor}
                  </Typography>
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

