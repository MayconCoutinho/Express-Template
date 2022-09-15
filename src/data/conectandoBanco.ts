import connection from "./connection";

const selectAllDados = async () => {

    const result = await connection
            .select("*")
            .from("docente")

    return result;
}

export default selectAllDados