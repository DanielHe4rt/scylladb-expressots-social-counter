import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";
import { SocialsPostFindUseCase } from "./socials-post-find.usecase";
import { ISocialsPostFindResponseDTO } from "./socials-post-find.dto";

@controller("/socials/post/find")
class SocialsPostFindController extends BaseController {
    constructor(private socialsPostFindUseCase: SocialsPostFindUseCase) {
        super("socials-post-find-controller");
    }

    @httpGet("/")
    execute(@response() res: any): ISocialsPostFindResponseDTO {
        return this.callUseCase(
            this.socialsPostFindUseCase.execute(),
            res,
            StatusCode.OK,
        );
    }
}

export { SocialsPostFindController };
