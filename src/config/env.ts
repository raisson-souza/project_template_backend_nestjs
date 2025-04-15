const env = {
    PORT: () => {
        const _ = process.env["PORT"]
        if (!_) throw new Error("PORT env not defined.")
        return _
    },
    JWT_SECRET: () => {
        const _ = process.env["JWT_SECRET"]
        if (!_) throw new Error("JWT_SECRET env not defined.")
        return _
    },
    DATABASE_POSTGRES: {
        HOST: () => {
            const _ = process.env["DATABASE_POSTGRES_HOST"]
            if (!_) throw new Error("DATABASE_POSTGRES_HOST env not defined.")
            return _
        },
        PORT: () => {
            const _ = process.env["DATABASE_POSTGRES_PORT"]
            if (!_) throw new Error("DATABASE_POSTGRES_PORT env not defined.")
            return _
        },
        USERNAME: () => {
            const _ = process.env["DATABASE_POSTGRES_USERNAME"]
            if (!_) throw new Error("DATABASE_POSTGRES_USERNAME env not defined.")
            return _
        },
        PASSWORD: () => {
            const _ = process.env["DATABASE_POSTGRES_PASSWORD"]
            if (!_) throw new Error("DATABASE_POSTGRES_PASSWORD env not defined.")
            return _
        },
        DATABASE: () => {
            const _ = process.env["DATABASE_POSTGRES_DATABASE"]
            if (!_) throw new Error("DATABASE_POSTGRES_DATABASE env not defined.")
            return _
        },
    },
}

export default env