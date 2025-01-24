import type { MetaFunction } from "@remix-run/node";

import { ColorTest } from "@/components/custom";

export const meta: MetaFunction = () => {
  return [
    { title: "Color Test Page" },
    {
      name: "description",
      content: "This is a color test page.",
    },
  ];
};

export default function Colors() {
  return <ColorTest />;
}
