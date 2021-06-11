module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: '#cc9966',
                secondary: {
                    100: '#777777',
                    200: '#333333',
                }
            },
            fontFamily: {
                body: ['Poppins', 'sans-serif'],
            },
            borderColor: theme => ({
                ...theme('colors'),
                'header': '#E2E2E2',
                'secondary': '#ffed4a',
                'danger': '#e3342f',
            }),
            keyframes: {
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-in-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-in-left': 'fade-in-left 0.5s ease-out'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}