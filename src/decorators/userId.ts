import { createParamDecorator, ExecutionContext } from '@nestjs/common'

/**
 * Decorator para extração do userId proveniente do AuthGuard
 * @example (@UserId() userId: number | null)
 */
export const UserId = createParamDecorator(
    (_: unknown, ctx: ExecutionContext): number | null => {
        try {
            const request = ctx.switchToHttp().getRequest()
            return request["userId"]
                ? Number.parseInt(request["userId"])
                : null
        }
        catch (ex) {
            return null
        }
    }
)

/* UTILIZAÇÃO
@UseGuards(AuthGuard)
@Get("/route")
async updateUser(@UserId() userId: number | null): {
    // ...
}
 */