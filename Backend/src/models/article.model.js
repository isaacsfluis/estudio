import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    article: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Habilita las marcas de tiempo automáticamente
    toJSON: {
      virtuals: true, // Incluye los virtuals en la transformación
      transform: function (doc, ret) {
        delete ret.__v; // Elimina el campo `__v`
        delete ret._id; // Elimina el campo `_id`
        return ret; // Retorna el objeto modificado
      },
    },
  }
);

export default mongoose.model("Article", articleSchema);