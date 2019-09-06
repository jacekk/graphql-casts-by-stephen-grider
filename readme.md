# GraphQL with React: The Complete Developers Guide

-   https://www.udemy.com/graphql-with-react-course/
-   https://github.com/StephenGrider/GraphQLCasts

### Users server

-   `cd users-server`
-   `yarn install`
-   `yarn dev`
-   open http://localhost:4000/graphql

Example queries:

```graphql
{
	user(id: 2) {
		id
		name
		company {
			id
			name
			users {
				id
			}
		}
	}
	apple: company(id: 1) {
		...companyDetails
	}
	google: company(id: 2) {
		...companyDetails
	}
}

fragment companyDetails on Company {
	id
	name
	market
	catchPhrase
}
```

### Users client

-   `cd users-client`
-   `yarn install`
-   `yarn dev`
-   open http://localhost:1234
