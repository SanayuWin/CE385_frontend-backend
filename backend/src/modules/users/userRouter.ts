import express, {Request, Response, Router} from "express";

import { handleServiceResponse, validateRequest } from "@common/utils/httpHandlers";
import { userService } from "@modules/users/userService";
import { CreateUserSchema, GetUserSchema, LoginUserSchema} from "@modules/users/userModel";


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

    router.post("/login", validateRequest(LoginUserSchema), async (req: Request, res: Response) => {
        const payload = req.body;
        const ServiceResponse = await userService.login(payload,res);
        handleServiceResponse(ServiceResponse, res);
    })

    router.get("/logout", async (req: Request, res: Response) => {
        const ServiceResponse = await userService.logout(res);
        handleServiceResponse(ServiceResponse, res);
    })

    return router;
})();