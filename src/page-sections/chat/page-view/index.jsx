import { useMemo } from 'react';
import { useContext, useEffect, useState } from 'react';
// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from '@mui/material/styles/styled';
import Add from '@mui/icons-material/Add';
// CUSTOM COMPONENTS
import PinChats from '../PinChats';
import AllMessages from '../AllMessages';
import Conversation from '../conversation';
import { H6 } from '@/components/typography';
import SearchInput from '@/components/search-input';
import FlexBetween from '@/components/flexbox/FlexBetween';
// CUSTOM UTIL METHOD
import { isDark } from '@/utils/constants';
// SUPABASE CONTEXT
import { createClient } from '@supabase/supabase-js';
import { AuthContext } from '@/contexts/firebaseContext';

// STYLED COMPONENTS
const StyledSearchInput = styled(SearchInput)(({
  theme
}) => ({
  backgroundColor: theme.palette.action.selected,
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 600 : 200]}`
}));
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  backgroundColor: theme.palette.action.selected,
  border: `1px solid ${theme.palette.divider}`
}));
export default function ChatPageView() {
  const { user } = useContext(AuthContext);
  const [chatHistory, setChatHistory] = useState([]);
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const downMd = useMediaQuery(theme => theme.breakpoints.down('md'));
  const [searchInputValue, setSearchInputValue] = useState('');
  const handleOpen = () => setOpenLeftDrawer(true);

    const supabaseUrl = user?.supabaseUrl;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    const supabase = useMemo(() => createClient(supabaseUrl, supabaseKey), [supabaseUrl, supabaseKey]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (supabase) {
        const { data, error } = await supabase
          .from('chat_history')
          .select('id, client_number, messages, created_at');

        if (error) {
          console.error('Error fetching chat history:', error);
        } else {
          setChatHistory(data);
        }
      }
    };

    fetchChatHistory();
  }, [supabase]);

  // console.log(chatHistory);

  const handlerChatClick = id => {
    setSelectedConversationId(id);
  };

   // Filter chat history based on the selected conversation
   const filteredChatHistory = chatHistory.filter(chat => chat.id === selectedConversationId);

  //  console.log(filteredChatHistory);

  const handleSearchInputChange = e => {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  }
  

  // RECENT CONVERSATION LIST
  const MESSAGE_CONTENT = <Card sx={{
    height: '100%',
    pb: 1
  }}>
      <div className="p-3">
        <FlexBetween mb={3}>
          <H6 fontSize={18}>Messages</H6>

          {/* <StyledIconButton size="small">
            <Add />
          </StyledIconButton> */}
        </FlexBetween>

        <StyledSearchInput placeholder="Search..." onChange={handleSearchInputChange} />
      </div>

      {/* PINNED ITEMS */}
      {/* <PinChats /> */}

      <Divider />

      {/* ALL MESSAGES */}
      {/* Filtrar chat con el input de buscador */}
      <AllMessages chatHistory={chatHistory} searchInputValue={searchInputValue} handlerChatClick={handlerChatClick} />

    </Card>;
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {downMd ? <Drawer anchor="left" open={openLeftDrawer} onClose={() => setOpenLeftDrawer(false)}>
            <Box width={300} padding={1}>
              {MESSAGE_CONTENT}
            </Box>
          </Drawer> : <Grid item xl={4} md={4}>
            {MESSAGE_CONTENT}
          </Grid>}

        <Grid item xl={8} md={8} xs={12}>
          {
            selectedConversationId ? <Conversation chatHistory={filteredChatHistory} /> : <Card className="h-full">
                <Box padding={3}>
                  <H6 fontSize={18}>Selecciona una conversación</H6>
                </Box>
              </Card>
          }
        </Grid>
      </Grid>
    </div>;
}