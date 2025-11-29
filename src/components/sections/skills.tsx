import { Typography, Paper, Stack, Chip } from "@mui/material";
import type { SkillCategory } from "../../types/types";
import { getSkills } from "../../utils/get-skills";

export const SkillsSection = () => {
  const skills = getSkills();

  if (skills.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No skills listed.
      </Typography>
    );
  }

  return (
    <Stack spacing={3}>
      {skills.map((category: SkillCategory, idx: number) => (
        <Paper key={idx} sx={{ padding: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ marginBottom: 2 }}>
            {category.category}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {category.skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" />
            ))}
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

