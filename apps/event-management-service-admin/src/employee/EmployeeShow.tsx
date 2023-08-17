import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";
import { UNIVERSITY_TITLE_FIELD } from "../university/UniversityTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Designation" source="designation" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Id" source="id" />
        <TextField label="Last Name" source="lastName" />
        <ReferenceField
          label="University"
          source="university.id"
          reference="University"
        >
          <TextField source={UNIVERSITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
