"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_node_1 = __importDefault(require("@kubernetes/client-node"));
const main = () => {
    console.log('Hello World!');
    console.log(client_node_1.default.APIS);
};
//# sourceMappingURL=index.js.map