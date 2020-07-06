import { PanelPlugin } from "@grafana/data";
import { SimpleOptions } from "./types";
import { SimplePanel as EpictPanel } from "./EpictPanel";
import { EpictEditor } from "EpictEditor";
import { MigHandler } from "MigHandler";

export const plugin = new PanelPlugin<SimpleOptions>(EpictPanel)
  .setEditor(EpictEditor)
  .setMigrationHandler(MigHandler);
