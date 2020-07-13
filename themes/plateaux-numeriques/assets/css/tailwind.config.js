const plugin = require('tailwindcss/plugin')

module.exports = {
	theme: {
		extend: {
			spacing: {
				'1/2': '50%',
				'1/3': '33.333333%',
				'2/3': '66.666667%',
				'1/4': '25%',
				'2/4': '50%',
				'3/4': '75%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
				'1/6': '16.666667%',
				'2/6': '33.333333%',
				'3/6': '50%',
				'4/6': '66.666667%',
				'5/6': '83.333333%',
				'1/12': '8.333333%',
				'2/12': '16.666667%',
				'3/12': '25%',
				'4/12': '33.333333%',
				'5/12': '41.666667%',
				'6/12': '50%',
				'7/12': '58.333333%',
				'8/12': '66.666667%',
				'9/12': '75%',
				'9/16': '56.25%',
				'10/12': '83.333333%',
				'11/12': '91.666667%',
				'1/1': '100%',
			},
			width: {
				'1/8': '12.5%'
			},
			maxWidth: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				'16':	'4rem',
				'20':	'5rem',
				'24':	'6rem',
				'32':	'8rem',
				'40': '10rem',
				'48': '12rem',
				'56': '14rem',
				'64': '16rem'
			}
		}
	},
	variants: {},
	plugins: [
		plugin(function({ addBase, config }) {
			addBase({
				'h1': { fontSize: config('theme.fontSize.4xl') },
				'h2': { fontSize: config('theme.fontSize.3xl') },
				'h3': { fontSize: config('theme.fontSize.2xl') },
				'h4': { fontSize: config('theme.fontSize.xl') },
				'h5': { fontSize: config('theme.fontSize.lg') },
				'h6': { fontSize: config('theme.fontSize.base') }
			})
		})
	]
}
