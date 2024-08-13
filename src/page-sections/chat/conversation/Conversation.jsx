import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
// MUI ICON COMPONENTS
import Add from '@mui/icons-material/Add';
import Mic from '@mui/icons-material/Mic';
import CameraAlt from '@mui/icons-material/CameraAlt';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import AttachFile from '@mui/icons-material/AttachFile';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { useDropzone } from 'react-dropzone';
// CUSTOM COMPONENTS
import IncomingMsg from '../incoming-msg';
import OutgoingMsg from '../outgoing-msg';
import Scrollbar from '@/components/scrollbar';
import { H6, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox';
// CUSTOM ICON COMPONENT
import Search from '@/icons/duotone/Search';
// STYLED COMPONENTS
import { AttachButton, StyledIconButton, ToggleBtn } from './styles';
import {useRef, useEffect} from 'react';

// ==============================================================

// ==============================================================

export default function Conversation({
  handleOpen,
  chatHistory
}) {
  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop: files => {
      // console.log(files);
    }
  });

  // Crear una referencia para el contenedor de mensajes
  const messagesEndRef = useRef(null);

  // Hacer scroll al final cuando se agregue un nuevo mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return <Card className="h-full">
      <FlexBetween padding={3}>
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src="" alt="" />

          <div>
            <H6 lineHeight={1} fontSize={16}>
              {chatHistory[0]?.client_number}
            </H6>
            {/* <Small color="text.secondary">Online</Small> */}
          </div>
        </FlexBox>

        <FlexBox alignItems="center" gap={1}>
          <IconButton size="small">
            <Search fontSize="small" />
          </IconButton>

          <StyledIconButton size="small">
            <MoreHoriz fontSize="inherit" />
          </StyledIconButton>
        </FlexBox>
      </FlexBetween>

      <Divider />

      <Box position="relative">
        <ToggleBtn screen="md" onClick={handleOpen}>
          <ChevronRight sx={{
          fontSize: 16,
          color: 'white'
        }} />
        </ToggleBtn>

        <Scrollbar style={{
        maxHeight: 580
      }}>
          <Stack spacing={4} px={3} py={2}>
            {chatHistory[0].messages.map((msg, index) => {
            if (msg.user === 'client_message') {
              return <IncomingMsg key={index} message={msg.message} date={msg.date} />;
            } else {
              return <OutgoingMsg key={index} message={msg.message} date={msg.date} />;
            }
          })}
          {/* Referencia para hacer scroll al final */}
          <div ref={messagesEndRef} />
          </Stack>
        </Scrollbar>
      </Box>

      <Divider />

      <Box px={3} py={2}>
        {/* <FlexBetween mb={2} gap={2}>
          <InputBase disabled fullWidth multiline placeholder="Type Something....." sx={{
          fontSize: 14,
          fontWeight: 500,
          flex: 1
        }} />

          <StyledIconButton size="small">
            <Mic />
          </StyledIconButton>
        </FlexBetween> */}

        <FlexBetween gap={2}>
          <FlexBox gap={1.5}>
            {/* <AttachButton {...getRootProps()}>
              <input {...getInputProps()} />
              <CameraAlt fontSize="inherit" />
            </AttachButton>

            <AttachButton {...getRootProps()}>
              <input {...getInputProps()} />
              <AttachFile fontSize="inherit" />
            </AttachButton> */}

            {/* <StyledIconButton size="small">
              <Add fontSize="small" />
            </StyledIconButton> */}
          </FlexBox>

          {/* <Button disabled size="small">Send</Button> */}
        </FlexBetween>
      </Box>
    </Card>;
}