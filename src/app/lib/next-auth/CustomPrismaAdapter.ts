import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { PrismaClient } from "@prisma/client";
import { AdapterAccount } from "next-auth/adapters";


export function CustomPrismaAdapter(prisma: PrismaClient) {
  const baseAdapter = PrismaAdapter(prisma);

  return {
    ...baseAdapter,
    async linkAccount(account: AdapterAccount) {
      return prisma.account.create({
        data: {
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refreshToken: account.refresh_token,    // ✅ snake_case → camelCase
          accessToken: account.access_token,      // ✅
          expiresAt: account.expires_at,
          tokenType: account.token_type,
          scope: account.scope,
          idToken: account.id_token,
          sessionState: account.session_state,
        },
      });
    },
  };
}
