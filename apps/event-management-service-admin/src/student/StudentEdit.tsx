import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { AdmissionFormTitle } from "../admissionForm/AdmissionFormTitle";
import { MarkSheetTitle } from "../markSheet/MarkSheetTitle";
import { UniversityTitle } from "../university/UniversityTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <DateTimeInput label="Admission Date" source="admissionDate" />
        <ReferenceArrayInput
          source="admissionForm"
          reference="AdmissionForm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdmissionFormTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Date Of Birth" source="dateOfBirth" />
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "MALE", value: "MALE" },
            { label: "FEMALE", value: "FEMALE" },
            { label: "OTHER", value: "OTHER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="markSheet"
          reference="MarkSheet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MarkSheetTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <ReferenceInput
          source="university.id"
          reference="University"
          label="University"
        >
          <SelectInput optionText={UniversityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
