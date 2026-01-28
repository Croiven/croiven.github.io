import { Box, Typography, Chip, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import { getCoreDetails } from '../utils/get-core-details';
import { getWorkExperience } from '../utils/get-work-experience';
import { getEducation } from '../utils/get-education';
import { getVolunteering } from '../utils/get-volunteering';
import { getSkills } from '../utils/get-skills';
import { getProjects } from '../utils/get-projects';

const formatDate = (dateStr: string | null | undefined): string => {
  if (!dateStr) return 'Present';
  return dateStr;
};

export function PrintableCV() {
  const coreDetails = getCoreDetails();
  const workExperience = getWorkExperience();
  const education = getEducation();
  const volunteering = getVolunteering();
  const skills = getSkills();
  const projects = getProjects();

  return (
    <>
      <style>
        {`
          @page {
            margin: 10mm 15mm;
          }
        `}
      </style>
      <Box
        sx={{
          maxWidth: '210mm',
          margin: '0 auto',
          padding: '15mm 20mm',
          backgroundColor: '#fff',
          color: '#333',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          fontSize: '10pt',
          lineHeight: 1.4,
          '@media print': {
            padding: '0',
            maxWidth: '100%',
          },
        }}
      >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          mb: '20px',
          pb: '15px',
          borderBottom: '2px solid #2c5282',
        }}
      >
        {/* Profile Image */}
        <Box
          component="img"
          src={coreDetails.image}
          alt={coreDetails.name}
          sx={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #2c5282',
            flexShrink: 0,
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '24pt',
              fontWeight: 700,
              color: '#1a365d',
              mb: '4px',
              lineHeight: 1.2,
            }}
          >
            {coreDetails.name}
          </Typography>
          <Typography
            sx={{
              fontSize: '12pt',
              color: '#2c5282',
              fontWeight: 500,
              mb: '8px',
            }}
          >
            {coreDetails.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              fontSize: '9pt',
              color: '#4a5568',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <LocationOnIcon sx={{ fontSize: '12px' }} />
              {coreDetails.location}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <EmailIcon sx={{ fontSize: '12px' }} />
              <Link href={`mailto:${coreDetails.email}`} sx={{ color: '#2c5282', textDecoration: 'none' }}>
                {coreDetails.email}
              </Link>
            </Box>
            {coreDetails.socialMedia.map((sm) => (
              <Box key={sm.platform} sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <LinkIcon sx={{ fontSize: '12px' }} />
                <Link href={sm.url} sx={{ color: '#2c5282', textDecoration: 'none' }}>
                  {sm.platform}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Bio */}
      <Box
        sx={{
          mb: '20px',
          p: '12px 15px',
          backgroundColor: '#f7fafc',
          borderLeft: '3px solid #2c5282',
          fontStyle: 'italic',
          color: '#4a5568',
          pageBreakInside: 'avoid',
        }}
      >
        {coreDetails.bio}
      </Box>

      {/* Skills */}
      <Box component="section" sx={{ mb: '18px', pageBreakInside: 'avoid' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '12pt',
            fontWeight: 700,
            color: '#1a365d',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            mb: '10px',
            pb: '4px',
            borderBottom: '1px solid #cbd5e0',
          }}
        >
          Skills
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {skills.map((category) => (
            <Box key={category.category} sx={{ pageBreakInside: 'avoid' }}>
              <Typography sx={{ fontWeight: 600, color: '#2d3748', mb: '4px', fontSize: '10pt' }}>
                {category.category}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {category.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      backgroundColor: '#e2e8f0',
                      color: '#2d3748',
                      fontSize: '9pt',
                      height: 'auto',
                      '& .MuiChip-label': { px: '8px', py: '2px' },
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Work Experience */}
      <Box component="section" sx={{ mb: '18px', pageBreakInside: 'avoid' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '12pt',
            fontWeight: 700,
            color: '#1a365d',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            mb: '10px',
            pb: '4px',
            borderBottom: '1px solid #cbd5e0',
          }}
        >
          Work Experience
        </Typography>
        {workExperience.map((job) => (
          <Box key={job.id} sx={{ mb: '12px', pageBreakInside: 'avoid' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '4px' }}>
              <Box>
                <Typography sx={{ fontWeight: 600, color: '#2d3748', fontSize: '10.5pt' }}>
                  {job.position}
                </Typography>
                <Typography sx={{ color: '#2c5282', fontWeight: 500, fontSize: '10pt' }}>
                  {job.company}
                </Typography>
              </Box>
              <Typography sx={{ color: '#718096', fontSize: '9pt', whiteSpace: 'nowrap' }}>
                {formatDate(job.startDate)} – {formatDate(job.endDate)}
              </Typography>
            </Box>
            <Typography sx={{ color: '#718096', fontSize: '9pt', mb: '4px' }}>
              {job.location}
            </Typography>
            <Typography sx={{ color: '#4a5568', mb: '6px', fontSize: '10pt' }}>
              {job.description}
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {job.achievements?.map((achievement, idx) => (
                <Box
                  component="li"
                  key={idx}
                  sx={{
                    position: 'relative',
                    pl: '12px',
                    mb: '2px',
                    color: '#4a5568',
                    fontSize: '9pt',
                    '&::before': {
                      content: '"•"',
                      position: 'absolute',
                      left: 0,
                      color: '#2c5282',
                    },
                  }}
                >
                  {achievement}
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', mt: '6px' }}>
              {job.technologies?.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: '#edf2f7',
                    color: '#2d3748',
                    fontSize: '8pt',
                    height: 'auto',
                    '& .MuiChip-label': { px: '6px', py: '2px' },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Education */}
      <Box component="section" sx={{ mb: '18px', pageBreakInside: 'avoid' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '12pt',
            fontWeight: 700,
            color: '#1a365d',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            mb: '10px',
            pb: '4px',
            borderBottom: '1px solid #cbd5e0',
          }}
        >
          Education
        </Typography>
        {education.map((edu) => (
          <Box key={edu.id} sx={{ mb: '12px', pageBreakInside: 'avoid' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '4px' }}>
              <Box>
                <Typography sx={{ fontWeight: 600, color: '#2d3748', fontSize: '10.5pt' }}>
                  {edu.degree} in {edu.field}
                </Typography>
                <Typography sx={{ color: '#2c5282', fontWeight: 500, fontSize: '10pt' }}>
                  {edu.institution}
                </Typography>
              </Box>
              <Typography sx={{ color: '#718096', fontSize: '9pt', whiteSpace: 'nowrap' }}>
                {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
              </Typography>
            </Box>
            <Typography sx={{ color: '#718096', fontSize: '9pt' }}>
              {edu.location}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Projects & Volunteering in two columns */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', pageBreakInside: 'avoid' }}>
        {/* Projects */}
        <Box component="section" sx={{ pageBreakInside: 'avoid' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: '12pt',
              fontWeight: 700,
              color: '#1a365d',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              mb: '10px',
              pb: '4px',
              borderBottom: '1px solid #cbd5e0',
            }}
          >
            Projects
          </Typography>
          {projects.map((project) => (
            <Box key={project.id} sx={{ mb: '10px', pageBreakInside: 'avoid' }}>
              <Typography sx={{ fontWeight: 600, color: '#2d3748', fontSize: '10pt' }}>
                {project.name}
              </Typography>
              <Typography sx={{ color: '#4a5568', fontSize: '9pt', mt: '2px' }}>
                {project.description}
              </Typography>
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  sx={{ fontSize: '8pt', color: '#2c5282', textDecoration: 'none' }}
                >
                  GitHub
                </Link>
              )}
            </Box>
          ))}
        </Box>

        {/* Volunteering */}
        <Box component="section" sx={{ pageBreakInside: 'avoid' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: '12pt',
              fontWeight: 700,
              color: '#1a365d',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              mb: '10px',
              pb: '4px',
              borderBottom: '1px solid #cbd5e0',
            }}
          >
            Volunteering
          </Typography>
          {volunteering.map((vol) => (
            <Box key={vol.id} sx={{ mb: '8px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 600, color: '#2d3748', fontSize: '10pt' }}>
                  {vol.role}
                </Typography>
                <Typography sx={{ color: '#718096', fontSize: '9pt' }}>
                  {formatDate(vol.startDate)} – {formatDate(vol.endDate)}
                </Typography>
              </Box>
              <Typography sx={{ color: '#2c5282', fontSize: '9pt' }}>
                {vol.organization}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
    </>
  );
}

