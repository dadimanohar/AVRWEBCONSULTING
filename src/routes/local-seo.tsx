import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/local-seo")({
  beforeLoad: () => {
    throw redirect({
      to: "/seo-services/local-seo",
      statusCode: 301,
    });
  },
  component: () => null,
});
