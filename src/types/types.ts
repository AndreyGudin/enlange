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

export {
  UsingStatsProps,
  UsingStatsType,
  DescriptionProps,
  AdvantagesCardsType,
  AdvantagesCardsProps,
  Word,
  WordsProps
};
