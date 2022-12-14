import React from "react";
import { JsxElement } from "typescript";

export type UsingStatsProps ={
  stats: UsingStatsType[];
}

export type UsingStatsType = {
  title: string;
  info: string;
}

export type DescriptionProps = {
  cards: React.ReactNode;
}

export type AdvantagesCardsProps = {
  image: string;
  title: string;
  description: string;
}
