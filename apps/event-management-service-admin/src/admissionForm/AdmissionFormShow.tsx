import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ADMISSIONBATCH_TITLE_FIELD } from "../admissionBatch/AdmissionBatchTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const AdmissionFormShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Admission Batch"
          source="admissionbatch.id"
          reference="AdmissionBatch"
        >
          <TextField source={ADMISSIONBATCH_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="formSubmittedAt" label="Form Submitted At" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
