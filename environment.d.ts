declare global {
	namespace NodeJS {
		interface ProcessEnv {
			botToken: string
			environement?: "dev" | "prod" | "debug"
		}
	}
}

export {}
