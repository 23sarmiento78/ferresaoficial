models: [
  {
    name: "Hero",
    type: "object",
    fields: [
      { name: "title", type: "string", required: true },
      { name: "subtitle", type: "string" }
    ]
  },
  {
    name: "About",
    type: "object",
    fields: [
      { name: "title", type: "string", required: true },
      { name: "description", type: "string" },
      { name: "image", type: "image" }
    ]
  },
  {
    name: "Producto",
    type: "object",
    fields: [
      { name: "title", type: "string", required: true },
      { name: "description", type: "string", required: true },
      { name: "image", type: "image", required: true },
      { name: "order", type: "number", required: true },
      { name: "active", type: "boolean", default: true }
    ]
  }
] 