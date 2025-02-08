import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Card,
  Alert,
  CircularProgress,
} from '@mui/material';
import axios from '../axiosConfig';

function ConnectionPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dbType: 'postgresql',
    connectionString: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/setup-connection', {
        connection_string: formData.connectionString
      });
      
      console.log('Server response:', response.data);

      if (response.data && response.data.message === 'Database connection established successfully!') {
        navigate('/chat');
      } else {
        setError('Unexpected response from server');
      }
    } catch (err) {
      if (err.response) {
        // Handle specific HTTP error responses
        const errorMessage = err.response.data?.detail || 
                           err.response.data?.message || 
                           `Error ${err.response.status}: Failed to connect to database`;
        console.log('Error response:', err.response.data);
        setError(errorMessage);
      } else if (err.request) {
        // Handle network errors
        console.log('Network error:', err.request);
        setError('Network error - Please check your internet connection');
      } else {
        // Handle other errors
        console.log('Error:', err.message);
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Card sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Database Connection
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              select
              fullWidth
              label="Database Type"
              value={formData.dbType}
              onChange={(e) =>
                setFormData({ ...formData, dbType: e.target.value })
              }
              margin="normal"
            >
              <MenuItem value="postgresql">PostgreSQL</MenuItem>
              <MenuItem value="mysql">MySQL</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Connection String"
              value={formData.connectionString}
              onChange={(e) =>
                setFormData({ ...formData, connectionString: e.target.value })
              }
              margin="normal"
              placeholder="postgresql://user:password@host:port/database"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={loading}
              sx={{ mt: 3 }}
            >
              {loading ? <CircularProgress size={24} /> : 'Connect'}
            </Button>
          </form>
        </Card>
      </Box>
    </Container>
  );
}

export default ConnectionPage
