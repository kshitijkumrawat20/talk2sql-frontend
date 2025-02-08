import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  Paper,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// Import configured axios instance that handles environment-specific base URLs
import axiosInstance from '../axiosConfig';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const query = input.trim();
    setInput('');
    setLoading(true);

    setMessages((prev) => [...prev, { type: 'query', content: query }]);

    try {
      // Using relative path with configured axios instance ensures correct base URL for dev/prod
      const response = await axiosInstance.post('/query', {
        query,
      });

      setMessages((prev) => [
        ...prev,
        { type: 'response', content: response.data.result },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'error',
          content: error.response?.data?.message || 'Failed to execute query',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          py: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          SQL Chat Interface
        </Typography>

        <Paper
          sx={{
            flex: 1,
            mb: 2,
            p: 2,
            maxHeight: 'calc(100vh - 240px)',
            overflow: 'auto',
          }}
        >
          {messages.map((message, index) => (
            <Card
              key={index}
              sx={{
                mb: 2,
                p: 2,
                bgcolor:
                  message.type === 'query'
                    ? 'primary.dark'
                    : message.type === 'error'
                    ? 'error.dark'
                    : 'background.paper',
              }}
            >
              <Typography
                variant="body1"
                color={message.type === 'error' ? 'error' : 'text.primary'}
              >
                {message.type === 'query' ? '> ' : ''}
                {message.content}
              </Typography>
            </Card>
          ))}
          <div ref={messagesEndRef} />
        </Paper>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your SQL query or question..."
              disabled={loading}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default ChatPage
