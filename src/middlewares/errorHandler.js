module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Erreur interne du serveur",
    details: err.details || null
  });
};