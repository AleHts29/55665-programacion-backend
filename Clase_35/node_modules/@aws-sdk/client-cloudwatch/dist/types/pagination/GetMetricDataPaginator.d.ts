import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "../commands/GetMetricDataCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetMetricData(config: CloudWatchPaginationConfiguration, input: GetMetricDataCommandInput, ...additionalArguments: any): Paginator<GetMetricDataCommandOutput>;
