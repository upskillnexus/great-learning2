import { Button, FormControl, Grid, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import DyInput from "../../DynamicInputs/DyInput";
import InputError from "../../Errors/InputError";
import useUpdateCourse from "../../../Libs/Mutation/Course/useUpdateCourse";
import { useEffect } from "react";

export function UpdateCourseModal({isOpen, onOpen, onClose, course}) {
    const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const { mutate: handleUpdate, isPending: updating, isSuccess: success} = useUpdateCourse(course?._id)

    const onSubmit = (data) => {
        handleUpdate(data)
    } 

    useEffect(() => {
        reset({
            programName: course?.programName,
            duration: course?.duration,
            modules: course?.modules,
            fee: course?.fee,
            registrationFee: course?.registrationFee,
        })
        if(success){
            onClose()
        }
    },[course, reset, updating, success])

    return (
      <>  
        <Modal size={'2xl'} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
                    <Button isLoading={updating} type="submit" colorScheme="red" bg='#b52828' mt={4}>
                        Update
                    </Button>
                </form>
            </ModalBody>
  
            <ModalFooter>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }