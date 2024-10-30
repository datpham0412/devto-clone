const production = process.env.NODE_ENV === "production";

export const config = {
  appUrl:
    process.env.NEXT_PUBLIC_APP_URL ??
    (production
      ? "https://devto-clone-datpham.vercel.app"
      : "http://localhost:3000"),
};
