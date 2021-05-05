import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

const ResultModal = ({ result, isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {result ? (
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>Valuta</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.keys(result).map((key) => {
                    return (
                      <Tr key={key}>
                        <Td>{key}</Td>
                        <Td>{result[key]}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            ) : null}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              New Calculate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ResultModal;
