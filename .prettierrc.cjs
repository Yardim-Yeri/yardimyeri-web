module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  singleAttributePerLine: true,
  importOrder: [
    '^pages/(.*)$',
    '^@/utils/(.*)$',
    '^@/types/(.*)$',
    '^@/enums/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/(.*)$',
    '^../(.*)$',
    '^./(.*)$',
    '^[.]$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
