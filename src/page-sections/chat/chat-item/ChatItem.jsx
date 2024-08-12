import Avatar from '@mui/material/Avatar';
import DoneAll from '@mui/icons-material/DoneAll';
import { formatDistanceToNowStrict } from 'date-fns';
// CUSTOM COMPONENTS
import FlexBetween from '@/components/flexbox/FlexBetween';
import { Paragraph, Small, Span } from '@/components/typography';
// STYLED COMPONENT
import { UnseenMsgWrapper, Wrapper } from './styles';

// ===============================================================

// ===============================================================

export default function ChatItem({ item, handlerChatClick }) {
  
  // console.log(item);
  const lastMsg = item.messages[item.messages.length - 1].message;

  // Hora del último mensaje
  const lastMsgTime = item.messages[item.messages.length - 1].date;

  // Obtener máximo 50 carácteres del último mensaje
  let lastShortMsg = '';
  if(lastMsg) {
    lastShortMsg = lastMsg.length > 40 ? lastMsg.substring(0, 40) + '...' : lastMsg;
  }

  const handlerLocalChatClick = () => {
    handlerChatClick(item.id);
  }

  return <Wrapper>
      <Avatar src={item.image} />

      <div className="chat-info" onClick={handlerLocalChatClick}>
        <FlexBetween>
          <Paragraph fontWeight={500}>{item.client_number}</Paragraph>
          <Paragraph fontSize={12} color="text.secondary">
            {formatDistanceToNowStrict(lastMsgTime)} ago
          </Paragraph>
        </FlexBetween>

        <FlexBetween mt={0.5}>
          <Paragraph fontSize={12} color="text.secondary">
            {/* Mostrar máximo 50 carácteres del último mensaje */}
            {lastShortMsg}
          </Paragraph>

          {/* {unseenMsg ? <UnseenMsgWrapper>
              <Small fontWeight={500}>{unseenMsg}</Small>
            </UnseenMsgWrapper> : <DoneAll sx={{
          fontSize: 18,
          color: lastMsgSeen ? 'primary.main' : 'grey.400'
        }} />} */}
        </FlexBetween>
      </div>
    </Wrapper>;
}