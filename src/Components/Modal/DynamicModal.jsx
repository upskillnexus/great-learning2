import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";

export function DynamicModal({ children, isOpen, onOpen, onClose, initialRef, finalRef }) {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal size="3xl" initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent w="1200px">{children}</ModalContent>
      </Modal>
    </>
  );
}
