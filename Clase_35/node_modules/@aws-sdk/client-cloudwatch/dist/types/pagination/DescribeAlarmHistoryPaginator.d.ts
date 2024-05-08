import { DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput } from "../commands/DescribeAlarmHistoryCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAlarmHistory(config: CloudWatchPaginationConfiguration, input: DescribeAlarmHistoryCommandInput, ...additionalArguments: any): Paginator<DescribeAlarmHistoryCommandOutput>;
