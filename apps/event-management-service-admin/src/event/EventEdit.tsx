import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Customer" source="customer" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
