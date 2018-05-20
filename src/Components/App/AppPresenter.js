import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header';
import Flex, {FlexItem} from 'styled-flex-component';
import Notification from 'Components/Notification';
import Store from 'store';
//import {ThemeContext} from 'themeContext';

const AppPresenter =({}) => (
    <Fragment>
        <Header />
        <Flex alignCenter justifyCenter full column>
            <Store.Consumer>
                {store=>(
                    Object.keys(store.notifications).map(key=>{
                        return <Notification 
                            key={store.notifications[key].id}
                            id={store.notifications[key].id}
                            text={store.notifications[key].text} 
                            seen={store.notifications[key].seen} 
                        />
                    })
                )}
            </Store.Consumer>
        </Flex>
    </Fragment>
);

AppPresenter.propTypes={};

export default AppPresenter;