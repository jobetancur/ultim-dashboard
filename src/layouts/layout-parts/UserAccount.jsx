import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
// CUSTOM COMPONENTS
import { Paragraph } from '@/components/typography';
import AvatarLoading from '@/components/avatar-loading';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/firebaseContext';
export default function UserAccount() {

  const { user } = useContext(AuthContext);

  return <FlexRowAlign flexDirection="column" py={5}>
      <Badge color="primary">
        <AvatarLoading alt="user" percentage={60} src="/static/avatar/001-man.svg" sx={{
        width: 50,
        height: 50
      }} />
      </Badge>

      <Box textAlign="center" pt={1.5} pb={3}>
        {/* <Chip variant="outlined" label="60% Complete" size="small" /> */}

        <Paragraph fontSize={16} fontWeight={600} mt={1}>
          {user.name}
        </Paragraph>

        <Paragraph fontSize={13} fontWeight={500} color="text.secondary" mt={0.5}>
          {user.email}
        </Paragraph>
      </Box>

      {/* <Button>Upgrade to Pro</Button> */}
    </FlexRowAlign>;
}