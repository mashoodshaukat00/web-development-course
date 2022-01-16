import {
    InMemoryCache,makeVar 
  } from "@apollo/client";


export const selectedCategoryVar = makeVar([]);

export const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          selectedCategory: {
            read() {
              return selectedCategoryVar();
            }
          }
        }
      }
    }
  });