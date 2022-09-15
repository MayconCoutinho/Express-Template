"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connection_1 = __importDefault(require("./data/connection"));
app_1.default.get('/alunos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
            SELECT * FROM alunos_labenu;        
        `);
        res.status(200).send(result[0]);
    }
    catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
}));
app_1.default.get('/alunosbuilder', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, connection_1.default)("alunos_labenu");
        res.status(200).send(result);
    }
    catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
}));
const server = app_1.default.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map