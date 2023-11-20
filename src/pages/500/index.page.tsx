import {
  useState,
  useEffect,
} from "react";
import { NextPage } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Main, H1, H2 } from "./styles";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ServerError: NextPage = (): JSX.Element => {
  const [heightWindow, setHeightWindow] = useState<number>(0);

  useEffect(() => {
    const handleHeightWindow = () => {
      setHeightWindow(window.innerHeight);
    };

    if (window) {
      setHeightWindow(window.innerHeight);
      window.addEventListener("resize", handleHeightWindow);
    };

    () => {
      window.removeEventListener("resize", handleHeightWindow);
    };
  }, []);
  return (
    <Container>
      <Header />
      <Main
        exit="hidden"
        initial="hidden"
        animate="visible"
        variants={container}
        $height={heightWindow}
      >
        <H1 variants={item}>500</H1>
        <H2 variants={item}>Erro no servidor</H2>
      </Main>
      <Footer />
    </Container>
  );
};

export default ServerError;