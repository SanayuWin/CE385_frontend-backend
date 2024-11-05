import express, {Request, Response, Router} from "express";

import { handleServiceResponse, validateRequest } from "@common/utils/httpHandlers";
import { userService } from "@modules/users/userService";
import { CreateUserSchema, GetUserSchema } from "@modules/users/userModel";


export const userRouter = (() => {
    const router = express.Router();

    router.get("/get", async (req: Request, res: Response) => {
        const ServiceResponse = await userService.findAll();
        handleServiceResponse(ServiceResponse, res);
    })

    router.post("/register", validateRequest(CreateUserSchema), async (req: Request, res: Response) => {
        const payload = req.body;
        const ServiceResponse = await userService.create(payload);
        handleServiceResponse(ServiceResponse, res);
    })

    return router;
})();