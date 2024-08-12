import Box from '@mui/material/Box';
// CUSTOM ICON COMPONENT
import PushPin from '@/icons/PushPin';
// CUSTOM COMPONENTS
import ChatItem from './chat-item';
import Scrollbar from '@/components/scrollbar';
import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography';
// CUSTOM DUMMY DATA

export default function AllMessages({ chatHistory, handlerChatClick }) {

  return <Box mt={3}>
      <FlexBox alignItems="center" gap={1} px={3} mb={1}>
        <PushPin sx={{
        fontSize: 19,
        color: 'grey.500'
      }} />
        <Paragraph fontSize={16} color="text.secondary">
          All Messages
        </Paragraph>
      </FlexBox>

      <Scrollbar style={{
      maxHeight: 570
    }}>
        {chatHistory.map(item => <ChatItem id={item.id} key={item.id} item={item} handlerChatClick={handlerChatClick} />)}
        {/* {chatHistory.map(item => <ChatItem id={id} key={id} clientNumber={client_number} time={created_at} messages={messages} lastMsg={item.lastMsg} unseenMsg={item.unseenMsg} lastMsgSeen={item.lastMsgSeen} isLastMsgIncoming={item.isLastMsgIncoming} />)} */}
      </Scrollbar>
    </Box>;
}