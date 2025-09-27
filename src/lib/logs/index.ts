import winston from "winston";

export const logger = winston.createLogger({
    level: "debug", // 👈 minimum level to log
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }), // include stack if present
        winston.format.splat(),                  // printf-style %o, %s
        winston.format.json()                    // 1 JSON line per log
    ),
    defaultMeta: {
        service: process.env.npm_package_name ?? "app",
        env: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    },
    transports: [new winston.transports.Console()],
});