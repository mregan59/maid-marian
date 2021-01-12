// storybook/index.js
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
// storybook/config.js
configure(() => {
    require('../components/Task.stories.js');
    require('../components/TaskList.stories.js');
  }, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;