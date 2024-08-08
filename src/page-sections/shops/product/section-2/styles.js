import Stack from '@mui/material/Stack';
import styled from '@mui/material/styles/styled';
import { CarouselProvider } from 'pure-react-carousel';

// STYLED COMPONENTS
export const StyledCarouselProvider = styled(CarouselProvider)(({
  theme
}) => ({
  '& .carousel__inner-slide': {
    overflow: 'hidden',
    borderRadius: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    '& .carousel__image': {
      objectFit: 'cover'
    }
  }
}));
export const StyledStack = styled(Stack)(({
  theme
}) => ({
  marginTop: theme.spacing(2),
  '& .carousel__dot': {
    width: 80,
    height: 80,
    opacity: 0.5,
    overflow: 'hidden',
    borderRadius: theme.spacing(2),
    border: '1px solid transparent',
    transition: 'all 300ms ease-in',
    '& .carousel__image': {
      objectFit: 'cover'
    }
  },
  '& .carousel__dot--selected': {
    opacity: 1,
    border: `1px solid ${theme.palette.primary.main}`
  }
}));