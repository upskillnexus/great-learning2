import React, { useEffect, useState } from "react";
import { Button, Flex, FormControl, Grid, Text, Textarea } from "@chakra-ui/react";

import FormError from "../../core/FormError";
import DyInput from "../DynamicInputs/DyInput";
import { coursename, genders, occupation } from "../../../data/course";
import DySelectBx from "../DynamicInputs/DySelectBx";

const Step1 = ({ Controller, control, errors, onNext, handleSubmit, getValues }) => {
  return (
    <>
      <Grid gridTemplateColumns={"repeat(3,1fr)"} w="full" gap="5">
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

        {/* educational_institution */}
        <Controller
          control={control}
          name="course"
          rules={{ required: "Course is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DySelectBx
                value={value}
                onChange={onChange}
                title={"Courses"}
                placeholder="--Select Course--"
                values={coursename}
              />

              <FormError err={errors} name="educational_institution" />
            </div>
          )}
        />

        {/* Gender */}
        <Controller
          control={control}
          name="gender"
          rules={{ required: "Course is required*" }}
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
          rules={{ required: "Course is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DySelectBx
                value={value}
                onChange={onChange}
                title={"Occupation"}
                placeholder="--Select Occupation--"
                values={occupation}
              />

              <FormError err={errors} name="occupation" />
            </div>
          )}
        />
      </Grid>
      {/*  */}
      <Grid gridTemplateColumns={"repeat(3,1fr)"} mt="5" gap="5">
        {/* if occupation is Student */}
        {getValues?.occupation == "" ? null : getValues?.occupation == "student" ? (
          <>
            <Controller
              control={control}
              name="institution_name"
              render={({ field: { onChange, value } }) => (
                <div>
                  <DyInput
                    value={getValues?.institution_name}
                    onChange={onChange}
                    title="Educational Institution’s Name"
                    type="text"
                  />
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
                  <DyInput
                    value={getValues?.designation}
                    onChange={onChange}
                    title="Designation"
                    type="text"
                  />
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
                    value={getValues?.companyName}
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
                    value={getValues?.educationalQualifications}
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
        {/* Elase */}
      </Grid>

      {/* File */}
      <Grid gridTemplateColumns={"repeat(2,1fr)"} mt="5" gap="5">
        <Controller
          control={control}
          name="passportphoto"
          rules={{ required: "Passport size Photo is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                // value={value}
                onChange={onChange}
                title="Upload Passport size Photo*"
                type="file"
              />
              <FormError err={errors} name="passportphoto" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="cv"
          rules={{ required: "CV is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                // value={value}
                onChange={onChange}
                title="Upload Your CV*"
                type="file"
              />
              <FormError err={errors} name="cv" />
            </div>
          )}
        />
      </Grid>

      {/* File */}

      <Grid gridTemplateColumns={"repeat(1,1fr)"} mt="8" gap="0">
        <Controller
          control={control}
          name="reasontojoin"
          render={({ field: { onChange, value } }) => (
            <div>
              <Text lineHeight={1} fontWeight={"medium"}>
                Why do you want to take up this course?
              </Text>
              <Textarea
                maxLength={500}
                value={value}
                onChange={onChange}
                placeholder="Write here..."
              />
            </div>
          )}
        />
      </Grid>

      {/*  */}
      <Flex justify={"end"} p="2" mt="4" gap="2">
        <Button onClick={handleSubmit(onNext)}>Next</Button>
      </Flex>
    </>
  );
};

export default Step1;
