import { DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput } from "../commands/DescribeAlarmsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAlarms(config: CloudWatchPaginationConfiguration, input: DescribeAlarmsCommandInput, ...additionalArguments: any): Paginator<DescribeAlarmsCommandOutput>;
