import {
  MyProjectsContainer,
  TitleSection,
  ProjectsContainer,
  ProjectContainer,
  ImgProjectContainer,
  TitleProject,
} from "./styles";
import { IoMdPlanet } from "react-icons/io";

export function Myprojects() {
  return (
    <MyProjectsContainer id="projects">
      <TitleSection>
        <IoMdPlanet size={60} />
        <h2>My projects</h2>
      </TitleSection>
      <ProjectsContainer>

        <ProjectContainer
          href="https://github.com/pinheirovivian/calculater-imc"
          target="_blank"
        >
          <ImgProjectContainer
            src="https://github.com/pinheirovivian/calculater-imc/raw/main/imc.png"
            alt="Imagem do projeto"
          />
          <TitleProject>Calculadora IMC</TitleProject>
        </ProjectContainer>

        <ProjectContainer
          href="https://github.com/pinheirovivian/calculadora-js"
          target="_blank"
        >
          <ImgProjectContainer
            src="https://github.com/pinheirovivian/calculadora-js/raw/main/CALCULADORAJS.png?raw=true"
            alt="Imagem do projeto"
          />
          <TitleProject>Calculadora</TitleProject>
        </ProjectContainer>

        <ProjectContainer
          href="https://github.com/pinheirovivian/netflix-login"
          target="_blank"
        >
          <ImgProjectContainer
            src="https://github.com/pinheirovivian/netflix-login/blob/main/netflix.png?raw=true"
            alt="Imagem do projeto"
          />
          <TitleProject>Netflix login</TitleProject>
        </ProjectContainer>

        <ProjectContainer
          href="https://github.com/pinheirovivian/conversor-moedas"
          target="_blank"
        >
          <ImgProjectContainer
            src="https://github.com/pinheirovivian/conversor-moedas/blob/main/conversor.png?raw=true"
            alt="Imagem do projeto"
          />
          <TitleProject>Conversor de Moedas</TitleProject>
        </ProjectContainer>

        <ProjectContainer
          href="https://github.com/pinheirovivian/flip-card"
          target="_blank"
        >
          <ImgProjectContainer
            src="https://github.com/pinheirovivian/flip-card/blob/main/flip.png?raw=true"
            alt="Imagem do projeto"
          />
          <TitleProject>Flip Card</TitleProject>
        </ProjectContainer>
      </ProjectsContainer>
    </MyProjectsContainer>
  );
}