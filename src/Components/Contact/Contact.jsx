import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import IllustrationMyVersion from "../../assets/MyVersionComputer.svg";
import {
  ContactSection,
  ContactContainer,
  Illustration,
  LeftBlock,
  LeftBlockTitle,
  LeftBlockText,
  SocialMedia,
  Linkedin,
  RightBlock,
  RightBlockTitle,
  ContactForm,
  FormField,
  FormFieldTextArea,
  ContactFormButton,
} from "./styles";

export function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [disabled, setDisabled] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: nome,
      email: email,
      message: mensagem,
    };

    setDisabled(true);

    emailjs
      .send(
        "NOVO-ID-DO-SERVICO",
        "NOVO-ID-DO-MODELO",
        templateParams,
        "NOVA-CHAVE-DE-API"
      )
      .then(
        () => {
          setNome("");
          setEmail("");
          setMensagem("");

          toast.success("Sua mensagem foi enviada!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        },
        (error) => {
          console.log("Erro: ", error);
          toast.error(
            "Ops! Algo deu errado. Por favor, tente enviar uma mensagem pelo LinkedIn.",
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 4000,
            }
          );
        }
      )
      .finally(() => {
        setDisabled(false);
      });
  }

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Illustration
          src={IllustrationMyVersion}
          alt="Desenho de Vivian, uma mulher parda com o cabelo castanho preso, usando uma camisa branca e uma calça jeans, sentada com as pernas cruzadas, apoiando um notebook sobre as pernas, e olhando para a tela do notebook com um leve sorriso."
        />
        <LeftBlock>
          <LeftBlockTitle>Entrar em contato</LeftBlockTitle>
          <LeftBlockText>
            Agradeço por explorar meu portfólio! Sinta-se à vontade para entrar em contato através do LinkedIn, e-mail ou preencher o formulário de contato. 
            Estou ansiosa para trocar ideias e compartilhar mais sobre meu trabalho e experiências.
          </LeftBlockText>
          <SocialMedia>
            <Linkedin
              href="https://www.linkedin.com/in/vivian-mpinheiro/"
              target="_blank"
            >
              <BsLinkedin color="#fff" size={18} />
              <p>LinkedIn</p>
            </Linkedin>
          </SocialMedia>
          <SocialMedia style={{ marginLeft: "-2px" }}>
            <MdEmail color="#fff" size={21} />
            <p>vivianpinheiro.dev@gmail.com</p>
          </SocialMedia>
        </LeftBlock>
        <RightBlock>
          <RightBlockTitle>Mande uma mensagem</RightBlockTitle>
          <ContactForm onSubmit={sendEmail}>
            <FormField
              type="text"
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
            <FormField
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormFieldTextArea
              cols="30"
              rows="10"
              placeholder="Sua mensagem"
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
            ></FormFieldTextArea>
            <ContactFormButton disabled={disabled}>
              Enviar mensagem
            </ContactFormButton>
          </ContactForm>
        </RightBlock>
      </ContactContainer>
    </ContactSection>
  );
}
