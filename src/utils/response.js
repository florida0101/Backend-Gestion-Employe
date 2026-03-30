// src/utils/response.js

function success(res, data = null, message = "Opération réussie !") {
  return res.json({
    success: true,
    message,
    data
  });
}

function error(res, errorMessage = "Une erreur est survenue", status = 500) {
  return res.status(status).json({
    success: false,
    message: errorMessage
  });
}

module.exports = { success, error };