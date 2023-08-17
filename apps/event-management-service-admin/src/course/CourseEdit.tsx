import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AdmissionBatchTitle } from "../admissionBatch/AdmissionBatchTitle";
import { AdmissionCriterionTitle } from "../admissionCriterion/AdmissionCriterionTitle";
import { AdmissionFormTitle } from "../admissionForm/AdmissionFormTitle";
import { DepartmentTitle } from "../department/DepartmentTitle";
import { FacultyTitle } from "../faculty/FacultyTitle";
import { MarkSheetTitle } from "../markSheet/MarkSheetTitle";
import { UniversityTitle } from "../university/UniversityTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="admissionBatches"
          reference="AdmissionBatch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdmissionBatchTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="admissionCriteria"
          reference="AdmissionCriterion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdmissionCriterionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="admissionForm"
          reference="AdmissionForm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdmissionFormTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Credits" source="credits" />
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="Department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <TextInput label="Description" source="description" />
        <ReferenceInput source="faculty.id" reference="Faculty" label="Faculty">
          <SelectInput optionText={FacultyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="markSheet"
          reference="MarkSheet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MarkSheetTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
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
