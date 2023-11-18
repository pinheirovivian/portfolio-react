import myPicture from "../../assets/Perfil.png";
import {
  AboutMeContainer,
  BlurEffect,
  AboutMeContent,
  Picture,
  TextTitle,
  BodyOfText,
  TextParagraph,
  ContrastText,
} from "./styles";

export function Aboutme() {
  return (
    <AboutMeContainer id="aboutMe">
      <BlurEffect />
      <AboutMeContent>
        <Picture src={myPicture} alt="Foto de Vivian" />
        <TextTitle>Ao infinito e além!</TextTitle>
        <BodyOfText>
          <TextParagraph>
            Optei pelo tema universo, pois explorar o vasto cenário da tecnologia é minha paixão. 
            Acredito que o mundo da tecnologia é repleto de oportunidades infinitas, proporcionando 
            um campo fértil para a realização de descobertas e inovações.{" "}
            </TextParagraph>
            <TextParagraph>
            <br />
            Assim como os exploradores do universo se adaptam a condições únicas no espaço cósmico e enfrentam 
            diversas situações desafiadoras, busco superar obstáculos e contribuir eficazmente para o dinâmico 
            universo da tecnologia, aprendendo de forma contínua e evoluindo para enfrentar os desafios do mundo digital.
          </TextParagraph>
          <TextParagraph>
            <br />
            Atualmente tenho investido na{" "}
            <ContrastText>formação Front-End</ContrastText> pela SOFTEX, em 
            <ContrastText> User Experience & Research - Arquitetura da Informação</ContrastText> pelo SENAC,
            e estou{" "}
            <ContrastText>cursando Análise e Desenvolvimentos de Sistemas</ContrastText>, na UNINASSAU. 
            Além disso, também tenho formação em{" "}
            <ContrastText>Design Thinking e UX/UI Design</ContrastText>,  atráves de cursos da FIAP, e
            tenho investido em <ContrastText>projetos pessoais</ContrastText> e em
            estudar <ContrastText>inglês</ContrastText>.
          </TextParagraph>
        </BodyOfText>
      </AboutMeContent>
    </AboutMeContainer>
  );
}
