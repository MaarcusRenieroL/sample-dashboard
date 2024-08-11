import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "ar",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
