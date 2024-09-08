import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})


export const decksAPI ={
  fetchDecks(){
    return instance.get<FetchDecksResponseType>('/v2/decks')
  }
}

type FetchDecksResponseType = {
  items: Decks[],
  pagination: Pagination
}

export type Decks = {
  author: Author,
  isFavorite: boolean,
  id: string,
  userId: string,
  name: string,
  isPrivate: boolean,
  cover: string,
  created: string,
  updated: string,
  cardsCount: number,
}

type Author = {
  id: string,
  name: string,
}

type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}