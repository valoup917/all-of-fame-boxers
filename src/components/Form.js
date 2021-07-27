import React from 'react';
import './Form.css';

function Form() {
    return (
        <div className="form">
            <div className="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"></input>
                </div>
            </div>
            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input"></input>
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                    <p class="help is-success">This username is available</p>
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger" type="email" placeholder="Email input"></input>
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password"></input>
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <label class="label">Country</label>
                <p class="control has-icons-left">
                    <span class="select">
                        <select>
                            <option selected>France</option>
                            <option>Usa</option>
                            <option>England</option>
                        </select>
                    </span>
                    <span class="icon is-small is-left">
                        <i class="fas fa-globe"></i>
                    </span>
                </p>
            </div>

            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox"></input>
                        &nbsp;I agree to the
                        <a href="#">&nbsp;terms and conditions</a>
                    </label>
                </div>
            </div>

            <div class="select">
                <select class="is-focused">
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
            </div>
            <div class="select">
                <select class="is-focused">
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
            </div>
            <div class="select">
                <select class="is-focused">
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
            </div>
            

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
        </div> 
    )
}

export default Form;