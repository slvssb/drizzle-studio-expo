const useDrizzleStudio =
  process.env.NODE_ENV !== "production"
    ? require("./useDrizzleStudio").default
    : () => {};

export { useDrizzleStudio };
