import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Footer() {
  return (
    <Box
      sx={{
        height: '400px',
        background: '#252525',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" align="center">
        Footer
      </Typography>
    </Box>
  );
}
