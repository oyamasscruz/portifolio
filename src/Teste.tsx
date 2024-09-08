import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaPerigo = styled(Botao)`
  background-color: red;
  font-size: 18px;
  color: #fff;
`

function Teste() {
  return (
    <>
      <div>Olá</div>
      <Botao principal>Enviar</Botao>
      <Botao principal={false} fontSize="14px">
        Cancelar
      </Botao>
      <BotaPerigo principal>Perigo</BotaPerigo>
      <BotaPerigo principal fontSize="20px" as="a">
        Não aperte Aqui
      </BotaPerigo>
    </>
  )
}
export default Teste
