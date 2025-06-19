import { getApod } from '../services/nasa.service.js';
import { Request, Response } from 'express-serve-static-core';
import { APODResponse } from '../types/response.type.js';

export async function getApodController (req: Request, res: Response<APODResponse | { error: string }>): Promise<any> {
    try {
        const data = await getApod();
        return res.status(200).json({
            data: {
                title: data.title,
                copyright: data.copyright,
                imageUrl: data.url
            }   
        });
    } catch (error) {
        console.error('APOD Controller: Error fetching APOD:', error);
        return res.status(500).json({ error: 'APOD Controller: Failed to fetch APOD data' });
    }
}