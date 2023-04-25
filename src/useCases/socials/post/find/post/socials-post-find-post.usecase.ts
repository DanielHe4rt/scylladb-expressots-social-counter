import { provide } from "inversify-binding-decorators";

@provide(SocialsPostFindPostUseCase)
class SocialsPostFindPostUseCase {

    constructor() {}

    execute(): string {
        return "your use case";
    }
}

export { SocialsPostFindPostUseCase };
