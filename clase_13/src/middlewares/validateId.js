export function validateId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({
        error: "El ID es un texto. Por favor, ingrese un número válido",
      });
  }

  next();
}
