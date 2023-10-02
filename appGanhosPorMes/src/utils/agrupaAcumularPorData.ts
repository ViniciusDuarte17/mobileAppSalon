import { ItypeService } from "../interface/iTypeService";

export function agruparAcumularPorData(dados: ItypeService[]) {
  const mapaPorData = new Map();

   dados.forEach((item) => {
    const data = item.dataTracker;
    const valorTotal = item.valueTotalByService;

    if (mapaPorData.has(data)) {
      const entradaExistente = mapaPorData.get(data);
      entradaExistente.valueTotalByService += valorTotal;
    } else {
      mapaPorData.set(data, { ...item });
    }
  });

  const resultado = Array.from(mapaPorData.values());

  console.log("resultado", resultado)

  return resultado;
}