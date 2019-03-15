// @flow

import * as React from 'react';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { margaritaTokens } from '@kiwicom/margarita-design-tokens';

type Props = {|
  +children: React.Node,
|};

export default function StopoverDurationWrapper({ children }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.dottedLine} />
      <Text style={styles.stopoverText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: parseInt(defaultTokens.spaceMedium, 10),
    paddingStart: 0,
  },
  dottedLine: {
    borderStyle: 'dotted',
    borderColor: margaritaTokens.borderColorInkLight,
    borderBottomWidth: 1,
    width: parseInt(defaultTokens.widthIconLarge, 10),
    marginEnd: 30,
  },
  stopoverText: {
    color: margaritaTokens.borderColorInkNormal,
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
  },
});
