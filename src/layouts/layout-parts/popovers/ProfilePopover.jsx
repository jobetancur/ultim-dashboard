import { Fragment, useContext, useRef, useState } from 'react';
// MUI
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ButtonBase from '@mui/material/ButtonBase';
import styled from '@mui/material/styles/styled';
// CUSTOM COMPONENTS
import PopoverLayout from './PopoverLayout';
import FlexBox from '@/components/flexbox/FlexBox';
import AvatarLoading from '@/components/avatar-loading';
import { H6, Paragraph, Small } from '@/components/typography';
// CUSTOM DEFINED HOOK
import useAuth from '@/hooks/useAuth';
import useNavigate from '@/hooks/useNavigate';
// CUSTOM UTILS METHOD
import { isDark } from '@/utils/constants';
import { AuthContext } from '@/contexts/firebaseContext';

// STYLED COMPONENTS
const StyledButtonBase = styled(ButtonBase)(({
  theme
}) => ({
  marginLeft: 8,
  borderRadius: 30,
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 800 : 200]}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));
const StyledSmall = styled(Paragraph)(({
  theme
}) => ({
  fontSize: 13,
  display: 'block',
  cursor: 'pointer',
  padding: '5px 1rem',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));
export default function ProfilePopover() {
  const { user } = useContext(AuthContext);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {
    logout
  } = useAuth();
  const handleMenuItem = path => () => {
    navigate(path);
    setOpen(false);
  };

  console.log(user);

  return <Fragment>
      <StyledButtonBase ref={anchorRef} onClick={() => setOpen(true)}>
        <AvatarLoading alt="user" percentage={60} src="/static/avatar/001-man.svg" sx={{
        width: 35,
        height: 35
      }} />
      </StyledButtonBase>

      <PopoverLayout hiddenViewButton maxWidth={230} minWidth={270} popoverOpen={open} anchorRef={anchorRef} popoverClose={() => setOpen(false)} title={<FlexBox alignItems="center" gap={1}>
            <Avatar src="/static/avatar/001-man.svg" sx={{
        width: 35,
        height: 35
      }} />

            <div>
              <H6 fontSize={14}>{user.name}</H6>
              <Small color="text.secondary" display="block">
                {user.email}
              </Small>
            </div>
          </FlexBox>}>
        <Box pt={1}>
          <StyledSmall onClick={handleMenuItem('/dashboard/profile')}>Set Status</StyledSmall>

          <StyledSmall onClick={handleMenuItem('/dashboard/profile')}>
            Profile & Account
          </StyledSmall>

          <StyledSmall onClick={handleMenuItem('/dashboard/account')}>Settings</StyledSmall>

          <StyledSmall onClick={handleMenuItem('/dashboard/profile')}>Manage Team</StyledSmall>

          <Divider sx={{
          my: 1
        }} />

          <StyledSmall onClick={logout}>Sign Out</StyledSmall>
        </Box>
      </PopoverLayout>
    </Fragment>;
}