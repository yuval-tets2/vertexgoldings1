import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdmissionBatchTitle } from "../admissionBatch/AdmissionBatchTitle";
import { CourseTitle } from "../course/CourseTitle";
import { StudentTitle } from "../student/StudentTitle";

export const AdmissionFormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="admissionBatch.id"
          reference="AdmissionBatch"
          label="Admission Batch"
        >
          <SelectInput optionText={AdmissionBatchTitle} />
        </ReferenceInput>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
