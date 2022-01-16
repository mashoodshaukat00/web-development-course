export const CREATE_CUSTOMER = gql`
mutation {
  createCustomer(
    input: {
      firstname: "Mirza"
      lastname: "mashood"
      email: "mirza@mashood.com"
      password: "@A345678"
      is_subscribed: true
    }
  ) {
    customer {
      firstname
      lastname
      email
      is_subscribed
    }
  }
}
`;

export const GENERATE_TOKEN = gql`
mutation {
    generateCustomerToken(email: "mirza@mashood.com", password: "@A345678") {
      token
    }
  }
`;

export const CREATE_CUSTOMER_CART = gql`
{
    customerCart{
      id
    }
  }
`;

export const ADD_PRODUCT_TO_CART = gql`
mutation {
    addProductsToCart(
      cartId: "PlQEPQzq91ydznTieTaCqCIdqau8WsU4"
      cartItems: [
        {
          quantity: 1
          sku: "VP02"
        }
      ]
    ) {
      cart {
        items {
          product {
            name
            sku
          }
          quantity
        }
      }
    }
  }
  
`;

export const ADD_SIMPLE_PRODUCT_TO_CART = gql`
mutation {
    addSimpleProductsToCart(
      input: {
        cart_id: "PlQEPQzq91ydznTieTaCqCIdqau8WsU4"
        cart_items: [
          {
            data: {
              quantity: 1
              sku: "VD01"
            }
          }
        ]
      }
    ) {
      cart {
        items {
          id
          product {
            sku
            stock_status
          }
          quantity
        }
      }
    }
  }
`;

export const SET_SHIPPING_ADDRESS = gql`
mutation {
    setShippingAddressesOnCart(
      input: {
        cart_id: "PlQEPQzq91ydznTieTaCqCIdqau8WsU4"
        shipping_addresses: [
          {
            address: {
              firstname: "Mirza"
              lastname: "mashood"
              company: "Fantastic Company"
              street: ["Trondheimsveien 25"]
              city: "Oslo"
              postcode: "0568"
              country_code: "NO"
              telephone: "123-456-0000"
              save_in_address_book: false
            }
          }
        ]
      }
    ) {
      cart {
        shipping_addresses {
          firstname
          lastname
          company
          street
          city
          region {
            code
            label
          }
          postcode
          telephone
          country {
            code
            label
          }
          available_shipping_methods{
            carrier_code
            carrier_title
            method_code
            method_title
          }
        }
      }
    }
  }
`;

export const PLACE_ORDER = gql`
mutation {
    placeOrder(input: {cart_id: "PlQEPQzq91ydznTieTaCqCIdqau8WsU4"}) {
      order {
        order_number
      }
    }
  }
`;