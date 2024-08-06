import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "./lib/utils";
import {
  africa,
  america,
  asia,
  dataType,
  europe,
  medalsDataAfrica,
  medalsDataAmerica,
  medalsDataAsia,
  medalsDataEurope,
  medalsDataOceania,
  oceania,
} from "./data/faker";
import Why from "@/assets/why.png";
import bg from "@/assets/bg.jpeg";
import car from "@/assets/car.png";
import benjamincode from "@/assets/benjamincode.png";
import { useState } from "react";

export function App() {
  const [displayWhy, setDisplayWhy] = useState(false);
  const [displayThanks, setDisplayThanks] = useState(false);
  const onClickCountry = (country?: string) => {
    if (!country) return;
    if (country == "france") return setDisplayWhy(!displayWhy);
    if (country == "algeria") return setDisplayThanks(!displayThanks);
  };
  return (
    <div className="pt-44 flex flex-col h-full">
      <h1 className="font-bold text-center text-3xl">
        Médailles olympiques par continent* à Paris 2024
      </h1>
      <div className="flex flex-col-reverse pt-16">
        <div className="md:flex justify-center md:-mt-44">
          <ContinentChart
            onClickCountry={onClickCountry}
            continent="Asie"
            data={medalsDataAsia}
            config={asia}
            bronze={46}
            gold={31}
            silver={34}
            innerRadius={75}
            side="bottom"
          />
          <ContinentChart
            onClickCountry={onClickCountry}
            continent="Océanie"
            data={medalsDataOceania}
            config={oceania}
            bronze={16}
            gold={17}
            silver={11}
            innerRadius={95}
            side="bottom"
          />
        </div>
        <div className="md:flex justify-center">
          <ContinentChart
            onClickCountry={onClickCountry}
            continent="Europe"
            data={medalsDataEurope}
            config={europe}
            bronze={62}
            gold={62}
            silver={53}
            innerRadius={65}
          />
          <ContinentChart
            onClickCountry={onClickCountry}
            continent="Afrique"
            data={medalsDataAfrica}
            config={africa}
            bronze={3}
            gold={5}
            silver={4}
            innerRadius={105}
          />
          <ContinentChart
            onClickCountry={onClickCountry}
            continent="Amerique"
            data={medalsDataAmerica}
            config={america}
            bronze={29}
            gold={38}
            silver={41}
            innerRadius={85}
          />
        </div>
      </div>
      <div
        className={cn(
          "lg:absolute right-0 bottom-0 text-center transition-all -z-10 pt-10",
          displayWhy ? "opacity-100" : "opacity-0"
        )}
      >
        <h3 className="overfow-hidden transition-all font-bold max-w-sm text-xl mx-auto lg:-mb-10 -mb-20 mb-0">
          Le pire jour de la vie des développeurs,{" "}
          <span className="opacity-50 font-normal text-md">
            après la création des timezones
          </span>
        </h3>
        <img
          src={Why}
          alt="Quelque instant avant la catastrophe"
          className="2xl:w-[500px] lg:w-[400px] max-w-full"
        />
      </div>

      <div className="fixed w-full h-full top-0 bottom-0 -z-20">
        <img
          src={bg}
          alt=""
          className="object-cover h-full w-full opacity-10"
        />
      </div>

      <div
        className={cn(
          "bande absolute top-0 bg-black/70 text-white py-3 transition-all",
          displayThanks ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="text-lg">
          💪 1, 2, 3 Viva l'Algérie ❤️ | Merci{" "}
          <strong className="text-red-400">Benjamin Code</strong> pour toutes
          ces années de contenu, j'ai appris à maîtriser 🅱️ Bootstrap grâce à
          toi et j'ai perfectionné mon accent anglais grâce à toi !
        </p>
      </div>

      <div className="fixed bottom-0 w-6 car z-20">
        <img src={benjamincode} alt="" className="-mb-1" />
        <img src={car} alt="" />
      </div>
    </div>
  );
}

const ContinentChart = ({
  continent,
  config,
  data,
  bronze,
  gold,
  silver,
  className,
  innerRadius = 100,
  side = "top",
  onClickCountry,
}: {
  continent: string;
  config: ChartConfig;
  data: dataType[];
  gold: number;
  silver: number;
  bronze: number;
  innerRadius?: number;
  className?: string;
  side?: "top" | "bottom";
  onClickCountry: (country?: string) => void;
}) => (
  <div className={cn("pb-0 relative hover:z-10", className)}>
    {side == "top" && (
      <div className="-mb-2 space-y-1 text-center">
        <h3 className="font-bold text-xl">{continent}</h3>
        <div className="text-sm flex justify-center gap-3">
          <div className="flex items-center gap-1">
            <div className="size-2 bg-yellow-300 rounded-[20%]" />
            <span>{gold},</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="size-2 bg-gray-400 rounded-[20%]" />
            <span>{silver},</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="size-2 bg-orange-600/80 rounded-[20%]" />
            <span>{bronze}</span>
          </div>
        </div>
      </div>
    )}
    <ChartContainer
      config={config}
      className="aspect-square w-[300px] -mx-5 justify-center mx-auto"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={data}
          dataKey="medals"
          nameKey="country"
          innerRadius={innerRadius}
          strokeWidth={5}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <g onClick={() => onClickCountry(props.name)}>
              <Sector {...props} outerRadius={outerRadius + 10} />
              <Sector
                {...props}
                outerRadius={outerRadius + 25}
                innerRadius={outerRadius + 12}
              />
            </g>
          )}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {gold + silver + bronze}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      {continent}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
    {side != "top" && (
      <div className="-mt-2 space-y-1 text-center">
        <h3 className="font-bold text-xl">{continent}</h3>
        <div className="text-sm flex justify-center gap-3">
          <div className="flex items-center gap-1">
            <div className="size-2 bg-yellow-300 rounded-[20%]" />
            <span>{gold},</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="size-2 bg-gray-400 rounded-[20%]" />
            <span>{silver},</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="size-2 bg-orange-600/80 rounded-[20%]" />
            <span>{bronze}</span>
          </div>
        </div>
      </div>
    )}
  </div>
);
