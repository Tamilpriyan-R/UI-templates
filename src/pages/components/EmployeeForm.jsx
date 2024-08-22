import React, { useState, useEffect } from "react";
import BASEURL from "../utils/Baseurl";
import Style from './Styles.module.css';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppointmentForm from "../page/Appointment";

const ALL_MANAGERS_QUERY = `
  query {
    allManagers {
      id
      user {
        id
        username
        empid
        department
        designation
      }
    }
  }
`;

const fetchManagers = async () => {
  const response = await fetch(BASEURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: ALL_MANAGERS_QUERY,
    }),
  });
  const data = await response.json();
  if (data.errors) {
    throw new Error(data.errors[0].message);
  }
  return data.data.allManagers;
};

const createUser = async (formData) => {
  const response = await fetch(BASEURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation createUser(
          $email: String!
          $password: String!
          $username: String!
          $empId: String!
          $department: String!
          $role: String!
          $designation: String!
          $teamleader: String!
        ) {
          createUser(
            input: {
              email: $email
              password: $password
              username: $username
              empid: $empId
              department: $department
              role: $role
              designation: $designation
              teamleader: $teamleader
            }
          ) {
            users {
              id
              email
            }
          }
        }
      `,
      variables: {
        email: formData.email,
        password: formData.password,
        username: formData.name,
        empId: formData.employeeId,
        department: formData.department,
        role: formData.role,
        designation: formData.designation,
        teamleader: formData.reportingManager,
      },
    }),
  });

  const data = await response.json();
  if (data.errors) {
    throw new Error(data.errors[0].message);
  }
  return data.data.createUser;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  employeeId: Yup.string().required('Employee ID is required'),
  department: Yup.string().required('Department is required'),
  reportingManager: Yup.string().required('Reporting Manager is required'),
  role: Yup.string().required('Role is required'),
  designation: Yup.string().required('Designation is required'),
  // password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SelectField = ({ label, name, options, formik }) => (
  <div>
    <Select
      label={label}
      value={formik.values[name]}
      onChange={(value) => formik.setFieldValue(name, value)}
      onBlur={() => formik.setFieldTouched(name, true)}
      error={formik.touched[name] && Boolean(formik.errors[name])}
    >
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
    {formik.touched[name] && formik.errors[name] && (
      <div className="text-red-600 text-sm mt-1">{formik.errors[name]}</div>
    )}
  </div>
);

export function EmployeeForm({ open, handleOpen }) {
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadManagers = async () => {
      try {
        const managersData = await fetchManagers();
        setManagers(managersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadManagers();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '********',
      email: '',
      employeeId: '',
      department: '',
      reportingManager: '',
      role: '',
      designation: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await createUser(values);
        console.log('User created:', result);
        formik.resetForm(); // Reset form after successful submission
        handleOpen(); // Close the dialog after successful submission
      } catch (err) {
        console.error('Error creating user:', err.message);
      }
    }
  });

  const handleCancel = () => {
    formik.resetForm(); // Reset form on cancel
    handleOpen(); // Close the dialog
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const departmentOptions = [
    { value: 'IT', label: 'IT' },
    { value: 'HR', label: 'HR' },
    { value: 'SALES', label: 'SALES' }
  ];

  const roleOptions = [
    { value: 'Employee', label: 'Employee' },
    { value: 'Intern', label: 'Intern' }
  ];

  const designationOptions = [
    { value: 'CEO', label: 'CEO' },
    { value: 'CIO', label: 'CIO' },
    { value: 'CRO', label: 'CRO' },
    { value: 'project_manager', label: 'Project Manager' },
    { value: 'software_developer', label: 'Software Developer' },
    { value: 'trainee_developer', label: 'Trainee Developer' }
  ];

  const managerOptions = managers.map(manager => ({
    value: manager.user.empid,
    label: manager.user.username
  }));


  return (
    <Dialog id={Style.customDialog} open={open} handler={handleOpen}>
      <DialogHeader>Enter Employee Details</DialogHeader>
      <DialogBody divider>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-2 mb-8">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <Input
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
              )}
            </div>
            <div className="w-full md:w-1/2 px-2">
              <Input
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-8">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <Input
                label="Employee Id"
                name="employeeId"
                value={formik.values.employeeId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.employeeId && Boolean(formik.errors.employeeId)}
                helperText={formik.touched.employeeId && formik.errors.employeeId}
              />
              {formik.touched.employeeId && formik.errors.employeeId && (
                <div className="text-red-600 text-sm mt-1">{formik.errors.employeeId}</div>
              )}
            </div>
            <div className="w-full md:w-1/2 px-2">
              <SelectField
                label="Department"
                name="department"
                options={departmentOptions}
                formik={formik}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-8">
            <div className="w-full md:w-1/2 px-2">
              <SelectField
                label="Reporting Manager"
                name="reportingManager"
                options={managerOptions}
                formik={formik}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <SelectField
                label="Role"
                name="role"
                options={roleOptions}
                formik={formik}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-8">
            <div className="w-full md:w-1/2 px-2">
              <SelectField
                label="Designation"
                name="designation"
                options={designationOptions}
                formik={formik}
              />
            </div>
          </div>
          {/* <div className="flex flex-wrap -mx-2 mb-8">
            <div className="w-full px-2">
              <Input
                label="Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
          </div> */}
          <DialogFooter className="justify-center gap-4">
            <Button variant="text" color="red" onClick={handleCancel}>
              Cancel
            </Button>
            <Button color="indigo" type="submit">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogBody>
    </Dialog>
  );
}

export default EmployeeForm;
