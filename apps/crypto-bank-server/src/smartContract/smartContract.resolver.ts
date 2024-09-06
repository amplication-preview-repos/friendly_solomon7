import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SmartContractResolverBase } from "./base/smartContract.resolver.base";
import { SmartContract } from "./base/SmartContract";
import { SmartContractService } from "./smartContract.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SmartContract)
export class SmartContractResolver extends SmartContractResolverBase {
  constructor(
    protected readonly service: SmartContractService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
