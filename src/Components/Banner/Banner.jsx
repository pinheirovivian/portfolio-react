import { Topmenu } from "../Topmenu/Topmenu";

import {
  SectionBanner,
  BannerTop,
  IllustrationLeft,
  IllustrationRight,
  CallToAction,
  PresentationText,
  ButtonCurriculum,
  BlurEffect,
} from "./styles";

export function Banner() {
  return (
    <>
      <SectionBanner>
        <BannerTop>
          <IllustrationLeft
            src="/assets/IllustrationTopBanner.png"
            alt="Ilustração de planeta"
          />
          <Topmenu />
        </BannerTop>
        <IllustrationRight
          src="/assets/IllustrationBottomBanner.png"
          alt="Ilustração de planeta com luas"
        />
        <CallToAction>
          <PresentationText>
            Olá! Eu me chamo Vivian, mas também sou conhecida por Vivi!
          </PresentationText>
          <a
            href="https://drive.google.com/file/d/1qfWZMpOmPGtd3hY3zOBNwD8dPbU1gqpk/view"
            target="_blank"
          >
            <ButtonCurriculum>Baixar Currículo</ButtonCurriculum>
          </a>
          <BlurEffect></BlurEffect>
        </CallToAction>
      </SectionBanner>
    </>
  );
}
