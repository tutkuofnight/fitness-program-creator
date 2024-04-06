import Collection from './collection'

interface Program {
  id: number,
  name: string,
  private: boolean,
  description: string,
  image: string,
  days: string[],
  collections: object[],
  program_type: string
}

export default Program
