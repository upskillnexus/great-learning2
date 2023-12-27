import React, { useState } from "react";
import { Button, Flex, FormControl, Grid } from "@chakra-ui/react";

import FormError from "../../core/FormError";
import DyInput from "../DynamicInputs/DyInput";
import { coursename, genders, occupation } from "../../../data/course";
import DySelectBx from "../DynamicInputs/DySelectBx";

const Step1 = ({ Controller, control, errors, onNext, handleSubmit }) => {
  const [ocu, setOcu] = useState("");

  return (
    <>
      <Grid gridTemplateColumns={"repeat(4,1fr)"} w="full" gap="5">
        {/* Fullname */}
        <Controller
          control={control}
          name="fullname"
          rules={{ required: "Fullname is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title={"Full name"}
                placeholder="Your full name"
              />
              <FormError err={errors} name="fullname" />
            </div>
          )}
        />

        {/* Date of birth */}
        <Controller
          control={control}
          name="dateofbirth"
          rules={{ required: "Date Of Birth is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                onChange={onChange}
                value={value}
                title={"Date Of Birth"}
                type="date"
                placeholder=""
              />

              <FormError err={errors} name="dateofbirth" />
            </div>
          )}
        />

        {/* Course name */}
        <Controller
          control={control}
          name="coursename"
          rules={{ required: "Coruse is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DySelectBx
                value={value}
                onChange={onChange}
                title={"Courses"}
                placeholder="--Select Course--"
                values={coursename}
              />

              <FormError err={errors} name="coursename" />
            </div>
          )}
        />

        {/* Gender */}
        <Controller
          control={control}
          name="gender"
          rules={{ required: "Coruse is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DySelectBx
                value={value}
                onChange={onChange}
                title={"Gender"}
                placeholder="--Select Gender--"
                values={genders}
              />

              <FormError err={errors} name="gender" />
            </div>
          )}
        />

        {/* Occupation */}
        <Controller
          control={control}
          name="occupation"
          rules={{ required: "Coruse is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DySelectBx
                value={value}
                onChange={(val) => {
                  onChange(val), setOcu(val.target.value);
                }}
                title={"Occupation"}
                placeholder="--Select Occupation--"
                values={occupation}
              />

              <FormError err={errors} name="occupation" />
            </div>
          )}
        />

        {/* if occupation is Student */}
        {ocu == "student" ? (
          <>
            <Controller
              control={control}
              name="course"
              rules={{ required: "Course is required*" }}
              render={({ field: { onChange, value } }) => (
                <div>
                  <DyInput
                    value={value}
                    onChange={onChange}
                    title="Course (Pursuing/Completed)"
                    type="text"
                  />
                  <FormError err={errors} name="course" />
                </div>
              )}
            />

            <Controller
              control={control}
              name="college"
              rules={{ required: "College/University is required*" }}
              render={({ field: { onChange, value } }) => (
                <div>
                  <DyInput
                    value={value}
                    onChange={onChange}
                    title="College/University"
                    type="text"
                  />
                  <FormError err={errors} name="college" />
                </div>
              )}
            />

            <Controller
              control={control}
              name="otherQualifications"
              rules={{ required: "Other Qualifications is required*" }}
              render={({ field: { onChange, value } }) => (
                <div>
                  <DyInput
                    value={value}
                    onChange={onChange}
                    title="Other Qualifications"
                    type="text"
                  />
                  <FormError err={errors} name="otherQualifications" />
                </div>
              )}
            />
          </>
        ) : (
          <>
            {/* if occupation is Student */}

            <Controller
              control={control}
              name="designation"
              rules={{ required: "Designation is required*" }}
              render={({ field: { onChange, value } }) => (
                <div>
                  <DyInput value={value} onChange={onChange} title="Designation" type="text" />
                  <FormError err={errors} name="designation" />
                </div>
              )}
            />

            <Controller
              control={control}
              name="companyName"
              rules={{ required: "Company/Organization Name is required*" }}
              render={({ field: { onChange, value } }) => (
                <div>
                  <DyInput
                    value={value}
                    onChange={onChange}
                    title="Company/Organization Name"
                    type="text"
                  />
                  <FormError err={errors} name="companyName" />
                </div>
              )}
            />

            <Controller
              control={control}
              name="educationalQualifications"
              rules={{ required: "Educational Qualifications is required*" }}
              render={({ field: { onChange, value } }) => (
                <div>
                  <DyInput
                    value={value}
                    onChange={onChange}
                    title="Educational Qualifications"
                    type="text"
                  />
                  <FormError err={errors} name="educationalQualifications" />
                </div>
              )}
            />
          </>
        )}
        <Controller
          control={control}
          name="passportphoto"
          rules={{ required: "Passport size Photo is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title="Your Passport size Photo"
                type="file"
              />
              <FormError err={errors} name="passportphoto" />
            </div>
          )}
        />
        {/* Elase */}
      </Grid>
      <Flex justify={"end"} p="2" mt="4" gap="2">
        <Button onClick={handleSubmit(onNext)}>Next</Button>
      </Flex>
    </>
  );
};

export default Step1;
