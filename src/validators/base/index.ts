import { BadRequestException, ValidationError } from "@nestjs/common"

/** Função para a propriedade exceptionFactory em ValidationPipe */
export function ValidationPipeExceptionFactory(errors: ValidationError[]): BadRequestException {
    const errorObject = errors.map((error) => {
        // TODO: Implementar tradutor: constraints: { isNotEmpty: 'password should not be empty' }
        if (error.constraints) {
            return {
                property: error.property,
                message: error.constraints[Object.keys(error.constraints)[0]],
            }
        }
        return {
            property: error.property,
            message: `Ocorreu um erro na validação da propriedade ${ error.property }`,
        }
    })
    return new BadRequestException(errorObject)
}