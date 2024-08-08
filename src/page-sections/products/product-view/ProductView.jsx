import { useState } from 'react';
// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RadioGroup from '@mui/material/RadioGroup';
// REACT CAROUSEL
import { Dot, Image, Slide, Slider } from 'pure-react-carousel';
// CUSTOM COMPONENTS
import Counter from '@/components/counter';
import ColorRadio from '@/components/color-radio';
import FlexBox from '@/components/flexbox/FlexBox';
import { H2, H6, Paragraph } from '@/components/typography';
// CUSTOM ICON COMPONENTS
import Heart from '@/icons/Heart';
import Twitter from '@/icons/social/Twitter';
import Facebook from '@/icons/social/Facebook';
import Instagram from '@/icons/social/Instagram';
import ChevronDown from '@/icons/ChevronDown';
// STYLED COMPONENTS
import { StyledCarouselProvider, StyledIconButton, StyledStack } from './styles';
export default function ProductViewCard() {
  const [colorSelect, setColorSelect] = useState('red');

  // HANDLE CHANGE PRODUCT COLOR
  const handleChangeColor = event => {
    setColorSelect(event.target.value);
  };
  return <Card sx={{
    padding: 2
  }}>
      <Grid container spacing={3}>
        {/* PRODUCT IMAGE CAROUSEL */}
        <Grid item md={7} xs={12}>
          <StyledCarouselProvider totalSlides={3} dragEnabled={false} naturalSlideWidth={100} naturalSlideHeight={75}>
            <StyledStack spacing={3}>
              {[0, 1, 2].map(item => <Dot slide={item} key={item} style={{
              width: 60,
              height: 55
            }}>
                  <Box component={Image} hasMasterSpinner={true} src="/static/products/shoe-10.png" sx={{
                objectFit: 'cover',
                borderRadius: 1
              }} />
                </Dot>)}
            </StyledStack>

            <Slider>
              {[0, 1, 2].map(item => <Slide index={item} key={item} className="slide">
                  <Box component={Image} hasMasterSpinner={true} src="/static/products/shoe-10.png" sx={{
                objectFit: 'cover',
                borderRadius: 2
              }} />
                </Slide>)}
            </Slider>

            <StyledIconButton>
              <Heart />
            </StyledIconButton>
          </StyledCarouselProvider>
        </Grid>

        {/* PRODUCT INFORMATION */}
        <Grid item md={5}>
          <Chip color="success" size="small" label="In Stock" />

          {/* PRODUCT CATEGORY */}
          <Paragraph color="text.secondary" mt={2}>
            NIKE
          </Paragraph>

          {/* PRODUCT NAME */}
          <H6>Air Jordan 270</H6>

          {/* PRODUCT PRICE */}
          <H2 color="primary.main" my={2}>
            $350
          </H2>

          {/* PRODUCT COLOR */}
          <FlexBox alignItems="center" gap={3}>
            <H6 fontSize={16}>Colors:</H6>

            <RadioGroup row value={colorSelect} onChange={handleChangeColor} sx={{
            gap: 1
          }}>
              <ColorRadio value="red" icon_color="#FF316F" />
              <ColorRadio value="pumpkin" icon_color="#FE8969" />
              <ColorRadio value="purple" icon_color="#8C8DFF" />
              <ColorRadio value="green" icon_color="#27CE88" />
            </RadioGroup>
          </FlexBox>

          {/* PRODUCT SIZE */}
          <FlexBox alignItems="center" gap={3} mt={3}>
            <H6 fontSize={16}>Select size:</H6>

            <TextField select size="small" variant="outlined" SelectProps={{
            native: true,
            IconComponent: ChevronDown
          }} sx={{
            '.MuiNativeSelect-select': {
              lineHeight: 1
            }
          }}>
              <option value="42">42</option>
              <option value="41">41</option>
              <option value="40">40</option>
            </TextField>
          </FlexBox>

          {/* PRODUCT QUANTITY */}
          <FlexBox alignItems="center" gap={3} mt={3}>
            <H6 fontSize={16}>Quantity:</H6>
            <Counter />
            <Paragraph color="text.secondary">Available: 12</Paragraph>
          </FlexBox>

          {/* PRODUCT ADD TO CART BUTTON */}
          <FlexBox alignItems="center" gap={3} mt={3}>
            <Button variant="contained">Add to cart</Button>
            <Button variant="contained" color="success">
              Buy Now
            </Button>
          </FlexBox>

          {/* SOCIAL LINK BUTTONS */}
          <FlexBox mt={2}>
            <IconButton>
              <Facebook sx={{
              color: 'text.secondary'
            }} />
            </IconButton>

            <IconButton>
              <Instagram sx={{
              color: 'text.secondary'
            }} />
            </IconButton>

            <IconButton>
              <Twitter sx={{
              color: 'text.secondary'
            }} />
            </IconButton>
          </FlexBox>
        </Grid>
      </Grid>
    </Card>;
}