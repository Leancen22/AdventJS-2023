function decode(message) {
  while (message.includes('(')) {
        let UltimoParentesisAbierto = message.lastIndexOf('(');
        let PrimerParentesisCerrado = message.indexOf(')', UltimoParentesisAbierto);

        let invertir = message.substring(UltimoParentesisAbierto + 1, PrimerParentesisCerrado).split('').reverse().join('');

        message = message.substring(0, UltimoParentesisAbierto) + invertir + message.substring(PrimerParentesisCerrado + 1);
    }
    return message;
}
