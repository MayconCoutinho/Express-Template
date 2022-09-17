import connection from "./connection";

const selectAllDados = async () => {
    const result = await connection
            .select("*")
            .from("tabela_teste")
    return result;
}
export default selectAllDados