/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
      // sans: ["ui-sans-serif", "system-ui"],
      // serif: ["ui-serif", "Georgia"],
      // mono: ["ui-monospace", "SFMono-Regular"],
      // display: ["Oswald"],
      // body: ['"Open Sans"'],
    },
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     fontFamily: {
//       sans: [
//         "Inter var, sans-serif",
//         {
//           fontFeatureSettings: '"cv11", "ss01"',
//           fontVariationSettings: '"opsz" 32',
//         },
//       ],
//     },
//   },
// };
