// REACT CIRCULAR PROGRESS
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// CUSTOM COMPONENTS
import { Paragraph } from '@/components/typography';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign';

// ==============================================================

// ==============================================================

export default function ProgressItem({
  title,
  value
}) {
  return <FlexRowAlign flexDirection="column" gap={1} maxWidth={80}>
      <CircularProgressbar value={value} text={`${value}%`} maxValue={100} strokeWidth={6} />
      <Paragraph fontWeight={500}>{title}</Paragraph>
    </FlexRowAlign>;
}