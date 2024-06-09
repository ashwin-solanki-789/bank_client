export const paths = {
  home: "/",
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    resetPassword: "/auth/reset-password",
  },
  dashboard: {
    overview: "/dashboard",
    account: "/dashboard/account",
    support: "/dashboard/support",
    profile: "/dashboard/profile",
  },
  errors: {
    notFound: "/errors/not-found",
  },
} as const;
