import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
query AllProductCategories {
    categoryList {
      children {
        uid
        id
        level
        name
        path
        url_path
        url_key
        children {
          uid
          id
          level
          name
          path
          url_path
          url_key
        }
      }
    }
  }
`;


export const GET_PRODUCTS_BY_CATERGORY_ID = gql`
query ProductsByCategory($categoryId:String!){
    products(
      filter: { category_id: { eq: $categoryId } }
      pageSize: 25
      sort: { price: DESC }
    ) {
      items {
        name
        id
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      total_count
      page_info {
        page_size
      }
    }
  }  
`;