import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { userRepository } from "@modules/users/userRepository";
import { TypePayloadUser } from "@modules/users/userModel";

import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import { jwtGenerator } from "@common/utils/jwtGenerator";

export const userService = {

    findAll: async () => {
        const categories = await userRepository.findAllAsync();
        return new ServiceResponse(
            ResponseStatus.Success,
            "Get all success",
            categories,
            StatusCodes.OK
        )
    },

    create: async (payload: TypePayloadUser) => {
        try {
            const checkUesr = await userRepository.findByName(payload.username);
            if (checkUesr) {
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Uesrname already taken",
                    null,
                    StatusCodes.BAD_REQUEST
                )
            }
            const user = await userRepository.create(payload);
            return new ServiceResponse(
                ResponseStatus.Success,
                "create user success",
                null,
                StatusCodes.OK
            )
        } catch (ex) {
            const errorMessage = "Error create user : " + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}