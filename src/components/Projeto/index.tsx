import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'

import { Card, LinkBotao } from './styles'
import { useState, useEffect } from 'react'
// you also can import as an unique import: import { LinkBotao } from './styles';

const Projeto = () => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/oyamasscruz/repos')
      .then((res: Response) => res.json())
      .then((resJson) => {
        setRepos(resJson)
      })
      .catch((error) => console.error('Error fetching repos', error))
  }, [])

  return (
    <>
      {Array.isArray(repos) && repos.length > 0 ? (
        repos.map(({ id, name, language, html_url }) => (
          <Card key={id}>
            <Titulo>{name}</Titulo>
            <Paragrafo tipo="secundario">{language || 'N/A'}</Paragrafo>
            <LinkBotao href={html_url} target="_blank">
              Visualizar
            </LinkBotao>
          </Card>
        ))
      ) : (
        <Paragrafo tipo="secundario"> No repositories found</Paragrafo>
      )}
    </>
  )
}

export default Projeto
