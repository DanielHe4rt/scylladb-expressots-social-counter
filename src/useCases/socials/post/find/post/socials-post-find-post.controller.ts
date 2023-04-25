import { BaseController, StatusCode } from "@expressots/core";
import { controller, httpGet, response } from "inversify-express-utils";
import { SocialsPostFindPostUseCase } from "./socials-post-find-post.usecase";
import { ISocialsPostFindPostResponseDTO } from "./socials-post-find-post.dto";

@controller("/socials/post/find/post")
class SocialsPostFindPostController extends BaseController {

  constructor(private socialsPostFindPostUseCase: SocialsPostFindPostUseCase) {
		super("socials-post-find-post-controller")
	}

  @httpGet("/")
  execute(@response() res: any): ISocialsPostFindPostResponseDTO {
    return this.callUseCase(
            this.socialsPostFindPostUseCase.execute(),
            res,
            StatusCode.OK,
        );
  }
}

export { SocialsPostFindPostController };
