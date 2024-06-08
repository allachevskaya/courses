
const nextConfig = {
	reactStrictMode: false,
	env: {
		appUrl: process.env.URL
	},
	images: {
		domains: [`s3.${process.env.HOSTNAME}`]
	},

}

export default nextConfig;