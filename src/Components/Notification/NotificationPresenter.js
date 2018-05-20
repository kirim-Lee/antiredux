import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex, {FlexItem} from 'styled-flex-component';
import FontAwesome from 'react-fontawesome';
import Store from "store";

const Notification=styled.div`
    background-color: white;
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    width: 80%;
    padding: 20px;
    border-radius: 15px;
    margin:5px 0;
    ${props =>(!props.seen &&`border:1px solid #f1c40f`)}
`;

const Title=styled.span`
    font-weight:600;
    flex:1;
`;

const Button = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 0;
    color: white;
    font-size: 16px;
    cursor: pointer;
    background-color: ${props => (props.seen ? "#7f8c8d" : "#f1c40f")};
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease-out;
    &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    }
    &:active,
    &:focus {
    outline: none;
    }
    &:active {
    transform: translateY(1px);
    }
`;

const NotificationPresenter = ({ id, text, seen}) => (
    <Notification seen={seen}>
        <Flex alignCenter justifyBetween>
            <Title>
                {text}
            </Title>
            <FlexItem>
                <Fragment>
                    <Store.Consumer>
                        {store=>(
                            <Fragment>
                                <Button success seen={seen} onClick={()=> store.seeNotifications(id)}>
                                    <FontAwesome name="check" />
                                </Button>
                                <Button danger seen={seen} onClick={()=> store.deleteNotifications(id)}>
                                    <FontAwesome name="times" />
                                </Button>
                            </Fragment>
                        )}
                    </Store.Consumer>
                </Fragment>
            </FlexItem>
            
        </Flex>
    </Notification>
);

NotificationPresenter.propTypes={
    //text:PropTypes.string.isRequired,
    //seen:PropTypes.bool.isRequired,
    //id:PropTypes.number.isRequired,
};

export default NotificationPresenter;
