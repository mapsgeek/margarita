// @flow

import * as React from 'react';
import { default as NextApp, Container } from 'next/app';
import { LayoutContextProvider } from '@kiwicom/margarita-utils';
import { Alert, AlertContextProvider } from '@kiwicom/margarita-components';
import { UserContextProvider } from '@kiwicom/margarita-core';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <UserContextProvider>
          <AlertContextProvider>
            <LayoutContextProvider>
              <Component {...pageProps} />
            </LayoutContextProvider>
            <Alert />
          </AlertContextProvider>
        </UserContextProvider>
      </Container>
    );
  }
}