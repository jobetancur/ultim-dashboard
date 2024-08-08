import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Timeline from '@mui/lab/Timeline';
// CUSTOM COMPONENTS
import { H6, Span } from '@/components/typography';
import Scrollbar from '@/components/scrollbar';
import FlexBetween from '@/components/flexbox/FlexBetween';
// CUSTOM SECTION COMPONENTS
import PinItem from './PinItem';
import ChatItem from './chat-item';
import EditItem from './edit-item';
import FileItem from './file-item';
import LayerItem from './LayerItem';
export default function Activity() {
  return <Box py={3}>
      <Scrollbar autoHide={false}>
        <Box component={Card} minWidth={900}>
          <FlexBetween flexWrap="wrap" p={3}>
            <H6 fontSize={16}>
              My Connections{' '}
              <Span fontSize={14} fontWeight={400} color="text.secondary">
                (100+ Resources)
              </Span>
            </H6>

            <Select defaultValue="today" size="small">
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="year">Year</MenuItem>
            </Select>
          </FlexBetween>

          <Divider />

          <Box my={2}>
            <Timeline>
              <ChatItem />
              <PinItem />
              <FileItem />
              <LayerItem />
              <EditItem />
            </Timeline>
          </Box>
        </Box>
      </Scrollbar>
    </Box>;
}