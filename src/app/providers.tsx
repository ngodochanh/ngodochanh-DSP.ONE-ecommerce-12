import { NextUIProvider } from '@nextui-org/react';

export function NexTUIProviders({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
