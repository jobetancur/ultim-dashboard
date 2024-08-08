import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
// CUSTOM COMPONENTS
import Carousel from '@/components/carousel';
import SectionTitle from '@/components/section-title';
import { H6, Paragraph } from '@/components/typography';
// CUSTOM DUMMY DATA
import { TEAM_MEMBERS } from './data';
// STYLED COMPONENTS
import { StyledRoot, TeamItem } from './styles';
export default function Section3() {
  const {
    breakpoints
  } = useTheme();

  // carousel breakpoints for responsive
  const carouselBreakpoints = {
    [breakpoints.values.lg]: {
      slidesPerView: 4
    },
    [breakpoints.values.md]: {
      slidesPerView: 3
    },
    [breakpoints.values.sm]: {
      slidesPerView: 2
    },
    [breakpoints.values.xs]: {
      slidesPerView: 1
    }
  };
  return <StyledRoot>
      <div className="title-wrapper">
        <SectionTitle centered title="Meet Our Team" />

        <p>
          If you face any problem, our support team will help you <br />
          within a business working day.
        </p>
      </div>

      <Carousel grabCursor rewind pagination breakpoints={carouselBreakpoints}>
        {TEAM_MEMBERS.map(({
        designation,
        id,
        image,
        name
      }) => <TeamItem key={id}>
            <Card className="member-card">
              <div className="member-img-wrapper">
                <img alt={name} src={image} width="100%" height="100%" />
              </div>

              <div className="member-info">
                <H6 fontSize={18}>{name}</H6>
                <Paragraph color="text.secondary">{designation}</Paragraph>
              </div>
            </Card>
          </TeamItem>)}
      </Carousel>
    </StyledRoot>;
}