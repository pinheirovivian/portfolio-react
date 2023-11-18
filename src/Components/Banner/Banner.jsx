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
            href="https://drive.google.com/drive/u/2/my-drive"
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
