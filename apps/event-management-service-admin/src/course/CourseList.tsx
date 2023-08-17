import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";
import { FACULTY_TITLE_FIELD } from "../faculty/FacultyTitle";
import { UNIVERSITY_TITLE_FIELD } from "../university/UniversityTitle";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Courses"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Faculty" source="faculty.id" reference="Faculty">
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
    </List>
  );
};
