export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    DEFAULT: '#718096',
                    100: '#CFD9E0',
                    200: '#CBD5E0',
                    300: '#4A5568'
                },
                green: {
                    DEFAULT: '#1C4532'
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    100: '#F7FAFC'
                },
                dark: {
                    DEFAULT: '#000000'
                }

            },
            backgroundImage: {
                'green-gradient': 'linear-gradient(180deg, #1C4532 46.26%, #B4DAC9 115.64%)',
                'gradient-header': 'linear-gradient(90deg, #1C4532 0%, #B1D3C3 100%)',

            },
        },
    },
    plugins: [],
};
