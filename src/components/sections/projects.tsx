import { Box, Typography, Paper, Stack, Chip, Link, Divider } from "@mui/material";
import type { Project } from "../../types/types";
import { getProjects } from "../../utils/get-projects";

export const ProjectsSection = () => {
  const projects = getProjects();

  if (projects.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No projects listed.
      </Typography>
    );
  }

  return (
    <Stack spacing={3}>
      {projects.map((project: Project) => (
        <Paper key={project.id} sx={{ padding: 3 }}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {project.name}
            </Typography>
            {project.startDate && (
              <Typography variant="body2" color="text.secondary">
                {project.startDate} - {project.endDate || "Present"}
              </Typography>
            )}
          </Box>

          <Typography variant="body1" sx={{ marginY: 2 }}>
            {project.description}
          </Typography>

          {project.highlights && project.highlights.length > 0 && (
            <Box sx={{ marginY: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Highlights:
              </Typography>
              <Stack component="ul" spacing={0.5} sx={{ margin: 0, paddingLeft: 2 }}>
                {project.highlights.map((highlight, idx) => (
                  <Typography key={idx} component="li" variant="body2">
                    {highlight}
                  </Typography>
                ))}
              </Stack>
            </Box>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <Box sx={{ marginY: 2 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {project.technologies.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </Stack>
            </Box>
          )}

          <Box sx={{ marginTop: 2, display: "flex", gap: 2 }}>
            {project.url && (
              <Link href={project.url} target="_blank" rel="noopener noreferrer" underline="hover">
                Live Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" underline="hover">
                GitHub
              </Link>
            )}
          </Box>

          <Divider sx={{ marginTop: 2 }} />
        </Paper>
      ))}
    </Stack>
  );
};

