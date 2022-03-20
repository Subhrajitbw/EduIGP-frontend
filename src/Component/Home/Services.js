import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./home.css"
export default function Services() {
    const [services, setServices] = useState("");
    const [image, setImage] = useState("")
    useEffect(() => {
        const fetch = async () => {
            const service = await axios.get(`http://127.0.0.1:8080/service/get`);
            setServices(service.data[0]);
            setImage(services.image.data)
        }
        fetch();
    }, [])
    return (
        <div>
            <div class="services container-fluid text-center">
                <h4 class="text-center">Our Services</h4>
                <div class="row text-center">
                    <div class="col-md-8">
                        <div class="row justify-content-center">
                            <div class="service col-md-8">
                                Service
                            </div>
                            <div class="service col-md-8">
                                Service
                            </div>
                            <div class="service col-md-8">
                                Service
                            </div>
                            <div class="service col-md-8">
                                Service
                            </div>
                            <div class="service col-md-8">
                                Service
                            </div>
                            <div class="service col-md-8">
                                Service
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}