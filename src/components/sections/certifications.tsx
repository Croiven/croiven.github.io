import { Box, Typography, Paper, Stack, Divider, Link } from "@mui/material";
import type { Certification } from "../../types/types";
import { getCertifications } from "../../utils/get-certifications";

const formatCertDate = (dateStr: string): string => {
  if (!dateStr) return '';
  // Handle formats like "2024-12-01" or "12/2024" or "2024-12"
  if (dateStr.includes('-')) {
    const parts = dateStr.split('-');
    if (parts.length >= 2) {
      return `${parts[1]}/${parts[0]}`; // MM/YYYY
    }
  }
  return dateStr;
};

export const CertificationsSection = () => {
  const certifications = getCertifications();

  if (certifications.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No certifications listed.
      </Typography>
    );
  }

  return (
    <Stack spacing={3}>
      {certifications.map((cert: Certification) => (
        <Paper key={cert.id} sx={{ padding: 3 }}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {cert.name}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {cert.issuer}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Issued: {formatCertDate(cert.issueDate)}
              {cert.expirationDate && ` • Expires: ${formatCertDate(cert.expirationDate)}`}
            </Typography>
            {cert.credentialId && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Credential ID: {cert.credentialId}
              </Typography>
            )}
            {cert.credentialUrl && (
              <Link
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                sx={{ mt: 1, display: 'inline-block' }}
              >
                View Credential
              </Link>
            )}
          </Box>
          <Divider sx={{ marginTop: 2 }} />
        </Paper>
      ))}
    </Stack>
  );
};

