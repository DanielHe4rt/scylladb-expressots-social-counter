import { CreateModule } from "@expressots/core";
import { SocialsPostFindPostController } from "./post/socials-post-find-post.controller";
import { SocialsPostFindpostController } from "./post/socials-post-findpost.controller";
import { SocialsPostFindController } from "./post/socials-post-find.controller";

const SocialsModule = CreateModule([SocialsPostFindPostController, SocialsPostFindpostController, SocialsPostFindController]);

export { SocialsModule };
