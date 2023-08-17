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

import { ADMISSIONBATCH_TITLE_FIELD } from "./AdmissionBatchTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const AdmissionBatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Start Date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AdmissionForm"
          target="admissionBatchId"
          label="AdmissionForms"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Admission Batch"
              source="admissionbatch.id"
              reference="AdmissionBatch"
            >
              <TextField source={ADMISSIONBATCH_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="formSubmittedAt" label="Form Submitted At" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
