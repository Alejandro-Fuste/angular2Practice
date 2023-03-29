type sideStatusType = "light" | "dark" | "";

export type characterType = {
  name: string;
  side: sideStatusType;
};

export type availableSidesType = {
  display: string;
  value: string;
};
