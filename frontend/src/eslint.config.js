import { defineConfig } from "eslint/config";
import html from "eslint-plugin-html";
import es from "eslint-plugin-es";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("cesium/browser"),

    plugins: {
        html,
        es,
    },

    languageOptions: {
        ecmaVersion: 2023,
        sourceType: "script",
    },

    rules: {
        "max-len": ["error", {
            code: 80,
        }],

        "no-unused-vars": ["error", {
            vars: "all",
            args: "none",
        }],
    },
}]);