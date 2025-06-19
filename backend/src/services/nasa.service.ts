import axios from 'axios';
import { APODApiResponse } from "../types/nasa.type.js";

const BASE_URL = 'https://api.nasa.gov';

export async function getApod () {
    try {
        const response = await axios.get<APODApiResponse>(
            `${BASE_URL}/planetary/apod`,
            {
                params: {
                    api_key: process.env.NASA_KEY
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching APOD:', error);
        throw new Error('Failed to fetch APOD data');
    }
    
}

export async function getMarsRoverPhotos (rover: string, sol: number, camera: string, page: number) {
    const response = await fetch(`
        ${BASE_URL}/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&page=
        ${page}&api_key=${process.env.NASA_KEY}`
    );
    if (!response.ok) {
        throw new Error(`Error fetching Mars Rover photos: ${response.statusText}`);
    }
    return response.json();
}

