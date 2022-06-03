import bugIcon from 'assets/bug.svg'
import ideaIcon from 'assets/idea.svg'
import thoughtIcon from 'assets/thought.svg'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugIcon,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaIcon,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtIcon,
      alt: 'Imagem de um balão de pensamento',
    }
  }
}