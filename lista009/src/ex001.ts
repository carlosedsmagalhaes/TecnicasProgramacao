function calcular(a: any, b: any): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Os parâmetros precisam ser números");
}

try {
  console.log("Soma:", calcular("oi", 2));
} catch (error) {
  error instanceof Error && console.error(error.message);
}

try {
  console.log("Soma:", calcular(1, 2));
} catch (error) {
  error instanceof Error && console.error(error.message);
}
console.log("Fim do programa");
