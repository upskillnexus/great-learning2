import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { IoWarningOutline } from "react-icons/io5"

export function DySureModal({onOpen, isOpen, onClose, message, onSubmit}) {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <Flex bg='gray.50' p='7' rounded={'md'} align={'center'} flexDir={'column'}>
                <Box color={'orange'} fontSize={'50px'}>
                    <IoWarningOutline />
                </Box>
                <Box p='3'>{message}</Box>
              </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Button size='sm' colorScheme='red' bg='#b52828' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button size='sm' variant='ghost' onClick={onSubmit}>Yes</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }