import React, { Suspense } from 'react';
import Root from './views/Root';

export default function App() {
  return (
    <Suspense fallback={null}>
      <Root />
    </Suspense>
  );
}
