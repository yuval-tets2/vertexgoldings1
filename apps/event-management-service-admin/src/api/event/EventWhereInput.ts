import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EventWhereInput = {
  customer?: BooleanNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
