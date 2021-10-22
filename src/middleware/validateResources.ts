import { AnyObjectSchema } from 'yup';
import { Request, Response, NextFunction } from 'express';

const validateResources = (ressourceSchema: AnyObjectSchema) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await ressourceSchema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (e) {
        return res.sendStatus(400);
    }
};

export default validateResources;