/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SmartContractService } from "../smartContract.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SmartContractCreateInput } from "./SmartContractCreateInput";
import { SmartContract } from "./SmartContract";
import { SmartContractFindManyArgs } from "./SmartContractFindManyArgs";
import { SmartContractWhereUniqueInput } from "./SmartContractWhereUniqueInput";
import { SmartContractUpdateInput } from "./SmartContractUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SmartContractControllerBase {
  constructor(
    protected readonly service: SmartContractService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SmartContract })
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSmartContract(
    @common.Body() data: SmartContractCreateInput
  ): Promise<SmartContract> {
    return await this.service.createSmartContract({
      data: data,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        ownerId: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SmartContract] })
  @ApiNestedQuery(SmartContractFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async smartContracts(
    @common.Req() request: Request
  ): Promise<SmartContract[]> {
    const args = plainToClass(SmartContractFindManyArgs, request.query);
    return this.service.smartContracts({
      ...args,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        ownerId: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SmartContract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async smartContract(
    @common.Param() params: SmartContractWhereUniqueInput
  ): Promise<SmartContract | null> {
    const result = await this.service.smartContract({
      where: params,
      select: {
        code: true,
        createdAt: true,
        id: true,
        name: true,
        ownerId: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SmartContract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSmartContract(
    @common.Param() params: SmartContractWhereUniqueInput,
    @common.Body() data: SmartContractUpdateInput
  ): Promise<SmartContract | null> {
    try {
      return await this.service.updateSmartContract({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          id: true,
          name: true,
          ownerId: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SmartContract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSmartContract(
    @common.Param() params: SmartContractWhereUniqueInput
  ): Promise<SmartContract | null> {
    try {
      return await this.service.deleteSmartContract({
        where: params,
        select: {
          code: true,
          createdAt: true,
          id: true,
          name: true,
          ownerId: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
