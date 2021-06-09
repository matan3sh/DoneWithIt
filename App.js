import React, { useState } from 'react';

import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';

export default function App() {
  return (
    <Screen>
      <AppPicker icon='apps' placeholder='Category' />
    </Screen>
  );
}
