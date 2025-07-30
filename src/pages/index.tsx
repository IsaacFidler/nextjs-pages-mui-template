import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

// Styled component example
const StyledCard = styled(Card)`
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Next.js Pages Router Template
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Built with Material-UI and Styled Components
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Material-UI
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Ready-to-use React components that follow Google&apos;s Material Design guidelines.
                </Typography>
                <StyledButton variant="contained" color="primary">
                  Learn More
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Styled Components
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  CSS-in-JS library for styling React components with component-level styles.
                </Typography>
                <StyledButton variant="contained" color="secondary">
                  Learn More
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  TypeScript
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Type-safe development with full IntelliSense support and error checking.
                </Typography>
                <StyledButton variant="outlined">
                  Learn More
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
