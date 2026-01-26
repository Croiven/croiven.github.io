import { Box, Paper, Typography, Link, Stack, Grid, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { getCoreDetails } from "../utils/get-core-details"

const getSocialIcon = (platform: string) => {
  const platformLower = platform.toLowerCase();
  if (platformLower.includes('linkedin')) return <LinkedInIcon />;
  if (platformLower.includes('github')) return <GitHubIcon />;
  if (platformLower.includes('twitter') || platformLower.includes('x')) return <TwitterIcon />;
  if (platformLower.includes('email')) return <EmailIcon />;
  return <LanguageIcon />;
};

export const CoreDetails = () => {
    const data = getCoreDetails();

    return (
        <Box sx={{ padding: { xs: 1, sm: 2 } }}>
            <Paper sx={{ padding: 3 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            sx={{
                                width: { xs: 150, md: 200 },
                                height: { xs: 150, md: 200 },
                                margin: '0 auto 1rem',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '2px solid',
                                borderColor: 'divider',
                                boxShadow: 3,
                                position: 'relative',
                                flexShrink: 0,
                            }}
                        >
                            <img
                                src={data.image}
                                alt={data.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    imageRendering: 'auto',
                                    transform: 'translateZ(0)',
                                    backfaceVisibility: 'hidden',
                                } as React.CSSProperties}
                                loading="eager"
                                decoding="async"
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {data.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            {data.title}
                        </Typography>
                        

                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        {data.bio && (
                            <Typography variant="body2" sx={{ marginY: 2 }}>
                                {data.bio}
                            </Typography>
                        )}  

                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Stack spacing={1} sx={{ textAlign: 'left', marginTop: 2 }}>
                            <Typography variant="body2">
                                <strong>Email:</strong>{" "}
                                <Link href={`mailto:${data.email}`} color="primary">
                                    {data.email}
                                </Link>
                            </Typography>
                            
                            {data.location && (
                                <Typography variant="body2">
                                    <strong>Location:</strong> {data.location}
                                </Typography>
                            )}
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ marginTop: 1, justifyContent: { xs: 'flex-start', md: 'flex-start' } }}>
                            {data.socialMedia.map((social) => (
                                <IconButton
                                    key={social.platform}
                                    component="a"
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.platform}
                                    sx={{
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                        transition: 'transform 0.2s',
                                    }}
                                >
                                    {getSocialIcon(social.platform)}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}