import { Fragment } from 'react';
// CUSTOM COMPONENTS
import Percentage from '@/components/percentage';
import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph, Span } from '@/components/typography';
// CUSTOM UTILS METHOD
import { numberFormat } from '@/utils/numberFormat';

// ==============================================================

// ==============================================================

export default function Title({
  title,
  subtitle,
  percentage,
  titlePrefix,
  percentageType = 'success'
}) {
  return <Fragment>
      <FlexBox alignItems="center" gap={1}>
        <H6>
          {titlePrefix && <Span fontWeight={500} fontSize={18} color="grey.400">
              {titlePrefix}
            </Span>}

          {typeof title === 'number' ? numberFormat(title) : title}
        </H6>

        <Percentage type={percentageType}>{percentage}</Percentage>
      </FlexBox>

      <Paragraph color="text.secondary">{subtitle}</Paragraph>
    </Fragment>;
}