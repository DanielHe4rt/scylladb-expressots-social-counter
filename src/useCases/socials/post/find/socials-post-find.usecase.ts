import { provide } from "inversify-binding-decorators";

@provide(SocialsPostFindUseCase)
class SocialsPostFindUseCase {

    constructor() {}

    execute(): string {
        return "your use case";
    }
}

export { SocialsPostFindUseCase };
