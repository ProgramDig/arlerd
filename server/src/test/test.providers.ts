import { Provider } from "@nestjs/common";
import { Test } from "./test.model";

export const testProviders: Provider[] = [
  {
    provide: "test",
    useValue: Test
  }
];