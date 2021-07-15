import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { JurkutMenu, OrkutNostalgicIconSet } from '../src/lib/jurkutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades) {
  return (
    <Box> 
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }}/>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'jusato';
  const pessoasFavoritas = [
    'jusato',
    'bigarcia',
    'yasju', 
    'facebook', 
    'instagram',
    'harvard'
  ]

  return (
    <>
      <JurkutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}> {/* esse style é css */}
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}> 
          <Box> 
            <h1 className="title">
              Júlia Sato
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}> 
          <ProfileRelationsBoxWrapper> 
            <h2 className="smallTitles"> 
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
