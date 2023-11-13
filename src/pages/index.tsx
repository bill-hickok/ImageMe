import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import SideNav from "src/pages/side-nav";
import { api } from "~/utils/api";
import Form from "../components/common/form/form";
import { FormikValues } from "formik";
import AppTextInput from "~/components/common/form/AppTextInput";
import AppRadioInput from "~/components/common/form/AppRadioInput";
import AppTextbox from "~/components/common/form/AppTextbox";
import AppSubmitButton from "~/components/common/form/AppSubmitButton";
import Button from "@mui/material/Button";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <>
      <SideNav />
      <div>
        <Form
          handleSubmit={function (values: FormikValues): void {
            throw new Error("Function not implemented.");
          }}
          handleChanged={function (values: FormikValues): void {
            throw new Error("Function not implemented.");
          }}
        >
          <div>
            <AppTextInput label="Name" name="name" type="" />
            <AppTextInput label="Email" name="email" type="email" />
            <AppTextInput label="Password" name="password" type="password" />
            <AppRadioInput
              label="Gender"
              name="gender"
              options={genderOptions}
            />
            <AppTextbox label="Description" name="description" />
            <Button variant="text">Text</Button>
          </div>
        </Form>
      </div>
      {/* <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
          
        </div>
      </main> */}
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return <SideNav />;
}

// import React from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { TextField, Radio, RadioGroup, FormControlLabel, Checkbox, FormControl, Select, Switch, MenuItem } from '@mui/material';

// const formSpacingStyle = {
//   marginBottom: '20px',
//   paddingLeft: '10px',
//   paddingRight: '10px',
// }

// interface FormValues {
//   email: string;
//   password: string;
//   bio: string;
//   birthdate: string;
//   gender: string;
//   acceptTerms: boolean;
//   favoriteColor: string;
// }

// const MyFormik: React.FC = () => {
//   const initialValues: FormValues = {
//     email: '',
//     password: '',
//     bio: '',
//     birthdate: '',

//     gender: 'male',
//     acceptTerms: false,
//     favoriteColor: '',
//   };

//   const onSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
//     // Handle form submission logic here
//     console.log(values);
//     setSubmitting(false);
//   };

//   return (
//     <div style={formSpacingStyle}>
//       <h1>Material-UI Formik Example</h1>
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <Form>
//           <div style={formSpacingStyle}>
//             <TextField
//               label="Email"
//               type="email"
//               name="email"
//               variant="outlined"
//               fullWidth
//             />
//             <ErrorMessage name="email" component="div" />
//           </div>

//           <div style={formSpacingStyle}>
//             <TextField
//               label="Password"
//               type="password"
//               name="password"
//               variant="outlined"
//               fullWidth
//             />
//             <ErrorMessage name="password" component="div" />
//           </div>

//           <div style={formSpacingStyle}>
//             <TextField
//               label="Bio"
//               multiline
//               name="bio"
//               rows={4}
//               variant="outlined"
//               fullWidth
//             />
//           </div>

//           <div style={formSpacingStyle}>
//             <TextField
//               label="Birthdate"
//               type="date"
//               name="birthdate"
//               variant="outlined"
//               fullWidth
//             />
//           </div>

//           <div style={formSpacingStyle}>
//             <FormControl component="fieldset">
//               <RadioGroup row name="gender" >
//                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//                 <FormControlLabel value="other" control={<Radio />} label="Other" />
//               </RadioGroup>
//             </FormControl>
//           </div>

//           <div style={formSpacingStyle}>
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="I accept the terms and conditions"
//               name="acceptTerms"
//             />
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="I love the terms and conditions"
//               name="loveTerms"
//             />
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="I adore the terms and conditions"
//               name="adoreTerms"
//             />
//           </div>

//           <div style={formSpacingStyle}>
//             <FormControl variant="outlined" fullWidth>
//               <Select
//                 label="Favorite Color"
//                 name="favoriteColor"
//               >
//                 <MenuItem value="" disabled selected>
//                   <em>Choose a color...</em>
//                 </MenuItem>
//                 <MenuItem value="red">Red</MenuItem>
//                 <MenuItem value="blue">Blue</MenuItem>
//                 <MenuItem value="green">Green</MenuItem>
//               </Select>
//             </FormControl>
//           </div>

//           <div style={formSpacingStyle}>
//             <FormControlLabel
//               control={<Switch name="over18" />}
//               label="Over 18?"
//             />
//           </div>

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default MyFormik;

// import React from 'react';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { TextField, Radio, RadioGroup, FormControlLabel, Checkbox, FormControl, Select, Switch, MenuItem } from '@mui/material';

// const formSpacingStyle = {
//   marginBottom: '20px',
//   paddingLeft: '10px',
//   paddingRight: '10px',
// }

// interface FormValues {
//   email: string;
//   password: string;
//   bio: string;
//   birthdate: string;
//   gender: string;
//   acceptTerms: boolean;
//   favoriteColor: string;
// }

// const MyFormik: React.FC = () => {
//   const initialValues: FormValues = {
//     email: '',
//     password: '',
//     bio: '',
//     birthdate: '',

//     gender: 'male',
//     acceptTerms: false,
//     favoriteColor: '',
//   };

//   const onSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
//     // Handle form submission logic here
//     console.log(values);
//     setSubmitting(false);
//   };

//   return (
//     <div style={formSpacingStyle}>
//       <h1>Material-UI Formik Example</h1>
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <Form>
//           <div style={formSpacingStyle}>
//             <TextField
//               label="Email"
//               type="email"
//               name="email"
//               variant="outlined"
//               fullWidth
//             />
//             <ErrorMessage name="email" component="div" />
//           </div>

//           <div style={formSpacingStyle}>
//             <TextField
//               label="Password"
//               type="password"
//               name="password"
//               variant="outlined"
//               fullWidth
//             />
//             <ErrorMessage name="password" component="div" />
//           </div>

//           <div style={formSpacingStyle}>
//             <TextField
//               label="Bio"
//               multiline
//               name="bio"
//               rows={4}
//               variant="outlined"
//               fullWidth
//             />
//           </div>

//           <div style={formSpacingStyle}>
//             <TextField
//               label="Birthdate"
//               type="date"
//               name="birthdate"
//               variant="outlined"
//               fullWidth
//             />
//           </div>

//           <div style={formSpacingStyle}>
//             <FormControl component="fieldset">
//               <RadioGroup row name="gender" >
//                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//                 <FormControlLabel value="other" control={<Radio />} label="Other" />
//               </RadioGroup>
//             </FormControl>
//           </div>

//           <div style={formSpacingStyle}>
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="I accept the terms and conditions"
//               name="acceptTerms"
//             />
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="I love the terms and conditions"
//               name="loveTerms"
//             />
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="I adore the terms and conditions"
//               name="adoreTerms"
//             />
//           </div>

//           <div style={formSpacingStyle}>
//             <FormControl variant="outlined" fullWidth>
//               <Select
//                 label="Favorite Color"
//                 name="favoriteColor"
//               >
//                 <MenuItem value="" disabled selected>
//                   <em>Choose a color...</em>
//                 </MenuItem>
//                 <MenuItem value="red">Red</MenuItem>
//                 <MenuItem value="blue">Blue</MenuItem>
//                 <MenuItem value="green">Green</MenuItem>
//               </Select>
//             </FormControl>
//           </div>

//           <div style={formSpacingStyle}>
//             <FormControlLabel
//               control={<Switch name="over18" />}
//               label="Over 18?"
//             />
//           </div>

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default MyFormik;