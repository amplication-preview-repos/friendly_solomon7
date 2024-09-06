/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Wallet } from "./Wallet";
import { WalletCountArgs } from "./WalletCountArgs";
import { WalletFindManyArgs } from "./WalletFindManyArgs";
import { WalletFindUniqueArgs } from "./WalletFindUniqueArgs";
import { CreateWalletArgs } from "./CreateWalletArgs";
import { UpdateWalletArgs } from "./UpdateWalletArgs";
import { DeleteWalletArgs } from "./DeleteWalletArgs";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { User } from "../../user/base/User";
import { WalletService } from "../wallet.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Wallet)
export class WalletResolverBase {
  constructor(
    protected readonly service: WalletService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Wallet",
    action: "read",
    possession: "any",
  })
  async _walletsMeta(
    @graphql.Args() args: WalletCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Wallet])
  @nestAccessControl.UseRoles({
    resource: "Wallet",
    action: "read",
    possession: "any",
  })
  async wallets(@graphql.Args() args: WalletFindManyArgs): Promise<Wallet[]> {
    return this.service.wallets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Wallet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Wallet",
    action: "read",
    possession: "own",
  })
  async wallet(
    @graphql.Args() args: WalletFindUniqueArgs
  ): Promise<Wallet | null> {
    const result = await this.service.wallet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Wallet)
  @nestAccessControl.UseRoles({
    resource: "Wallet",
    action: "create",
    possession: "any",
  })
  async createWallet(@graphql.Args() args: CreateWalletArgs): Promise<Wallet> {
    return await this.service.createWallet({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Wallet)
  @nestAccessControl.UseRoles({
    resource: "Wallet",
    action: "update",
    possession: "any",
  })
  async updateWallet(
    @graphql.Args() args: UpdateWalletArgs
  ): Promise<Wallet | null> {
    try {
      return await this.service.updateWallet({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Wallet)
  @nestAccessControl.UseRoles({
    resource: "Wallet",
    action: "delete",
    possession: "any",
  })
  async deleteWallet(
    @graphql.Args() args: DeleteWalletArgs
  ): Promise<Wallet | null> {
    try {
      return await this.service.deleteWallet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @graphql.Parent() parent: Wallet,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Wallet): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
