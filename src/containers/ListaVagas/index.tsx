import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { ContainerVagas } from './style'

// Essa é a lista que você tinha apagado
const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor Front-end',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'Material UI']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor Fullstack',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'Material UI']
  },
  {
    id: 4,
    titulo: 'Designer de Interfaces',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'Material UI']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor Front-end',
    localizacao: 'Remoto',
    nivel: 'Sênior',
    modalidade: 'CLT',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'Material UI']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor Front-end para curso',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'Material UI']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor Front-end para curso',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'Material UI']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ContainerVagas>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </ContainerVagas>
    </div>
  )
}

export default ListaVagas