import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: [],
            };
        });
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((state) => {
            return {
                options: state.options.filter((option) => option !== optionToRemove),
            };
        });
    };
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];

        this.setState(() => {
            return {
                selectedOption: option
            };
        });
    };
    handleAddOption = (option) => {
        if (!option) {
            return "Enter a valid value to add a new option.";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }

        this.setState((state) => {
            return {
                options: [...state.options, option],
            };
        });
    };
    handleClearSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        });
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => {
                    return {
                        options,
                    };
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevprops, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    render() {
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}