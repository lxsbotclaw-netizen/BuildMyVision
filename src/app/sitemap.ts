import type { MetadataRoute } from "next";
import { getAllEntries } from "@/data/lexikon";
import { getBaseUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  const lexikonEntries = getAllEntries().map((entry) => ({
    url: `${baseUrl}/lexikon/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/lexikon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...lexikonEntries,
  ];
}
