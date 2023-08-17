import { Faculty as TFaculty } from "../api/faculty/Faculty";

export const FACULTY_TITLE_FIELD = "name";

export const FacultyTitle = (record: TFaculty): string => {
  return record.name || String(record.id);
};
