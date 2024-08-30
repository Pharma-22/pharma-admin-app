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
import { Sale } from "./Sale";
import { SaleCountArgs } from "./SaleCountArgs";
import { SaleFindManyArgs } from "./SaleFindManyArgs";
import { SaleFindUniqueArgs } from "./SaleFindUniqueArgs";
import { CreateSaleArgs } from "./CreateSaleArgs";
import { UpdateSaleArgs } from "./UpdateSaleArgs";
import { DeleteSaleArgs } from "./DeleteSaleArgs";
import { Client } from "../../client/base/Client";
import { Product } from "../../product/base/Product";
import { SaleService } from "../sale.service";
@graphql.Resolver(() => Sale)
export class SaleResolverBase {
  constructor(protected readonly service: SaleService) {}

  async _salesMeta(
    @graphql.Args() args: SaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Sale])
  async sales(@graphql.Args() args: SaleFindManyArgs): Promise<Sale[]> {
    return this.service.sales(args);
  }

  @graphql.Query(() => Sale, { nullable: true })
  async sale(@graphql.Args() args: SaleFindUniqueArgs): Promise<Sale | null> {
    const result = await this.service.sale(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sale)
  async createSale(@graphql.Args() args: CreateSaleArgs): Promise<Sale> {
    return await this.service.createSale({
      ...args,
      data: {
        ...args.data,

        client: args.data.client
          ? {
              connect: args.data.client,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Sale)
  async updateSale(@graphql.Args() args: UpdateSaleArgs): Promise<Sale | null> {
    try {
      return await this.service.updateSale({
        ...args,
        data: {
          ...args.data,

          client: args.data.client
            ? {
                connect: args.data.client,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
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

  @graphql.Mutation(() => Sale)
  async deleteSale(@graphql.Args() args: DeleteSaleArgs): Promise<Sale | null> {
    try {
      return await this.service.deleteSale(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Client, {
    nullable: true,
    name: "client",
  })
  async getClient(@graphql.Parent() parent: Sale): Promise<Client | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async getProduct(@graphql.Parent() parent: Sale): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}