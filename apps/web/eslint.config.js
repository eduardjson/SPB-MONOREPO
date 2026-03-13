import js from "@eslint/js";
import vitestPlugin from "@vitest/eslint-plugin";
import prettierConfig from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import { configs } from "typescript-eslint";

const eslintConfig = [
  {
    name: "global-ignores",
    ignores: [
      "**/*.snap",
      "**/dist/",
      "**/.yalc/",
      "**/build/",
      "**/temp/",
      "**/.temp/",
      "**/.tmp/",
      "**/.yarn/",
      "**/coverage/",
    ],
  },
  {
    name: `${js.meta.name}/recommended`,
    ...js.configs.recommended,
  },
  configs.strictTypeChecked,
  configs.stylisticTypeChecked,
  vitestPlugin.configs.recommended,
  {
    name: "eslint-plugin-react/jsx-runtime",
    ...reactPlugin.configs.flat["jsx-runtime"],
  },
  reactHooksPlugin.configs["recommended-latest"],
  {
    name: "main",
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 2,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      vitest: {
        typecheck: true,
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-undef": [0],

      // TypeScript правила
      "@typescript-eslint/consistent-type-definitions": [2, "type"],
      "@typescript-eslint/consistent-type-imports": [
        2,
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
          disallowTypeAnnotations: true,
        },
      ],

      // Отключаем стандартные правила в пользу плагинов
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Удаление неиспользуемых импортов
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Запрет на прямые импорты из react-redux
      "no-restricted-imports": [
        2,
        {
          paths: [
            {
              name: "react-redux",
              importNames: ["useSelector", "useStore", "useDispatch"],
              message:
                "Please use pre-typed versions from `src/app/hooks.ts` instead.",
            },
          ],
        },
      ],

      // Сортировка импортов
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. Сам React
            ["^react$", "^react-dom$"],

            // 2. Остальные сторонние библиотеки
            ["^@?\\w", "^(?!react$)"],

            // 3. Библиотеки компонентов (MUI, AntD, и т.д.)
            ["^@mui", "^@material-ui", "^antd", "^@chakra-ui", "^@nextui-org"],

            // 4. Кастомные хуки из проекта
            ["^(@|@shared|@features|@/)(.*/)?hooks(/.*|$)"],

            // 5. Константы и утилиты
            [
              "^(@|@shared|@features|@/)(.*/)?(constants?|utils?|helpers?|types?|interfaces?)(/.*|$)",
            ],

            // 6. Родительские импорты (../)
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

            // 7. Локальные импорты (. /)
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

            // 8. Стили
            ["^.+\\.s?css$"],
          ],
        },
      ],

      "simple-import-sort/exports": "error",

      // Дополнительные правила для импортов
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      // React правила
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          ignoreCase: true,
        },
      ],

      // React Hooks правила
      "react-hooks/exhaustive-deps": "error",

      // Консоль
      "no-console": [
        "warn",
        {
          allow: ["warn", "error", "info"],
        },
      ],
    },
  },
  prettierConfig,
];

export default eslintConfig;
