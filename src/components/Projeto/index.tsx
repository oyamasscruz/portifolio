import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'

import { Card, LinkBotao } from './styles'
// you also can import as an unique import: import { LinkBotao } from './styles';

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefa fetio com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
