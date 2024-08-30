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
import { AttendanceRecordService } from "../attendanceRecord.service";
import { AttendanceRecordCreateInput } from "./AttendanceRecordCreateInput";
import { AttendanceRecord } from "./AttendanceRecord";
import { AttendanceRecordFindManyArgs } from "./AttendanceRecordFindManyArgs";
import { AttendanceRecordWhereUniqueInput } from "./AttendanceRecordWhereUniqueInput";
import { AttendanceRecordUpdateInput } from "./AttendanceRecordUpdateInput";

export class AttendanceRecordControllerBase {
  constructor(protected readonly service: AttendanceRecordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AttendanceRecord })
  async createAttendanceRecord(
    @common.Body() data: AttendanceRecordCreateInput
  ): Promise<AttendanceRecord> {
    return await this.service.createAttendanceRecord({
      data: data,
      select: {
        createdAt: true,
        date: true,
        employee: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AttendanceRecord] })
  @ApiNestedQuery(AttendanceRecordFindManyArgs)
  async attendanceRecords(
    @common.Req() request: Request
  ): Promise<AttendanceRecord[]> {
    const args = plainToClass(AttendanceRecordFindManyArgs, request.query);
    return this.service.attendanceRecords({
      ...args,
      select: {
        createdAt: true,
        date: true,
        employee: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AttendanceRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async attendanceRecord(
    @common.Param() params: AttendanceRecordWhereUniqueInput
  ): Promise<AttendanceRecord | null> {
    const result = await this.service.attendanceRecord({
      where: params,
      select: {
        createdAt: true,
        date: true,
        employee: true,
        id: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AttendanceRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAttendanceRecord(
    @common.Param() params: AttendanceRecordWhereUniqueInput,
    @common.Body() data: AttendanceRecordUpdateInput
  ): Promise<AttendanceRecord | null> {
    try {
      return await this.service.updateAttendanceRecord({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          employee: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: AttendanceRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAttendanceRecord(
    @common.Param() params: AttendanceRecordWhereUniqueInput
  ): Promise<AttendanceRecord | null> {
    try {
      return await this.service.deleteAttendanceRecord({
        where: params,
        select: {
          createdAt: true,
          date: true,
          employee: true,
          id: true,
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
