function isValidCep(cep) {
  return /\d{5}-\d{3}/.test(cep);
}

function formatCep(cep) {
  cep = cep.replace(/[^0-9-]/g, "");

  if (cep.length !== 6 && !cep.charAt(cep.length - 1).match(/\d/)) {
    cep = cep.substring(0, cep.length - 1);
  }

  if (/^\d{6}/.test(cep)) {
    cep = cep.substring(0, 5) + "-" + cep.substring(5);
  }

  return cep;
}

export { isValidCep, formatCep };
