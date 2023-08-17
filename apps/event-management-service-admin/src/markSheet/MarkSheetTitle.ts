import { MarkSheet as TMarkSheet } from "../api/markSheet/MarkSheet";

export const MARKSHEET_TITLE_FIELD = "id";

export const MarkSheetTitle = (record: TMarkSheet): string => {
  return record.id || String(record.id);
};
