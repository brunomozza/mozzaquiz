// import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// Demonstração de engenharia reversa da definição da tag Title
// function Title(props) {
//   return <h1>{props.children}</h1>
// }



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/brunomozza" />
    </QuizBackground>
  )
}
