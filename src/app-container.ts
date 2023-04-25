import { AppContainer } from "@expressots/core";
import { SocialsModule } from "@useCases/socials/socials.module";

const appContainer = new AppContainer();

const container = appContainer.create([
    // Adicione seus módulos aqui
    SocialsModule,
]);

export { container };
