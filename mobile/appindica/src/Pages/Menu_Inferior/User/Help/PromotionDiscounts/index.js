import React from "react";
import { ScrollView } from "react-native";

import ComponentHeader from "../../../../../Components/Header";

import { Container, Information, Title, Description } from "./styles";

function PromotionDiscounts() {
  return (
    <Container>
      <ComponentHeader
        buttonBack={true}
        displayLogo={false}
        titleText="Pomoções"
      />
      <ScrollView>
        <Information>
          <Title>Promoções e descontos</Title>
          <Description>
            Mais uma noite como todas as anteriores. Pego minha caneca de café
            cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto.
            Observo a noite fria e chuvosa, até parece confortável por um
            momento, se não fossem as dezenas de preocupações que me desmotivam
            a cada dia.
          </Description>
          <Description>
            Penso em você, mesmo sabendo o quão longe está de mim, sinto aquele
            amor que continua a me desgraçar intensamente a cada dia, e penso
            quando enfim poderei te ter comigo.
          </Description>
          <Description>
            Sei lá, o café chega ao fim e trago a ultima ponta, nada muda. É
            como se eu fosse passar por isso mais uns longos anos a frente. Cada
            vez mais tenho a sensação de incertezas e inseguranças e tento me
            manter firme apesar disso. Algumas coisas parecem dar certo e
            maioria não, tipo você.
          </Description>
          <Description>
            Então após 10 minutos refletindo, largo tudo, fecho a janela e volto
            pro meu mundo dentro do quarto. Não sei até quando, não sei o
            porquê, só sei que tá tudo tão errado e quero me livrar disso o
            quanto antes. E tu não tem nem ideia do quanto, amor meu.
          </Description>
          <Description>
            Então após 10 minutos refletindo, largo tudo, fecho a janela e volto
            pro meu mundo dentro do quarto. Não sei até quando, não sei o
            porquê, só sei que tá tudo tão errado e quero me livrar disso o
            quanto antes. E tu não tem nem ideia do quanto, amor meu.
          </Description>
          <Description>
            Então após 10 minutos refletindo, largo tudo, fecho a janela e volto
            pro meu mundo dentro do quarto. Não sei até quando, não sei o
            porquê, só sei que tá tudo tão errado e quero me livrar disso o
            quanto antes. E tu não tem nem ideia do quanto, amor meu.
          </Description>
        </Information>
      </ScrollView>
    </Container>
  );
}

export default PromotionDiscounts;
