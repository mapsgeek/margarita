// @flow

import React from 'react';
import * as Expo from 'expo';
import KeepAwake from 'expo-keep-awake';
import { Fonts } from '@kiwicom/universal-components';

import SharedApp from './App';

if (__DEV__) {
  KeepAwake.activateKeepAwake();
}

type Props = {||};
type State = {|
  fontsLoaded: boolean,
|};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    Expo.SplashScreen.preventAutoHide();

    this.state = {
      fontsLoaded: false,
    };
  }

  async componentDidMount() {
    await this.loadFonts();
    this.afterFontLoaded();
  }

  loadFonts = () =>
    Expo.Font.loadAsync({
      Roboto: Fonts.Roboto,
      RobotoItalic: Fonts.RobotoItalic,
      RobotoBold: Fonts.RobotoBold,
      RobotoBoldItalic: Fonts.RobotoBoldItalic,
      'orbit-icons': Fonts.OrbitIcons,
    });

  afterFontLoaded = () => {
    this.setState({ fontsLoaded: true }, () => {
      Expo.SplashScreen.hide();
    });
  };

  render() {
    if (this.state.fontsLoaded) {
      return <SharedApp />;
    }
    return null;
  }
}

export default App;

Expo.registerRootComponent(App);
