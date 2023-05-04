import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Result({ data }) {
  const {loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;


  return (
    <Stack>
      <Typography textAlign='center' variant='h5'>
        Monthly Payment: ${monthlyPayment.toFixed(2)}
      </Typography>
    </Stack>
  )
}
