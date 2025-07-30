import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Next.js Pages Router Template');
  });

  it('renders the subtitle', () => {
    render(<Home />);
    
    const subtitle = screen.getByText('Built with Material-UI and Styled Components');
    expect(subtitle).toBeInTheDocument();
  });

  it('renders three feature cards', () => {
    render(<Home />);
    
    // Look for the card content instead of article role
    const cards = screen.getAllByText(/Learn More/);
    expect(cards).toHaveLength(3);
  });

  it('renders Material-UI card', () => {
    render(<Home />);
    
    const materialUICard = screen.getByText('Material-UI');
    expect(materialUICard).toBeInTheDocument();
  });

  it('renders Styled Components card', () => {
    render(<Home />);
    
    const styledComponentsCard = screen.getByText('Styled Components');
    expect(styledComponentsCard).toBeInTheDocument();
  });

  it('renders TypeScript card', () => {
    render(<Home />);
    
    const typescriptCard = screen.getByText('TypeScript');
    expect(typescriptCard).toBeInTheDocument();
  });
}); 