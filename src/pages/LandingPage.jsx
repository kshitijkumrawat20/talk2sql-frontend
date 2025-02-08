import { Box, Typography, Button, Container, IconButton, Stack, Paper } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #6366f1 30%, #818cf8 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2
            }}
          >
            Talk2SQL
          </Typography>
          
          <Typography 
            variant="h5" 
            color="text.secondary" 
            gutterBottom
            sx={{ maxWidth: '600px', mx: 'auto' }}
          >
            Your Natural Language Interface for SQL Databases
          </Typography>
        </Box>

        <Paper 
          elevation={0}
          sx={{ 
            p: 3, 
            background: 'rgba(30, 41, 59, 0.5)',
            backdropFilter: 'blur(8px)',
            borderRadius: 4,
            border: '1px solid rgba(99, 102, 241, 0.2)'
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/connect')}
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600
            }}
          >
            Get Started
          </Button>
        </Paper>

        <Stack 
          direction="row" 
          spacing={2} 
          sx={{ 
            mt: 6,
            '& .MuiIconButton-root': {
              transition: 'all 0.2s',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)'
              }
            }
          }}
        >
          <IconButton
            component="a"
            href="https://github.com/kshitijkumrawat20"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/kshitij-kumrawat20"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:kshitijk146@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <Email />
          </IconButton>
        </Stack>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mt: 'auto', 
            mb: 2,
            opacity: 0.8,
            '& .highlight': {
              color: 'primary.main',
              fontWeight: 500
            }
          }}
        >
          Developed with ❤️ by <span className="highlight">Kshitij Kumrawat</span>
        </Typography>
      </Box>
    </Container>
  );
}

export default LandingPage
