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
                }
            }
        },
    },
    plugins: [],
};
