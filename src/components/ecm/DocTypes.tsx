import AppTextInput from "~/components/common/form/AppTextInput";
import AppRadioInput from "~/components/common/form/AppRadioInput";
import AppTextbox from "~/components/common/form/AppTextbox";
import Button from "@mui/material/Button";
import Form from "../common/form/form";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <>
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
    </>
  );
}
