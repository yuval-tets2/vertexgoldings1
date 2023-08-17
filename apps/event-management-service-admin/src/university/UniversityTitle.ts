import { University as TUniversity } from "../api/university/University";

export const UNIVERSITY_TITLE_FIELD = "name";

export const UniversityTitle = (record: TUniversity): string => {
  return record.name || String(record.id);
};
