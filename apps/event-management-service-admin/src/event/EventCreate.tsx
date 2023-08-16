import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Customer" source="customer" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
