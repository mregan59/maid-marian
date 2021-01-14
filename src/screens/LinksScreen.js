import React from 'react';
import { View } from 'react-native';
import StorybookUIRoot from '../../storybook';
import { MainLayout } from '../layout';
import { dimensions } from '../shared/variables';

export const LinksScreen = (props) => {
    return (
        <MainLayout safeArea={true} showBack {...props} padding={null}>
            <View style={{ flex: 1, width: '100%', height: dimensions.innerHeight - 60 }}>
                <StorybookUIRoot />
            </View>
        </MainLayout>
    );
};
