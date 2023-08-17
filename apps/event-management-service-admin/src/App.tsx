import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { UniversityList } from "./university/UniversityList";
import { UniversityCreate } from "./university/UniversityCreate";
import { UniversityEdit } from "./university/UniversityEdit";
import { UniversityShow } from "./university/UniversityShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { AdmissionBatchList } from "./admissionBatch/AdmissionBatchList";
import { AdmissionBatchCreate } from "./admissionBatch/AdmissionBatchCreate";
import { AdmissionBatchEdit } from "./admissionBatch/AdmissionBatchEdit";
import { AdmissionBatchShow } from "./admissionBatch/AdmissionBatchShow";
import { AdmissionFormList } from "./admissionForm/AdmissionFormList";
import { AdmissionFormCreate } from "./admissionForm/AdmissionFormCreate";
import { AdmissionFormEdit } from "./admissionForm/AdmissionFormEdit";
import { AdmissionFormShow } from "./admissionForm/AdmissionFormShow";
import { FacultyList } from "./faculty/FacultyList";
import { FacultyCreate } from "./faculty/FacultyCreate";
import { FacultyEdit } from "./faculty/FacultyEdit";
import { FacultyShow } from "./faculty/FacultyShow";
import { MarkSheetList } from "./markSheet/MarkSheetList";
import { MarkSheetCreate } from "./markSheet/MarkSheetCreate";
import { MarkSheetEdit } from "./markSheet/MarkSheetEdit";
import { MarkSheetShow } from "./markSheet/MarkSheetShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { AdmissionCriterionList } from "./admissionCriterion/AdmissionCriterionList";
import { AdmissionCriterionCreate } from "./admissionCriterion/AdmissionCriterionCreate";
import { AdmissionCriterionEdit } from "./admissionCriterion/AdmissionCriterionEdit";
import { AdmissionCriterionShow } from "./admissionCriterion/AdmissionCriterionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Event Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="University"
          list={UniversityList}
          edit={UniversityEdit}
          create={UniversityCreate}
          show={UniversityShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="AdmissionBatch"
          list={AdmissionBatchList}
          edit={AdmissionBatchEdit}
          create={AdmissionBatchCreate}
          show={AdmissionBatchShow}
        />
        <Resource
          name="AdmissionForm"
          list={AdmissionFormList}
          edit={AdmissionFormEdit}
          create={AdmissionFormCreate}
          show={AdmissionFormShow}
        />
        <Resource
          name="Faculty"
          list={FacultyList}
          edit={FacultyEdit}
          create={FacultyCreate}
          show={FacultyShow}
        />
        <Resource
          name="MarkSheet"
          list={MarkSheetList}
          edit={MarkSheetEdit}
          create={MarkSheetCreate}
          show={MarkSheetShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="AdmissionCriterion"
          list={AdmissionCriterionList}
          edit={AdmissionCriterionEdit}
          create={AdmissionCriterionCreate}
          show={AdmissionCriterionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
