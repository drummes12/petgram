import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import Context from './Context'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-drummes12.vercel.app/graphql',
})

const authLink = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem('token')

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  })

  return forward(operation)
})

const errorLink = onError(({ graphQLErrors }) => {
  if (
    graphQLErrors?.shift().message ===
    'you must be logged in to perform this action'
  ) {
    sessionStorage.removeItem('token')
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, errorLink, httpLink]),
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'),
)
