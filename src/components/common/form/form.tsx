// ParentForm.tsx
import React, { Children, ComponentPropsWithoutRef } from 'react';
import { Formik, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';
import AppTextInput from './AppTextInput';
import AppSubmitButton from './AppSubmitButton';
import AppRadioInput from './AppRadioInput';
import AppTextbox from './AppTextbox';
import AppDataGrid from './AppDataGrid';
import TopNavigationBar from '../../layout/top-nav';

// interface FormValues {
//   name: string;
//   gender: string;
//   hobbies: string[];
//   description: string;
// }

type FormProps = ComponentPropsWithoutRef<"form"> & {
    children: React.ReactNode; // Change the type of children to React.ReactNode
    handleSubmit: (values: FormikValues) => void;
    handleChanged: (values: FormikValues) => void;
    overrideInitialValues?: FormikValues | null;
    // yupValidation?: yupAnyObject;
  };

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  gender: Yup.string().required('Gender is required'),
  hobbies: Yup.array().min(1, 'Select at least one hobby'),
  description: Yup.string(),
});

const Form = ({children}: FormProps) => {
  const handleSubmit = (values: FormikValues, actions: any) => {
    // Handle form submission logic here
    console.log(values);
    actions.setSubmitting(false);
  };

  const handleTabChange = (value: number) => {
    // Handle tab change logic here if needed
    console.log('Selected tab:', value);
  };

  console.log(children);
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const rows = [
    { id: 1, docTypeNo: '12345678', docTypeName: 'Document 1', status: 'Active', keywords: 'Keyword 1', lastModified: '2023-01-01', modifiedBy: 'User 1', dateCreated: '2022-01-01', createdBy: 'User 2' },
    { id: 2, docTypeNo: '45678912', docTypeName: 'Document 1', status: 'Active', keywords: 'Keyword 1', lastModified: '2023-01-01', modifiedBy: 'User 1', dateCreated: '2022-01-01', createdBy: 'User 2' },
    { id: 3, docTypeNo: '78912345', docTypeName: 'Document 1', status: 'Active', keywords: 'Keyword 1', lastModified: '2023-01-01', modifiedBy: 'User 1', dateCreated: '2022-01-01', createdBy: 'User 2' },
    { id: 4, docTypeNo: '56789123', docTypeName: 'Document 1', status: 'Active', keywords: 'Keyword 1', lastModified: '2023-01-01', modifiedBy: 'User 1', dateCreated: '2022-01-01', createdBy: 'User 2' },
    { id: 5, docTypeNo: '34567891', docTypeName: 'Document 1', status: 'Active', keywords: 'Keyword 1', lastModified: '2023-01-01', modifiedBy: 'User 1', dateCreated: '2022-01-01', createdBy: 'User 2' },
  ];

  return (
    <Formik
      initialValues={{ name: '', gender: '', hobbies: [], description: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
    <TopNavigationBar onTabChange={handleTabChange}/>
      <form>
        <div style={{ marginTop: '100px' }}>
            <AppDataGrid rows={rows} />
        </div>
        {/* {children} */}
      </form>
    </Formik>
  );
};

export default Form;
