import React from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './login.css'

function login(){
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <h1>user authentication</h1>
                    <form>
                        <input type='text' placeholder="username" className='form-control'></input>
                        <input type='text' placeholder="password" className='form-control'></input>
                        <input type='submit' className='btn btn-primary'></input>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default login;