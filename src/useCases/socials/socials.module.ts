import { CreateModule } from "@expressots/core";
import { SocialsPostFindController } from "@useCases/socials/post/find/socials-post-find.controller";

const SocialsModule = CreateModule([SocialsPostFindController]);

export { SocialsModule };
