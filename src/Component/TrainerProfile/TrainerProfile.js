import React from 'react'
import{Link} from 'react-router-dom'
import "./trainerprofile.css";
const TrainerProfile = () => {
    return (
        <div class="container user">
        <div class="form-group">
            <label for="username">Name</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="username" aria-describedby="name"
                    placeholder="User Name" />
            </div>
        </div>
        <div class="form-group">
            <label for="slug">Email</label>
            <div class="col-sm-6">
                <input type="number" class="form-control" id="email" placeholder="email" />
            </div>
        </div>
        <div class="form-group">
            <label for="slug">Password</label>
            <div class="col-sm-6">
                <input type="number" class="form-control" id="password" placeholder="Password" />
            </div>
        </div>
        <div class="form-group">
            <label for="slug">Roles</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="roles" placeholder="roles" />
            </div>
        </div>
        
        <div class="form-group">
            <label for="description">Picture</label>
            <div class="col-sm-6">
                <input type="file" class="form-control" id="pic" placeholder="Click to Upload" />
            </div>
        </div>
        
        
        <button type="submit" class="btn btn-custom">Add</button>
    </div>
    )
}

export default TrainerProfile
