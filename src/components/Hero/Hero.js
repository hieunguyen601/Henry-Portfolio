import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My Name is <br/>
        Henry Hieu Nguyen
      </SectionTitle>
      <SectionText>
        I'm a motivated Computer Science student focused on becoming a skilled software developer. I enjoy building applications, learning new technologies, and solving real-world problems through code.
      </SectionText>
      <Button onClick={() => window.location = 'https://mail.google.com/mail/u/1/#inbox'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;