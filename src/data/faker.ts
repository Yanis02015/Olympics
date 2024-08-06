// last update 06/08/2024

import { ChartConfig } from "@/components/ui/chart";

export type dataType = {
  country: string;
  medals: number;
  fill: `var(--color-${string})`;
};

export const africa = {
  sudAfrica: {
    label: "Afrique du Sud",
    color: "hsl(var(--chart-1))",
  },
  kenya: {
    label: "Kenya",
    color: "hsl(var(--chart-2))",
  },
  algeria: {
    label: "Algeria",
    color: "hsl(var(--chart-3))",
  },
  ouganda: {
    label: "Ouganda",
    color: "hsl(var(--chart-4))",
  },
  ethiopie: {
    label: "Ethiopie",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const medalsDataAfrica = [
  { country: "sudAfrica", medals: 1, fill: "var(--color-sudAfrica)" },
  { country: "kenya", medals: 1, fill: "var(--color-kenya)" },
  { country: "algeria", medals: 1, fill: "var(--color-algeria)" },
  { country: "ouganda", medals: 1, fill: "var(--color-ouganda)" },
  { country: "ethiopie", medals: 0, fill: "var(--color-ethiopie)" },
] satisfies dataType[];

export const europe = {
  france: {
    label: "France",
    color: "hsl(var(--chart-1))",
  },
  uk: {
    label: "Grande-Bretagne",
    color: "hsl(var(--chart-2))",
  },
  italy: {
    label: "Italie",
    color: "hsl(var(--chart-3))",
  },
  hollande: {
    label: "Pays-Bas",
    color: "hsl(var(--chart-4))",
  },
  allemagne: {
    label: "Allemagne",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const medalsDataEurope = [
  { country: "france", medals: 13, fill: "var(--color-france)" },
  { country: "uk", medals: 12, fill: "var(--color-uk)" },
  { country: "italy", medals: 9, fill: "var(--color-italy)" },
  { country: "hollande", medals: 7, fill: "var(--color-hollande)" },
  { country: "allemagne", medals: 7, fill: "var(--color-allemagne)" },
] satisfies dataType[];

export const america = {
  us: {
    label: "Etats-Unis",
    color: "hsl(var(--chart-1))",
  },
  canada: {
    label: "Canada",
    color: "hsl(var(--chart-2))",
  },
  bresil: {
    label: "Brésil",
    color: "hsl(var(--chart-3))",
  },
  guatemala: {
    label: "Guatemala",
    color: "hsl(var(--chart-4))",
  },
  argentine: {
    label: "Argentine",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const medalsDataAmerica = [
  { country: "us", medals: 13, fill: "var(--color-us)" },
  { country: "canada", medals: 13, fill: "var(--color-canada)" },
  { country: "bresil", medals: 13, fill: "var(--color-bresil)" },
  { country: "guatemala", medals: 13, fill: "var(--color-guatemala)" },
  { country: "argentine", medals: 13, fill: "var(--color-argentine)" },
] satisfies dataType[];

export const oceania = {
  australie: {
    label: "Australie",
    color: "hsl(var(--chart-1))",
  },
  newZealand: {
    label: "Nouvelle-Zélande",
    color: "hsl(var(--chart-2))",
  },
  fidji: {
    label: "Fidji",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export const medalsDataOceania = [
  { country: "australie", medals: 13, fill: "var(--color-australie)" },
  { country: "newZealand", medals: 3, fill: "var(--color-newZealand)" },
  { country: "fidji", medals: 0, fill: "var(--color-fidji)" },
] satisfies dataType[];

export const asia = {
  china: {
    label: "Chine",
    color: "hsl(var(--chart-1))",
  },
  corea: {
    label: "Corée du Sud",
    color: "hsl(var(--chart-2))",
  },
  japon: {
    label: "Japon",
    color: "hsl(var(--chart-3))",
  },
  hongKong: {
    label: "Hong-Kong",
    color: "hsl(var(--chart-4))",
  },
  azerbaidjan: {
    label: "Azerbaïdjan",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const medalsDataAsia = [
  { country: "china", medals: 21, fill: "var(--color-china)" },
  { country: "corea", medals: 11, fill: "var(--color-corea)" },
  { country: "japon", medals: 10, fill: "var(--color-japon)" },
  { country: "hongKong", medals: 2, fill: "var(--color-hongKong)" },
  { country: "azerbaidjan", medals: 2, fill: "var(--color-azerbaidjan)" },
] satisfies dataType[];
