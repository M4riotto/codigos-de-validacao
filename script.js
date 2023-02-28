//verifica_CPF
function formatCPF(cpf) {
  // Remove all non-digit characters
  cpf = cpf.replace(/\D/g, '');

  // Verify if the CPF has a valid length
  if (cpf.length !== 11) {
    return 'CPF inválido';
  }

  // Format the CPF with dots and hyphen
  cpf = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9);

  return cpf;
}

// Example usage
console.log(formatCPF('12345678900')); // Output: 123.456.789-00
