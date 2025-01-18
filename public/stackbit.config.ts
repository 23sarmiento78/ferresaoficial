import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true }
          ]
        },
        {
          name: "Producto",
          type: "page",
          urlPath: "/productos/{slug}",
          filePath: "content/productos/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "image", type: "image", required: true },
            { name: "order", type: "number", required: true },
            { name: "active", type: "boolean", default: true }
          ]
        }
      ],
    })
  ],
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === "page");

    return documents
      .filter((d) => pageModels.some(m => m.name === d.modelName))
      .map((document) => {
        const urlModel = (() => {
          switch (document.modelName) {
            case 'Page':
              return 'pages';
            case 'Producto':
              return 'productos';
            default:
              return null;
          }
        })();

        return {
          stableId: document.id,
          urlPath: `/${urlModel}/${document.id}`,
          document,
          isHomePage: document.id === 'index',
        };
      })
      .filter(Boolean) as SiteMapEntry[];
  }
}); 