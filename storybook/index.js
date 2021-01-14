// storybook/index.js
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
// storybook/config.js
configure(() => {
    require('../src/components/Task.stories.js');
    require('../src/components/TaskList.stories.js');
    require('../src/components/Calendar/Calendar.stories.js');
  }, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;