import { Dispatch, SetStateAction } from 'react';
import { AdvantagesCardsType, SignInResponse, UsingStatsType, Word } from './types';

type UsingStatsProps = {
  stats: UsingStatsType[];
};

type DescriptionProps = {
  cards: React.ReactNode;
};

type AdvantagesCardsProps = {
  cards: AdvantagesCardsType[];
};

type WordsProps = {
  words: Word[];
};

type usePaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

type AlertProps = {
  text: string;
};

type HeaderProps = {
  userInfo: SignInResponse | null;
};

type AuthProps = {
  setUser: Dispatch<SetStateAction<SignInResponse | null>>;
};

type UserProps = {
  userInfo: SignInResponse | null;
};

export {
  UsingStatsProps,
  DescriptionProps,
  AdvantagesCardsProps,
  WordsProps,
  usePaginationProps,
  AlertProps,
  HeaderProps,
  AuthProps,
  UserProps
};
