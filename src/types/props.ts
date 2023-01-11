import { Dispatch, SetStateAction } from 'react';
import { AdvantagesCardsType, SignInResponse, UsingStatsType, Word, UserAnswers } from './types';

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
  setUser: Dispatch<SetStateAction<SignInResponse | null>>;
};

type AuthProps = {
  setUser: Dispatch<SetStateAction<SignInResponse | null>>;
};

type SignedInButtonsProps = {
  setUser: Dispatch<SetStateAction<SignInResponse | null>>;
};

type GroupPickerProps = {
  setCurrentGroup: Dispatch<SetStateAction<number>>;
  styleForGroupElements: string;
  styleForContainer: string;
};


type UserProps = {
  userInfo: SignInResponse | null;
};

type WordsForAudioChallenge = {
  answers: Word[];
  choices: Word[][];
  loading: boolean;
}

type GameResultProps = {
  userAnswers: UserAnswers[];
}

export {
  UsingStatsProps,
  DescriptionProps,
  AdvantagesCardsProps,
  WordsProps,
  usePaginationProps,
  AlertProps,
  HeaderProps,
  AuthProps,
  UserProps,
  SignedInButtonsProps,
  GroupPickerProps,
  WordsForAudioChallenge,
  GameResultProps
};
