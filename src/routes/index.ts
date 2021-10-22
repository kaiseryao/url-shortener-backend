import {Express, Request, Response} from "express";
import {createShortUrl, handleRedirect} from '../controller/shortUrl.controller';
import validateResources from '../middleware/validateResources';
import shortUrlSchema from '../schemas/createShortUrl.schema'

function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response) => {
        return res.send("App is healthy");
    });

    app.post('/api/url', validateResources(shortUrlSchema), createShortUrl);

    app.get('/:shortId', handleRedirect)
}

export default routes;