import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppPresenter from './AppPresenter';
import Store from 'store';

class AppContainer extends Component{
    static propTypes={};
    constructor(props){
        super(props)
        this._deleteNotifications=(id)=>{
            this.setState(currentState=>{
                const newState = delete currentState.notifications[id];
                return newState;
            })
        }
        this._seeNotifications=(id)=>{
            this.setState(currentState =>{
                const newState={
                    ...currentState,
                    notifications:{
                        ...currentState.notifications,
                        [id]:{
                            ...currentState.notifications[id],
                            text:"success",
                            seen:true
                        }
                    }
                }
                return newState;
            })
        }
        this.state = {
            notifications:{
                "1":{
                    id:1,
                    text:"Something",
                    seen:false
                },
                "2":{
                    id:2,
                    text:"Something else",
                    seen:false
                },
                "3":{
                    id:3,
                    text:"Something else but different",
                    seen:false
                }
            },
            seeNotifications:this._seeNotifications,
            deleteNotifications:this._deleteNotifications
        }
    }
    render(){
        return (
            <Store.Provider value={this.state}>
                <AppPresenter {...this.state} />
            </Store.Provider>
        );
    }
}

export default AppContainer;