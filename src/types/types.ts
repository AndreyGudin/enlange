import React from 'react';

type UsingStatsProps = {
  stats: UsingStatsType[];
};

type UsingStatsType = {
  title: string;
  info: string;
};

type DescriptionProps = {
  cards: React.ReactNode;
};

type AdvantagesCardsType = {
  image: string;
  title: string;
  description: string;
};

type AdvantagesCardsProps = {
  cards: AdvantagesCardsType[];
};

type WordsProps = {
  words: Word[];
}

type usePaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

type AlertProps = {
  text: string;
}

type Word = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
};

type User = {
  name: string;
  email?: string;
  password: string;
};

type UserData ={
  name: string;
  email?: string;
  password: string;
  confirmPassword?: string;
}

type RegisteredUser = {
  email: string;
  id: string;
  name: string;
}

type SignInResponse = {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
  [key: string]: string;
};

export {
  UsingStatsProps,
  UsingStatsType,
  DescriptionProps,
  AdvantagesCardsType,
  AdvantagesCardsProps,
  Word,
  WordsProps,
  usePaginationProps,
  User,
  AlertProps,
  UserData,
  RegisteredUser,
  SignInResponse
};
