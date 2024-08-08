import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled';
import { CarouselProvider } from 'pure-react-carousel';

// STYLED COMPONENTS
export const StyledCarouselProvider = styled(CarouselProvider)(({
  theme
}) => ({
  display: 'flex',
  position: 'relative',
  '& .carousel__slider': {
    flexGrow: 1,
    marginLeft: 10
  },
  '& .carousel__slide-focus-ring': {
    display: 'none'
  },
  '& button': {
    border: 'none !important',
    opacity: 0.5
  },
  '& button:disabled': {
    opacity: 1,
    position: 'relative',
    '&::after': {
      left: 0,
      height: 3,
      bottom: -6,
      content: '""',
      width: '100%',
      position: 'absolute',
      backgroundColor: theme.palette.primary.main
    }
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    '& .carousel__slider': {
      marginLeft: 0
    }
  }
}));
export const StyledStack = styled(Stack)(({
  theme
}) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: 10,
    flexDirection: 'row',
    '& .carousel__dot': {
      marginTop: 0,
      marginRight: 8
    }
  }
}));
export const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  top: 10,
  right: 10,
  position: 'absolute',
  backgroundColor: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[400]
  }
}));