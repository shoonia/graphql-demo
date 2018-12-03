import gql from 'graphql-tag';

export const FETCH_RATES = gql`
  query rates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
  }
}`;
