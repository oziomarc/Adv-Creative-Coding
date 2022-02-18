"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = __importStar(require("pixi.js"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let app = new PIXI.Application();
    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';
    app.renderer.backgroundColor = 0xE9FFC2;
    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);
    const path = new PIXI.Graphics();
    // path.x = 0;
    // path.y = 0;
    path.lineStyle(1, 0xababab, 1);
    let radius = 1;
    let fib = 0;
    let temp;
    let angle = 0;
    let scale = 2;
    let fillArray = [0x9CB376, 0xDBE6FF, 0xFFB7A8, 0xB3887F];
    for (let i = 0; i < innerHeight; i += radius) {
        for (let j = 0; j < innerWidth; j += radius) {
            path.drawCircle(innerWidth / 2 + Math.cos(angle) * scale, innerHeight / 2 + Math.sin(angle) * scale, radius * 2);
            angle += 0.2;
            scale += radius / 13;
        }
        let color = fillArray[Math.floor(Math.random() * fillArray.length)];
        path.beginFill(color, 0.7);
        temp = radius;
        radius += fib; // fibonacci incrementation
        fib = temp;
    }
    app.stage.addChild(path);
    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });
    document.body.appendChild(app.view);
});
main();
