import { json } from 'react-router-dom';
import { RegisteredUser, SignInResponse, User, Word } from '../types/types';

export enum ApiLinks {
  Link = 'http://localhost:9000',
  Words = 'words',
  Users = 'users',
  SignIn = 'signin',
  Tokens = 'tokens',
  AggregatedWords = 'aggregatedWords',
  Filter = 'filter',
  WordPerPage = 'wordsPerPage',
  Statistics = 'statistics',
}

const getWords = async (page: number, group: number) => {
  const request = `${ApiLinks.Link}/${ApiLinks.Words}?page=${page - 1}&group=${group - 1}`;
  const response = await fetch(request);
  const data: Word[] = await response.json();
  return data;
};

const getRandomPagesFromGroup = async (arrOfPages: number[], group: number) => {
  const response: Word[][] = await Promise.all(
    arrOfPages.map((page) => {
      return getWords(page, group);
    })
  );

  return response.flat();
};

const createUser = async (user: User): Promise<RegisteredUser | number> => {
  const request = `${ApiLinks.Link}/${ApiLinks.Users}`;
  const response = await fetch(request, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    const data: RegisteredUser = await response.json();
    return data;
  }
  return response.status;
};

const signIn = async (user: User): Promise<SignInResponse | number> => {
  const request = `${ApiLinks.Link}/${ApiLinks.SignIn}`;
  const response = await fetch(request, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    const data: SignInResponse = await response.json();
    return data;
  }
  return response.status;
};

const saveUserToStorage = (SignInResponse: SignInResponse) => {
  const currentTime = Date.now();
  SignInResponse.created = currentTime.toString(10);
  const objToString = JSON.stringify(SignInResponse);
  localStorage.setItem('user', objToString);
};

export { getWords, createUser, signIn, saveUserToStorage, getRandomPagesFromGroup };
