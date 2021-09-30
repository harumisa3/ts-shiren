"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const TestService_1 = require("../services/TestService");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
// ルーティングする
const router = express_1.default.Router();
// routerにルーティングの動作を記述する
router.get('/helloWorld', (req, res) => {
    res.status(200).send({ message: 'Hello, world' });
});
router.get('/test', (req, res, next) => {
    const service = new TestService_1.TestService();
    service
        .test()
        .then(result => res.status(200).send(result))
        .catch(next);
});
// -------------------------------------------------
//  以下、何のルーティングにもマッチしないorエラー
// -------------------------------------------------
// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((req, res) => {
    res.status(404);
    res.render('error', {
        param: {
            status: 404,
            message: 'not found'
        },
    });
});
//routerをモジュールとして扱う準備
module.exports = router;
