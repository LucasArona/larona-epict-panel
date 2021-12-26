import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';

import { SimplePanel as EpictPanel } from './EpictPanel';
import { MigHandler } from 'MigHandler';

import { BoxesEditor } from 'editors/BoxesEditor';

export const plugin = new PanelPlugin<SimpleOptions>(EpictPanel)
  .setPanelOptions((builder) => {
    builder.addTextInput({ name: 'Background URL', path: 'bgURL' }).addCustomEditor({
      path: 'boxes',
      name: 'Boxes definitions',
      id: 'boxesDefinitions',
      defaultValue: null,
      editor: BoxesEditor,
    });
  })
  .setMigrationHandler(MigHandler);
