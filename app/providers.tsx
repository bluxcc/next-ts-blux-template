"use client";

import { BluxProvider, networks } from "@bluxcc/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BluxProvider
      config={{
        appName: "Test",
        appId: process.env.NEXT_PUBLIC_BLUX_APP_ID,
        networks: [networks.mainnet, networks.testnet],
      }}
    >
      {children}
    </BluxProvider>
  );
}
