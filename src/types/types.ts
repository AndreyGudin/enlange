type UsingStatsType = {
  title: string;
  info: string;
};

type AdvantagesCardsType = {
  image: string;
  title: string;
  description: string;
};

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

type UserAnswers = {
  word: string,
  answer: string;
  isRight:boolean;
}

export {
  UsingStatsType,
  AdvantagesCardsType,
  Word,
  User,
  UserData,
  RegisteredUser,
  SignInResponse,
  UserAnswers
};
