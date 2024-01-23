import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Grid,
  Flex,
  Heading,
} from '@chakra-ui/react';
import InputError from '../../../Components/Errors/InputError';
import DyInput from '../../../Components/DynamicInputs/DyInput';
import useCreateCourse from '../../../Libs/Mutation/Course/useCreateCourse';

const AddProgramForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const { mutate: handleCreateCourse, isPending: creating, isSuccess: created } = useCreateCourse();


  const onSubmit = (data) => {
    handleCreateCourse(data)
  };

  useEffect(() => {
    if (created && !creating) {
        reset();
    }
}, [created, creating, reset]);

  return (
    <Flex flexDir={'column'} align={'center'} justify={'center'} p={4} h='full' >

      <Box spacing={4} w='90%' p='6' border={'2px solid #b52828'} rounded={'md'}>
        <Heading>Add Course</Heading>
        <Box mt='4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid w='full' gap='4' gridTemplateColumns={'repeat(2,1fr)'}>
                    <FormControl id="programName">
                        <Controller
                            control={control}
                            rules={{ required: 'Program Name is required.' }}
                            name="programName"
                            render={({ field: { onChange, value } }) => (
                            <>
                                <DyInput
                                    type="text"
                                    onChange={onChange}
                                    value={value}
                                    title={'Course Name'}
                                />
                                <InputError err={errors} name="programName" />
                            </>
                        )}
                        />
                    </FormControl>

                    <FormControl id="duration">
                        <Controller
                        control={control}
                        rules={{ required: 'Duration is required.' }}
                        name="duration"
                        render={({ field: { onChange, value } }) => (
                            <>
                                <DyInput
                                    type="text"
                                    title={"Duration"}
                                    onChange={onChange}
                                    value={value}
                                />
                                <InputError err={errors} name="duration" />
                            </>
                        )}
                        />
                    </FormControl>

                    <FormControl id="modules">
                        <Controller
                        control={control}
                        rules={{ required: 'Modules are required.' }}
                        name="modules"
                        render={({ field: { onChange, value } }) => (
                            <>
                            <DyInput
                                title='Modules'
                                type="text"
                                onChange={onChange}
                                value={value}
                            />
                            <InputError err={errors} name="modules" />
                            </>
                        )}
                        />
                    </FormControl>

                    <FormControl id="fee">
                        <Controller
                        control={control}
                        rules={{
                            required: 'Fee is required.',
                            pattern: {
                            value: /^\d+$/,
                            message: 'Please enter a valid number.',
                            },
                        }}
                        name="fee"
                        render={({ field: { onChange, value } }) => (
                            <>
                                <DyInput
                                    title='Fee'
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                />
                                <InputError err={errors} name="fee" />
                            </>
                        )}
                        />
                    </FormControl>

                    <FormControl id="registrationFee">
                        <Controller
                            control={control}
                            rules={{
                                required: 'Registration Fee is required.',
                                pattern: {
                                value: /^\d+$/,
                                message: 'Please enter a valid number.',
                                },
                            }}
                            name="registrationFee"
                            render={({ field: { onChange, value } }) => (
                                <>
                                <DyInput
                                    title={'Registration Fee'}
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                />
                                <InputError err={errors} name="registrationFee" />
                                </>
                            )}
                        />
                    </FormControl>
                </Grid>
                <Button isLoading={creating} type="submit" colorScheme="red" bg='#b52828' mt={4}>
                    Add Program
                </Button>
            </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default AddProgramForm;
