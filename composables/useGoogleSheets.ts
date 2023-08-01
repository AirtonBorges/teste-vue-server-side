let sheetRange = "Sheet1!A1:D200";

export interface IItem {
    id: number,
    produto: string,
    preco: string,
    imagem: string
}

export function getVars() {
    const SPREAD_SHEET_ID = useRuntimeConfig().public.SPREAD_SHEET_ID;
    const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;

    return { SPREAD_SHEET_ID, GOOGLE_API_KEY }
}

export async function obterProdutos() {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
    const realUrl = `https://content-sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${sheetRange}?key=${GOOGLE_API_KEY}`;
    const result:{values:string[]} = await $fetch(realUrl);

    const resultado = result.values
    .slice(1, result.values.length)
    .map((p, pS) => {
      return {
        id: pS,
        produto: p[1],
        preco: p[2],
        imagem: p[3]
      } as IItem;
    });

    return resultado;
}