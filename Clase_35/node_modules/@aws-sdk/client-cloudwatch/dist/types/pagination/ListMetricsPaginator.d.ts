import { ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMetrics(config: CloudWatchPaginationConfiguration, input: ListMetricsCommandInput, ...additionalArguments: any): Paginator<ListMetricsCommandOutput>;
