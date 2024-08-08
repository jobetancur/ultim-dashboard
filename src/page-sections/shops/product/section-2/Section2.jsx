import { Dot, Image, Slide, Slider } from 'pure-react-carousel';
// MUI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import IconButton from '@mui/material/IconButton';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// MUI ICON COMPONENTS
import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LanguageOutlined from '@mui/icons-material/LanguageOutlined';
import Inventory2Outlined from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
// CUSTOM COMPONENTS
import Link from '@/components/link';
import { H4, Paragraph } from '@/components/typography';
// STYLED COMPONENTS
import { StyledCarouselProvider, StyledStack } from './styles';
export default function Section2() {
  return <div className="py-12">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={7} xs={12}>
            <StyledCarouselProvider dragEnabled touchEnabled totalSlides={3} naturalSlideWidth={100} naturalSlideHeight={75}>
              <Slider>
                {[0, 1, 2].map(item => <Slide index={item} key={item} className="slide">
                    <Image hasMasterSpinner={true} src="/static/products/rayban-glass-2.jpg" />
                  </Slide>)}
              </Slider>

              <StyledStack direction="row" spacing={2}>
                {[0, 1, 2].map(item => <Dot slide={item} key={item}>
                    <Image hasMasterSpinner={true} src="/static/products/rayban-glass-2.jpg" />
                  </Dot>)}
              </StyledStack>
            </StyledCarouselProvider>
          </Grid>

          <Grid item md={5} xs={12}>
            <Stack spacing={4}>
              <H4 lineHeight={1.3}>
                Fashion Sunglass <br /> for man
              </H4>

              <Paragraph lineHeight={1} fontSize={18} fontWeight={500}>
                $18.50
              </Paragraph>

              <div>
                <Stack mb={1} direction="row" spacing={1} alignItems="center">
                  <LanguageOutlined fontSize="small" />
                  <p>Free worldwide shipping</p>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Inventory2Outlined fontSize="small" />
                  <p>In stock, ready to ship</p>
                </Stack>
              </div>

              <Stack spacing={2}>
                <Button fullWidth size="large" variant="outlined" startIcon={<ShoppingCartOutlined />}>
                  Add to cart
                </Button>

                <Button fullWidth size="large">
                  Buy now
                </Button>

                <Paragraph textAlign="center" px={4}>
                  This is a demonstration store. You can purchase products like this from{' '}
                  <Link href="https://ui-lib.com">UI Lib</Link>
                </Paragraph>
              </Stack>
            </Stack>

            <Stack spacing={4} mt={3}>
              <Paragraph>
                Made from durable water-resistant waxed canvas, these pouches are great for carrying
                cables, chargers, batteries, pens and other odds and ends. They are the perfect
                complement to our <Link href="https://ui-lib.com">UI Lib</Link> when you need
                additional organization.
              </Paragraph>

              <div>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    Shipping information
                  </AccordionSummary>

                  <AccordionDetails>
                    Made from durable water-resistant waxed canvas, these pouches are great for
                    carrying cables, chargers, batteries, pens and other odds and ends.
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>Ask a question</AccordionSummary>

                  <AccordionDetails>
                    Made from durable water-resistant waxed canvas, these pouches are great for
                    carrying cables, chargers, batteries, pens and other odds and ends.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div>
                <IconButton>
                  <Facebook />
                </IconButton>

                <IconButton>
                  <Twitter />
                </IconButton>

                <IconButton>
                  <LinkedIn />
                </IconButton>

                <IconButton>
                  <GitHub />
                </IconButton>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>;
}