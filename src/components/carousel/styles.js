import { alpha } from '@mui/system/colorManipulator';
import styled from '@mui/material/styles/styled';

// STYLED COMPONENT
export const SwiperContainer = styled('div')(({
  theme
}) => ({
  overflow: 'hidden',
  position: 'relative',
  '& .swiper:has(+ .swiper-controls .swiper-pagination)': {
    marginBottom: 40
  },
  '& .swiper-controls': {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    '.swiper-pagination': {
      bottom: 0,
      '.swiper-pagination-bullet': {
        width: 8,
        height: 8,
        backgroundColor: theme.palette.grey[400],
        '&.swiper-pagination-bullet-active': {
          backgroundColor: theme.palette.primary.main,
          boxShadow: `${alpha(theme.palette.primary.main, 0.1)} 0px 0px 0px 4px`
        }
      }
    },
    '.swiper-navigation': {
      pointerEvents: 'all',
      '.swiper-button': {
        width: 50,
        height: 50,
        backgroundColor: theme.palette.common.white,
        borderRadius: '50%',
        '::after': {
          display: 'none'
        },
        '.MuiSvgIcon-root': {
          color: theme.palette.grey[900],
          fontSize: 25
        },
        '&.swiper-button-disabled': {
          opacity: 0.6
        }
      }
    }
  }
}));