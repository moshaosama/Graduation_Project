export interface ReduxData {
  loading: boolean;
  data:
    | {
        result: {
          Specialty_name: string;
        }[];
        statusbar: string;
      }
    | any;
  error: string;
}
