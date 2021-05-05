import {
  Input,
  Stack,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { calculateResult } from "./utils";
import ResultModal from "./ResultModal";

const { useState } = React;

const CalculatorForm = () => {
  const [amountToBePaid, setAmountToBePaid] = useState("");
  const [amountOfMoney, setAmountOfMoney] = useState("");
  const [result, setResult] = useState(null);
  const [currentValuta, setCurrentValuta] = useState([]);

  const valuta = [
    "20000",
    "10000",
    "5000",
    "2000",
    "1000",
    "500",
    "200",
    "100",
    "50",
    "20",
    "10",
    "5",
  ];

  const handleChangeAmountToBePaid = (e) => {
    setAmountToBePaid(e.target.value);
  };
  const handleChangeAmountOfMoney = (e) => {
    setAmountOfMoney(e.target.value);
  };

  const onClickSubmit = () => {
    const writeResult = calculateResult(
      amountOfMoney,
      amountToBePaid,
      currentValuta
    );
    setResult(writeResult);
  };

  const handleResultModalClose = () => {
    setAmountToBePaid("");
    setAmountOfMoney("");
    setResult(null);
  };

  const handleCurrentValuta = (array) => {
    setCurrentValuta(array);
  };

  return (
    <Box p={10}>
      <Stack spacing={4} align="center">
        <CheckboxGroup
          colorScheme="green"
          value={currentValuta}
          onChange={handleCurrentValuta}
        >
          <HStack>
            {valuta.map((value) => (
              <Checkbox key={value} value={value}>
                {value}
              </Checkbox>
            ))}
          </HStack>
        </CheckboxGroup>
        <Input
          placeholder="Amount to be paid"
          value={amountToBePaid}
          onChange={handleChangeAmountToBePaid}
        />
        <Input
          placeholder="Amount of money"
          value={amountOfMoney}
          onChange={handleChangeAmountOfMoney}
        />
        <Button
          size="md"
          width="100px"
          colorScheme="green"
          onClick={onClickSubmit}
        >
          Submit
        </Button>
      </Stack>
      <ResultModal
        result={result}
        isOpen={result}
        onClose={handleResultModalClose}
      />
    </Box>
  );
};

export default CalculatorForm;
