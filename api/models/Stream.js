const { Schema, model, Types } = require("mongoose");

const StreamSchema = new Schema(
  {
    title: {
      type: String,
    },

    image: {
      type: String,
    },
    banner: {
      type: String,
    },
    name: {
      type: String,
    },
    category: [
      {
        type: String,
      },
    ], ////  CREAR relacion Categorias
    description: {
      type: String,
    },

    ///  CRAR relacion con Subcriptores
    Facebook: {
      type: String,
    },
    Instagram: {
      type: String,
    },
    Twitter: {
      type: String,
    },
    rules: {
      type: String,
    },
    
    contents: {
      type: String,
    },
    Subscriptions: [
      {
        type: String,
      },
    ],
    language: {
      type: [
        "Inglés",
        "Chino mandarín",
        "Hindi",
        "Español",
        "Francés",
        "Ruso",
        "Portugués",
        "Alemán",
        "Japonés",
      ],
      default: "Español",
    },
    continent: {
      type: [
        "África",
        "Antártida",
        "Asia",
        "Europa",
        "Norteamérica",
        "Oceanía",
        "Sudamérica",
      ],
      default: "Sudamérica",
    },
    rating: [
      {
        type: Types.ObjectId,
        ref: "Rating",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Streams", StreamSchema);
