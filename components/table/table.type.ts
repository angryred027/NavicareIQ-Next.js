export type TableTData = Record<string, string | number>;

export type TableProps<T extends TableTData> = {
  data: T[];
};
