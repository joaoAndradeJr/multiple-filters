export type RickValueProvider = {
  data: DataTypeContext[],
  columns: string[],
  filterList: FilterListType[],
};

export type RickProviderProps = {
  children: React.ReactNode;
};

export type InfoType = 'name' | 'status' | 'species' | 'location' | 'origin';

export type FilterListType = {
  info: InfoType,
  value: string,
};

export type CharacterType = {
  'id': number,
  'name': string,
  'status': string,
  'species': string,
  'type': string,

  'gender': string,
  'origin': {
    'name': string,
    'url': string
  },
  'location': {
    'name': string,
    'url': string
  },
  'image': string,
  'episode': string[],
  'url': string,
  'created': string
};

export type DataTypeContext = {
  id: number,
  name: string,
  image: string,
  species: string,
  status: string,
  origin: string,
  location: string,
};
