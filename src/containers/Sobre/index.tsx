import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero
      obcaecati pariatur corporis a nulla nobis cupiditate dicta aspernatur
      voluptate accusamus, dolorum quibusdam reprehenderit, numquam reiciendis
      quod possimus quia omnis.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=oyamasscruz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oyamasscruz&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
export default Sobre
