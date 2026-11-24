import nx from "@nx/eslint-plugin";

export default [
    ...nx.configs["flat/base"],
    ...nx.configs["flat/typescript"],
    ...nx.configs["flat/javascript"],
    {
      "ignores": [
        "**/dist",
        "**/out-tsc",
        "**/vitest.config.*.timestamp*"
      ]
    },
    {
        files: [
            "**/*.ts",
            "**/*.tsx",
            "**/*.js",
            "**/*.jsx"
        ],
        rules: {
            "@nx/enforce-module-boundaries": [
                "error",
                {
                    enforceBuildableLibDependency: true,
                    allow: [
                        "^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$"
                    ],
                    depConstraints: [
                        // El front solo puede usar código del front y lo compartido
                        {
                            sourceTag: "scope:web",
                            onlyDependOnLibsWithTags: ["scope:web", "scope:shared"]
                        },
                        // El back solo puede usar código del back y lo compartido
                        {
                            sourceTag: "scope:api",
                            onlyDependOnLibsWithTags: ["scope:api", "scope:shared"]
                        },
                        // Lo compartido no puede depender de web ni de api
                        {
                            sourceTag: "scope:shared",
                            onlyDependOnLibsWithTags: ["scope:shared"]
                        },
                        // Reglas por tipo (rol de la librería)
                        { sourceTag: "type:app",       onlyDependOnLibsWithTags: ["type:feature", "type:ui", "type:util", "type:contracts"] },
                        { sourceTag: "type:feature",   onlyDependOnLibsWithTags: ["type:ui", "type:util", "type:contracts"] },
                        { sourceTag: "type:ui",        onlyDependOnLibsWithTags: ["type:ui", "type:util", "type:contracts"] },
                        { sourceTag: "type:util",      onlyDependOnLibsWithTags: ["type:util", "type:contracts"] },
                        { sourceTag: "type:contracts", onlyDependOnLibsWithTags: ["type:contracts"] }
                    ]
                }
            ]
        }
    },
    {
        files: [
            "**/*.ts",
            "**/*.tsx",
            "**/*.cts",
            "**/*.mts",
            "**/*.js",
            "**/*.jsx",
            "**/*.cjs",
            "**/*.mjs"
        ],
        // Override or add rules here
        rules: {}
    }
];
