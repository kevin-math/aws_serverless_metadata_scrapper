export const metadataSchema = {
  title: "metadataSchema",
  type: "object",
  required: ["requestUrl", "ogDescription", "ogTitle"],
  properties: {
    requestUrl: {
      type: "string",
    },
    ogDescription: {
      type: "string",
    },
    ogTitle: {
      type: "string",
    },
    ogType: {
      type: "string",
    },
    ogImage: {
      type: "array",
    },
    ogLocale: {
      type: "string",
    },
  },
};

export const errorSchema = {
  title: "errorSchema",
  type: "object",
  required: ["message"],
  properties: {
    message: {
      type: "string",
    },
  },
};

// module.exports = { metadataSchema, errorSchema };
