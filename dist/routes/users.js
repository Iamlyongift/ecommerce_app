"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const uploadImage_1 = require("../library/helpers/uploadImage");
const router = express_1.default.Router();
router.post('/register_user', uploadImage_1.upload.single("profile_picture"), userController_1.RegisterUser);
router.post('/login', userController_1.loginUser);
exports.default = router;
