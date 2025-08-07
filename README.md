# Next.js Pages Router Template

A modern Next.js template with TypeScript, Material-UI, and Styled Components.

## Features

- ⚡ **Next.js 15** with Pages Router
- 🎨 **Material-UI (MUI)** for components
- 💅 **Styled Components** for custom styling
- 🔧 **TypeScript** for type safety
- 🧪 **Jest & Testing Library** for testing
- 🎯 **ESLint** for code quality
- 💄 **Prettier** for code formatting
- 📱 **Responsive design** ready
- 🚀 **Fast development** with hot reload

## Quick Start

1. **Install dependencies:**

   ```bash
   yarn install
   ```

2. **Start development server:**

   ```bash
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
pages/              # Next.js Pages Router
├── _app.tsx       # App wrapper with providers
├── _document.tsx  # Document wrapper
└── index.tsx      # Home page
components/         # Reusable components
├── Button/        # Example component
│   ├── Button.tsx
│   └── Button.test.tsx
styles/            # Global styles
├── globals.css    # Global CSS
src/__tests__/     # Test files
├── Home.test.tsx  # Home page tests
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test:coverage` - Run tests with coverage
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

## Testing

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

### Writing Tests

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Styling Options

### Material-UI Components

```tsx
import { Button, Card, Typography } from '@mui/material';

<Button variant="contained" color="primary">
  Click me
</Button>;
```

### Styled Components

```tsx
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin-top: 16px;
  &:hover {
    transform: scale(1.05);
  }
`;
```

## Code Quality

### ESLint

```bash
# Check for linting issues
yarn lint
```

### Prettier

```bash
# Format code
yarn format

# Check formatting
yarn format:check
```

## Customization

- **Theme:** Modify the theme in `pages/_app.tsx`
- **Components:** Add new components in `components/`
- **Pages:** Create new pages in `pages/`
- **Styles:** Add global styles in `styles/globals.css`
- **Tests:** Add tests in `src/__tests__/` or alongside components

## Testing Best Practices

1. **Test user interactions** rather than implementation details
2. **Use semantic queries** like `getByRole`, `getByLabelText`
3. **Test accessibility** with `@testing-library/jest-dom`
4. **Mock external dependencies** like Next.js router
5. **Write descriptive test names** that explain the behavior

## Example Test Structure

```
src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       └── Button.test.tsx
├── pages/
│   └── index.tsx
└── __tests__/
    └── Home.test.tsx
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
yarn build
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [Styled Components Documentation](https://styled-components.com/)
- [Testing Library Documentation](https://testing-library.com/)
- [Jest Documentation](https://jestjs.io/)

## License

MIT
