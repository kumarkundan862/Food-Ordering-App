import React, { Component } from 'react';
import Modal from 'react-modal';
import 'typeface-roboto';
import "./Header.css";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { FormControl, FormHelperText, Input, InputLabel, Tab, Tabs, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}


class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            contactnum: "",
            contactnumRequired: "displayNone",
            password: "",
            passwordRequired: "displayNone",
            firstNameRequired: "displayNone",
            firstName: "",
            lastNameRequired: "displayNone",
            lastName: "",
            emailRequired: "displayNone",
            email: "",
            registerContactRequired: "displayNone",
            registerContact: "",
            registerPasswordRequired: "displayNone",
            registerPassword: ""
        }
    }

    openModalHandler = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false,
            contactnum: "",
            contactnumRequired: "displayNone",
            value: 0,
            password: "",
            passwordRequired: "displayNone",
            firstNameRequired: "displayNone",
            emailRequired: "displayNone",
            registerPasswordRequired: "displayNone",
            registerContactRequired: "displayNone"
        });
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value })
    }

    loginClickHandler = () => {
        this.state.contactnum === "" ? this.setState({ contactnumRequired: "displayBlock" }) : this.setState({ contactnumRequired: "displayNone" });

        this.state.password === "" ? this.setState({ passwordRequired: "displayBlock" }) : this.setState({ passwordRequired: "displayNone" });
    }


    registerClickHandler = () => {
        this.state.firstName === "" ? this.setState({ firstNameRequired: "displayBlock" }) : this.setState({ firstNameRequired: "displayNone" });

        this.state.email === "" ? this.setState({ emailRequired: "displayBlock" }) : this.setState({ emailRequired: "displayNone" });

        this.state.registerContact === "" ? this.setState({ registerContactRequired: "displayBlock" }) : this.setState({ registerContactRequired: "displayNone" });

        this.state.registerPassword === "" ? this.setState({ registerPasswordRequired: "displayBlock" }) : this.setState({ registerPasswordRequired: "displayNone" });
    }

    contactnumChangeHandler = (e) => {
        this.setState({ contactnum: e.target.value });
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    inputFirstnameChangeHandler = (e) => {
        this.setState({ firstName: e.target.value });
    }

    inputLastnameChangeHandler = (e) => {
        this.setState({ lastName: e.target.value });
    }

    inputEmailChangeHandler = (e) => {
        this.setState({ email: e.target.value });
    }

    inputRegisterContactChangeHandler = (e) => {
        this.setState({ registerContact: e.target.value });
    }

    registerPasswordChangeHandler = (e) => {
        this.setState({ registerPassword: e.target.value });
    }

    render() {
        return (
            <div className="header-container">
                <FastfoodIcon className="fast-food-logo" />
                <div className="search-action">
                    <SearchIcon className="header-search-icon" />
                    <TextField className="search-restaurant-text" id="standard-basic" placeholder="Search by Restaurant Name" />
                </div>
                <div className="header-login">
                    <Button variant="contained" color="default" startIcon={<AccountCircleIcon />} onClick={this.openModalHandler}>
                        LOGIN
                    </Button>
                </div>
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Signup" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer >
                            <FormControl required >
                                <InputLabel htmlFor="contactnum" >Contact No.</InputLabel>
                                <Input id="contactnum" type="number" onChange={this.contactnumChangeHandler} />
                                <FormHelperText className={this.state.contactnumRequired}><span className="red" >required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required >
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}><span className="red" >required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
                                Login
                        </Button>
                        </TabContainer>}


                    {this.state.value === 1 &&
                        <TabContainer >
                            <FormControl required >
                                <InputLabel htmlFor="firstName" >First Name</InputLabel>
                                <Input id="firstName" type="text" onChange={this.inputFirstnameChangeHandler} />
                                <FormHelperText className={this.state.firstNameRequired}><span className="red" >required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required >
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input id="lastName" type="lastName" onChange={this.inputLastnameChangeHandler} />
                                <FormHelperText className={this.state.lastNameRequired}><span className="red" >required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required >
                                <InputLabel htmlFor="email" >Email</InputLabel>
                                <Input id="email" type="email" onChange={this.inputEmailChangeHandler} />
                                <FormHelperText className={this.state.emailRequired}><span className="red" >required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required >
                                <InputLabel htmlFor="passsword">Password</InputLabel>
                                <Input id="password" type="password" onChange={this.registerPasswordChangeHandler} />
                                <FormHelperText className={this.state.registerPasswordRequired}><span className="red" >required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required >
                                <InputLabel htmlFor="registerContact">Contact No.</InputLabel>
                                <Input id="registerContact" type="number" onChange={this.inputRegisterContactChangeHandler} />
                                <FormHelperText className={this.state.registerContactRequired}><span className="red" >required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>
                                Signup
                        </Button>
                        </TabContainer>}
                </Modal>
            </div>
        )
    }
}

export default Header;