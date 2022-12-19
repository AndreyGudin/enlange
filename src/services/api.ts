import { Word } from "../types/types";

export enum ApiLinks {
  Link = 'http://localhost:9000',
  Words = 'words',
  Users = 'users',
  SignIn = 'signin',
  Tokens = 'tokens',
  AggregatedWords = 'aggregatedWords',
  Filter = 'filter',
  WordPerPage = 'wordsPerPage',
  Statistics = 'statistics'
}

const getWords = async (page: number, group: number) => {
  const request = `${ApiLinks.Link}/${ApiLinks.Words}?page=${page - 1}&group=${group - 1}`;
  const response = await fetch(request);
  const data: Word[] = await response.json();
  return data;
}

export {getWords}