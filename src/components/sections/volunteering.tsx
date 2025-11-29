import { Box, Typography, Paper, Stack, Divider } from "@mui/material";
import type { Volunteering } from "../../types/types";
import { getVolunteering } from "../../utils/get-volunteering";

export const VolunteeringSection = () => {
  const volunteering = getVolunteering();

  if (volunteering.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No volunteering experience listed.
      </Typography>
    );
  }

  return (
    <Stack spacing={3}>
      {volunteering.map((vol: Volunteering) => (
        <Paper key={vol.id} sx={{ padding: 3 }}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {vol.role}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {vol.organization}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {vol.location && `${vol.location} • `}
              {vol.startDate} - {vol.endDate || "Present"}
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ marginY: 2 }}>
            {vol.description}
          </Typography>

          {vol.achievements && vol.achievements.length > 0 && (
            <Box sx={{ marginY: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Key Achievements:
              </Typography>
              <Stack component="ul" spacing={0.5} sx={{ margin: 0, paddingLeft: 2 }}>
                {vol.achievements.map((achievement, idx) => (
                  <Typography key={idx} component="li" variant="body2">
                    {achievement}
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

