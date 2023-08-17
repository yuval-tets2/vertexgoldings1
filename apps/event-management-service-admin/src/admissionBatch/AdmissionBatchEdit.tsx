import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AdmissionFormTitle } from "../admissionForm/AdmissionFormTitle";
import { CourseTitle } from "../course/CourseTitle";

export const AdmissionBatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="admissionForm"
          reference="AdmissionForm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdmissionFormTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="courses"
          reference="Course"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourseTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
