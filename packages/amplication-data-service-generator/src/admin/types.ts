import { namedTypes } from "ast-types";

export type EntityComponent = {
  name: string;
  file: namedTypes.File;
  modulePath: string;
};

export type EntityComponents = {
  new: EntityComponent;
  list: EntityComponent;
  entity: EntityComponent;
  index: EntityComponent;
};
