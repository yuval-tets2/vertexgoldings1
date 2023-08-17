import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";
import { FACULTY_TITLE_FIELD } from "../faculty/FacultyTitle";
import { UNIVERSITY_TITLE_FIELD } from "./UniversityTitle";

export const UniversityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Established" source="established" />
        <TextField label="Id" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Course"
          target="universityId"
          label="Courses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credits" source="credits" />
            <ReferenceField
              label="Department"
              source="department.id"
              reference="Department"
            >
              <TextField source={DEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Faculty"
              source="faculty.id"
              reference="Faculty"
            >
              <TextField source={FACULTY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="University"
              source="university.id"
              reference="University"
            >
              <TextField source={UNIVERSITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Department"
          target="universityId"
          label="Departments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="University"
              source="university.id"
              reference="University"
            >
              <TextField source={UNIVERSITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Employee"
          target="universityId"
          label="Employees"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Student"
          target="universityId"
          label="Students"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="Admission Date" source="admissionDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date Of Birth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Gender" source="gender" />
            <TextField label="Id" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Phone" source="phone" />
            <ReferenceField
              label="University"
              source="university.id"
              reference="University"
            >
              <TextField source={UNIVERSITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
