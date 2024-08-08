import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/system/colorManipulator';

// STYLED COMPONENT
export const EditorWrapper = styled('div')(({
  theme
}) => {
  return {
    '& .ql-toolbar.ql-snow': {
      borderRadius: '8px 8px 0px 0px',
      border: `1px solid ${theme.palette.divider}`
    },
    '& .ql-container.ql-snow': {
      borderRadius: '0px 0px 8px 8px',
      border: `1px solid ${theme.palette.divider}`
    },
    '& .ql-editor': {
      fontSize: 14,
      minHeight: 200,
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily
    },
    '.ql-editor.ql-blank::before': {
      color: alpha(theme.palette.text.secondary, 0.5),
      fontStyle: 'normal',
      lineHeight: 1.5,
      fontWeight: 400
    }
  };
});