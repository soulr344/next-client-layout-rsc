import "server-only";

export const serverOnlyFetch = async () => {
  await new Promise((res) => setTimeout(res, 3000));

  return [
    {
      name: "Some Data",
      description: "Fetched from a server only import",
    },
  ];
};
