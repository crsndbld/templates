import { graphql } from 'react-relay';

export default graphql`
query ProductListQuery {
  node(id: "WzEsICJlY29tbWVyY2UiLCAicHJvZHVjdHMiLCAiNDQ5MmNmNzktMjM3NC00YTczLWFhNTAtYTUzZjMwMzgyYWRlIl0=") {
    ... on ecommerce_products {
      id
      name
      createdat
      updatedat
    }
  }
}
`;
