import gql from 'graphql-tag';

export const fetchRates = currency => gql`
{
  rates(currency: "${currency}") {
    currency
    rate
  }
}`;
