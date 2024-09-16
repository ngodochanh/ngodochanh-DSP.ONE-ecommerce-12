export type IFilter = {
  label: string;
  value: string;
};

export type IFilters = {
  [key: string]: IFilter[];
};
